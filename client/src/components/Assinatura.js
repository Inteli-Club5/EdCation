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

                // Verifica se está na rede Arbitrum Sepolia
                const network = await provider.getNetwork();
                if (network.chainId !== 421614) {  // ID da Arbitrum Sepolia
                    try {
                        // Adiciona a rede Arbitrum Sepolia ao MetaMask
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [{
                                chainId: "0x66eee", // ID da Arbitrum Sepolia
                                chainName: "Arbitrum Sepolia",
                                nativeCurrency: {
                                    name: "ETH",
                                    symbol: "ETH",
                                    decimals: 18
                                },
                                rpcUrls: ["https://sepolia-rollup.arbitrum.io/rpc"],
                                blockExplorerUrls: ["https://explorer.arbitrum.io/"],
                            }]
                        });
                    } catch (addError) {
                        console.error("Erro ao adicionar a rede Arbitrum Sepolia:", addError);
                        alert("Erro ao adicionar a rede Arbitrum Sepolia. Tente novamente.");
                        return;
                    }
                }

                // Criar e enviar a transação
                const tx = await signer.sendTransaction({
                    to: "0x7d2e47076043786803b2258511359C3C198c3b73",  // Substitua pelo contrato real
                    value: parseEther("0.0001"),
                });

                console.log("Transação enviada! Hash:", tx.hash);

                const receipt = await tx.wait();
                if (receipt.status === 1) {
                    window.location.href = '/home';
                } else {
                    alert("Falha na transação.");
                }
            } catch (error) {
                console.error("Erro ao conectar ou transacionar:", error);
            }
        } else {
            alert("MetaMask não encontrada. Instale a MetaMask para continuar.");
        }
    };

    render() {
        return (
            <div className='containerHomeAss'>
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
                    <h1 className="title">Formas de Pagamento</h1>
                    <hr className="horizontal-line2"/>
                    <div className="cards-container2">
                        <div className="card">
                            <div className='meioCard4'>
                                <img src={onchain} alt="Programação" className="card-image" />
                            </div> 
                            <p className='textT'>OnChain</p>
                            <p className="titulo6">ETH 000.1</p>
                            <Link onClick={this.connectMetaMaskAndPay}>
                                <button className='buttonEscolha'>Comprar</button>
                            </Link>
                        </div>

                        <div className="card">
                            <div className='meioCard4 meioCard3'>
                                <img src={pix} alt="Finanças" className="card-image" />
                            </div>
                            <p className='textT'>Pix</p>
                            <p className="titulo6">R$ 20.00</p>
                            <Link>
                                <button className='buttonEscolha2'>Em Breve</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
};

export default Assinatura;
