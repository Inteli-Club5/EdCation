#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod certificado {
    use ink_storage::collections::HashMap as StorageHashMap;
    use ink_storage::traits::SpreadAllocate;

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct Certificado {
        owner: AccountId,
        token_uris: StorageHashMap<u64, String>,
        token_counter: u64,
        base_uri: String,
    }

    impl Certificado {
        #[ink(constructor)]
        pub fn new(initial_owner: AccountId) -> Self {
            let base_uri = "https://plum-atomic-lemur-391.mypinata.cloud/ipfs/".to_string();
            let mut contract = Self {
                owner: initial_owner,
                token_uris: StorageHashMap::new(),
                token_counter: 0,
                base_uri,
            };
            contract
        }

        #[ink(message)]
        pub fn base_uri(&self) -> String {
            self.base_uri.clone()
        }

        #[ink(message)]
        pub fn mint(&mut self, to: AccountId) -> u64 {
            assert_eq!(self.env().caller(), self.owner, "Only the owner can mint tokens");

            let token_id = self.token_counter;
            self.token_counter += 1;

            let token_uri = format!("{}bafkreifbij4ayztkirwkyamifqu5wxgwoxwmrscwp53yk4oc2dt4miwccu", self.base_uri);
            self.token_uris.insert(token_id, token_uri);

            token_id
        }

        #[ink(message)]
        pub fn get_token_uri(&self, token_id: u64) -> Option<String> {
            self.token_uris.get(&token_id).cloned()
        }

        #[ink(message)]
        pub fn transfer_ownership(&mut self, new_owner: AccountId) {
            assert_eq!(self.env().caller(), self.owner, "Only the owner can transfer ownership");
            self.owner = new_owner;
        }

        #[ink(message)]
        pub fn get_owner(&self) -> AccountId {
            self.owner
        }
    }

    #[cfg(test)]
    mod tests {
        use super::*;
        use ink_env::{test, call};
        use ink_lang as ink;

        #[test]
        fn test_mint_and_get_uri() {
            let initial_owner = AccountId::from([0x1; 32]);
            let mut contract = Certificado::new(initial_owner);
            let token_id = contract.mint(AccountId::from([0x2; 32]));
            let token_uri = contract.get_token_uri(token_id).unwrap();
            assert_eq!(token_uri, "https://plum-atomic-lemur-391.mypinata.cloud/ipfs/bafkreifbij4ayztkirwkyamifqu5wxgwoxwmrscwp53yk4oc2dt4miwccu");
        }

        #[test]
        fn test_transfer_ownership() {
            let initial_owner = AccountId::from([0x1; 32]);
            let mut contract = Certificado::new(initial_owner);
            let new_owner = AccountId::from([0x2; 32]);
            contract.transfer_ownership(new_owner.clone());
            assert_eq!(contract.get_owner(), new_owner);
        }
    }
}
