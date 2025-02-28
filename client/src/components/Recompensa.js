import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import ingresso from './images/Ingresso.png';
import musica from './images/musica.png';
import token from './images/tokens.png';

const TOKEN_ADDRESS = "0xc09Db0c478dCB189330331df1A8837A22357A6E7";
const RECIPIENT_ADDRESS = "0x7d2e47076043786803b2258511359C3C198c3b73";
const TOKEN_ABI = [
    { "constant": true, "inputs": [{ "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" },
    { "constant": false, "inputs": [{ "name": "spender", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" },
    { "constant": false, "inputs": [{ "name": "to", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }
];

const connectMetaMaskAndPay = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            // Solicitar contas da MetaMask
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            console.log("Conectado com a conta:", accounts[0]);

            // Verifica se está na rede Arbitrum Sepolia
            const networkId = await window.ethereum.request({ method: 'eth_chainId' });
            if (networkId !== '0x66eee') {  // ID da Arbitrum Sepolia
                try {
                    // Adicionar a rede Arbitrum Sepolia se necessário
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: "0x66eee",
                            chainName: "Arbitrum Sepolia",
                            nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                            rpcUrls: ["https://sepolia-rollup.arbitrum.io/rpc"],
                            blockExplorerUrls: ["https://explorer.arbitrum.io/"]
                        }]
                    });
                } catch (addError) {
                    console.error("Erro ao adicionar a rede Arbitrum Sepolia:", addError);
                    alert("Erro ao adicionar a rede Arbitrum Sepolia. Tente novamente.");
                    return;
                }
            }

            // Interagir diretamente com o contrato usando o ABI e endereço
            const balance = await window.ethereum.request({
                method: 'eth_call',
                params: [{
                    to: TOKEN_ADDRESS,
                    data: '0x70a08231000000000000000000000000' + accounts[0].substring(2).padStart(64, '0'), // balanceOf(address)
                }]
            });

            // Verificar saldo do usuário
            const balanceInEther = parseInt(balance, 16) / 1e18;  // Converter de Wei para Ether
            console.log("Saldo do usuário:", balanceInEther);

            const amount = 10; // Quantidade de tokens a ser transferida

            if (balanceInEther < amount) {
                alert("Saldo insuficiente para completar a transação.");
                return;
            }

            // Aprovar a transferência
            const approveData = '0x095ea7b3000000000000000000000000' + RECIPIENT_ADDRESS.substring(2).padStart(64, '0') + (amount * 1e18).toString(16).padStart(64, '0');
            await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: accounts[0],
                    to: TOKEN_ADDRESS,
                    data: approveData,
                }]
            });

            // Transferir tokens
            const transferData = '0xa9059cbb000000000000000000000000' + RECIPIENT_ADDRESS.substring(2).padStart(64, '0') + (amount * 1e18).toString(16).padStart(64, '0');
            const transferTx = await window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: accounts[0],
                    to: TOKEN_ADDRESS,
                    data: transferData,
                }]
            });
            console.log("Transferência enviada! Hash:", transferTx);

            window.location.href = '/home';
        } catch (error) {
            console.error("Erro ao conectar ou transacionar:", error);
            alert("Erro ao processar a transação.");
        }
    } else {
        alert("MetaMask não encontrada. Instale a MetaMask para continuar.");
    }
};

const Modal = ({ isOpen, onClose, premio }) => {
    if (!isOpen || !premio) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={premio.imagem} className="track-icon-2" alt={premio.name} />
                <h2>{premio.name}</h2>
                <a className="texto-link" href={`https://sepolia.scrollscan.com/address/${premio.resumo}`}>
                    <p className="texto-link">{premio.resumo}</p>
                </a>
                <center>
                    <div className="token-container">
                        <img src={token} className="token-icon" alt="Token" />
                        <p className="titulo7"> {premio.SMD}</p>
                    </div>
                </center>
                <button className="buttonComprar" onClick={connectMetaMaskAndPay}>Comprar</button>
                <button className="close-button" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

const Recompensa = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [premioSelecionado, setPremioSelecionado] = useState(null);

    const abrirModal = (premio) => {
        setPremioSelecionado(premio);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setPremioSelecionado(null);
    };

    const Recomp = [
        { name: "Ingresso", resumo: "0xcAeFEc77F848504C2559801180d8284B5dBcD86E", SMD: "20,00", imagem: ingresso },
        { name: "Música", resumo: "0x2fc88293BF7026DA8326542844227Bf82423359E", SMD: "70,00", imagem: musica },
    ];

    return (
        <div className='containerHomeG'>
            <div className="menu-container">
                <div className="logo-container">
                    <Link to="/home">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <div className="profile-container">
                    <Link to="/conta">
                        <img src={profile} alt="Conta" className="profile-image" />
                    </Link>
                </div>
            </div>
            <div className="content-container">
                <center>
                    <Link to="/home">
                        <button className='buttonComprar3'>Receber Certificado</button>
                    </Link>
                </center>
                <div className='RecTok'>
                    <h1 className="title">Recompensas</h1>
                </div>
                <hr className="horizontal-line" />
                <div className="tracks-container">
                    {Recomp.map((premio, index) => (
                        <div key={index} className='track-card2' onClick={() => abrirModal(premio)}>
                            <img src={premio.imagem} className='track-icon2' alt={premio.name} />
                            <p className="track-name2">{premio.name}</p>
                            <div className="token-container">
                                <img src={token} className="token-icon" alt="Token" />
                                <p className="titulo7"> {premio.SMD}</p>
                            </div>
                            <button className='buttonComprar'>Adquirir</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={modalAberto} onClose={fecharModal} premio={premioSelecionado} />
        </div>
    );
};

export default Recompensa;
