import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import ingresso from './images/Ingresso.png';
import musica from './images/musica.png';
import { BrowserProvider, parseUnits } from "ethers";
import { Contract } from "ethers";
import token from './images/tokens.png';

const TOKEN_ADDRESS = "0xc09Db0c478dCB189330331df1A8837A22357A6E7";
const RECIPIENT_ADDRESS = "0x7d2e47076043786803b2258511359C3C198c3b73";
const TOKEN_ABI = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function transfer(address to, uint256 amount) public returns (bool)",
    "function balanceOf(address owner) view returns (uint256)"
];

const connectMetaMaskAndPay = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
            const provider = new BrowserProvider(window.ethereum);
            const accounts = await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            console.log("Conectado com a conta:", accounts[0]);

            // Verifica se está na rede Arbitrum Sepolia
            const network = await provider.getNetwork();
            if (network.chainId !== 421614) {
                try {
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

            const tokenContract = new Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);
            const amount = parseUnits("10", 18); // 10 tokens

            // 🔹 Verificar saldo antes de aprovar a transação
            const balance = await tokenContract.balanceOf(accounts[0]);
            console.log("Saldo do usuário:", balance.toString());

            // Convertendo para BigInt antes da comparação
            if (BigInt(balance) < BigInt(amount)) {
                alert("Saldo insuficiente para completar a transação.");
                return;
            }

            // Aprovar a transferência
            const approveTx = await tokenContract.approve(RECIPIENT_ADDRESS, amount);
            await approveTx.wait();
            console.log("Aprovação concluída!");

            // Transferir os tokens
            const transferTx = await tokenContract.transfer(RECIPIENT_ADDRESS, amount);
            const receipt = await transferTx.wait();
            console.log("Transferência enviada! Hash:", transferTx.hash);

            if (receipt.status === 1) {
                window.location.href = '/home';
            } else {
                alert("Falha na transação.");
            }
        } catch (error) {
            console.error("Erro ao conectar ou transacionar:", error);

            // 📌 Tratamento de erros comuns
            if (error.code === "CALL_EXCEPTION") {
                alert("Erro na execução da transação. Verifique se tem saldo suficiente.");
            } else if (error.message.includes("user rejected transaction")) {
                alert("Transação rejeitada pelo usuário.");
            } else {
                alert("Erro ao processar a transação.");
            }
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
                <a class="texto-link" href={`https://sepolia.scrollscan.com/address/${premio.resumo}`}>
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
