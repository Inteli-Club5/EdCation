#![no_std]
extern crate stylus_sdk;
use stylus_sdk::{prelude::*, storage::StorageAddress};

#[stylus::contract]
pub struct SimuladorToken {
    owner: StorageAddress,
    balances: StorageMap<StorageAddress, u128>,
    total_supply: StorageU128,
}

#[stylus::external]
impl SimuladorToken {
    #[init]
    pub fn new(initial_supply: u128) -> Self {
        let caller = msg::sender();
        let mut token = Self {
            owner: StorageAddress::new(),
            balances: StorageMap::new(),
            total_supply: StorageU128::new(),
        };

        token.owner.set(caller);
        token.total_supply.set(initial_supply);
        token.balances.insert(caller, initial_supply);
        token
    }

    pub fn name(&self) -> &'static str {
        "Simulador"
    }

    pub fn symbol(&self) -> &'static str {
        "SMD"
    }

    pub fn decimals(&self) -> u8 {
        18
    }

    pub fn total_supply(&self) -> u128 {
        self.total_supply.get()
    }

    pub fn balance_of(&self, account: StorageAddress) -> u128 {
        self.balances.get(account).unwrap_or(0)
    }

    pub fn transfer(&mut self, to: StorageAddress, amount: u128) -> bool {
        let sender = msg::sender();
        let sender_balance = self.balance_of(sender);

        if sender_balance < amount {
            return false;
        }

        self.balances.insert(sender, sender_balance - amount);
        let recipient_balance = self.balance_of(to);
        self.balances.insert(to, recipient_balance + amount);

        true
    }

    pub fn mint(&mut self, to: StorageAddress, amount: u128) {
        let caller = msg::sender();
        if caller != self.owner.get() {
            panic!("Somente o proprietário pode mintar tokens!");
        }

        let current_balance = self.balance_of(to);
        self.balances.insert(to, current_balance + amount);
        self.total_supply.set(self.total_supply.get() + amount);
    }

    pub fn burn(&mut self, from: StorageAddress, amount: u128) {
        let caller = msg::sender();
        if caller != self.owner.get() {
            panic!("Somente o proprietário pode queimar tokens!");
        }

        let current_balance = self.balance_of(from);
        if current_balance < amount {
            panic!("Saldo insuficiente para queimar!");
        }

        self.balances.insert(from, current_balance - amount);
        self.total_supply.set(self.total_supply.get() - amount);
    }
}
