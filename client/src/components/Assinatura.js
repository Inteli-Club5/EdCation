import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserProvider, parseEther } from "ethers";
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import pix from './images/pix.png';
import onchain from './images/onchain.png';

class Assinatura extends Component {

    // Função para conectar à MetaMask e fazer o pagamento para um contrato inteligente
    connectMetaMaskAndPay = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const provider = new BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                const signer = await provider.getSigner();

                console.log("Conectado com a conta:", accounts[0]);

                // Verifica se está na rede Arbitrum Sepolia
                const network = await provider.getNetwork();
                if (network.chainId !== 421614) {  // ID da Arbitrum Sepolia
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: "0x66eee" }], // 0x66eee é a Arbitrum Sepolia
                    });
                }

                // Criar e enviar a transação
                const tx = await signer.sendTransaction({
                    to: "0x7d2e47076043786803b2258511359C3C198c3b73",  // Substitua pelo contrato real
                    value: parseEther("0.0001"), 
                });

                console.log("Transação enviada! Hash:", tx.hash);

                const receipt = await tx.wait(); 
                if (receipt.status === 1) {
                    window.location.href = '/home';
                } else {
                    alert("Falha na transação.");
                }
            } catch (error) {
                console.error("Erro ao conectar ou transacionar:", error);
            }
        } else {
            alert("MetaMask não encontrada. Instale a MetaMask para continuar.");
        }
    };

    render() {
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
                        <h1 className="title">Formas de Pagamento</h1>
                    </center>
                    <hr className="horizontal-line" />
                    <center>
                        <div className="tracks-container-2">
                            <div className="track-card" onClick={this.connectMetaMaskAndPay}>
                                <img src={onchain} className="track-icon2" alt="onchain"/>
                                <br/>
                                <p className="track-name">OnChain</p>
                            </div>
                            <div className="track-card">
                                <img src={pix} className="track-icon2" alt="pix"/>
                                <br/>
                                <p className="track-name">PIX</p>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
};

export default Assinatura;
