fn main() {
    println!("Exemplo");
    let owner = AccountId::from([0x1; 32]); // Simulando o dono do contrato
    let mut contrato = Certificado::new(owner);
    let token_id = contrato.mint(AccountId::from([0x2; 32]));
    println!("Token criado com ID: {}", token_id);
}
