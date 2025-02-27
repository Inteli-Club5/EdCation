import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import pix from './images/pix.png';
import onchain from './images/onchain.png';

class Assinatura extends Component {

    connectMetaMaskAndPay = async () => {
        if (window.ethereum) {
            try {
                // Solicita a conexão da MetaMask
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Verifica se a rede está na Arbitrum Sepolia
                const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
                if (currentChainId !== '0xa4b1') {
                    // Se não estiver, solicita a troca de rede para Arbitrum Sepolia (ID: 0xa4b1)
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0xa4b1' }],
                    });
                }

                // Dados para o pagamento para o contrato inteligente
                const toAddress = '0x2fc88293BF7026DA8326542844227Bf82423359E';  // Endereço do contrato inteligente
                const amountInWei = window.web3.utils.toWei('0.0001', 'ether');  // Pagamento de 0.01 ETH (em Wei)

                // Realiza a transação para o contrato inteligente
                const txHash = await window.ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [{
                        from: accounts[0],
                        to: toAddress,
                        value: amountInWei,
                        gas: '0x5208',  // Gas limit (21000 Gwei)
                        gasPrice: '0x3b9aca00',  // Gas price
                    }],
                });

                console.log("Transação enviada com sucesso! Hash:", txHash);
            } catch (error) {
                console.error("Erro ao tentar se conectar ou realizar a transação:", error);
            }
        } else {
            alert("MetaMask não encontrada. Instale a MetaMask para continuar.");
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
                                <p className="track-name">ETH 0,0001</p>
                            </div>
                            <div className="track-card">
                                <img src={pix} className="track-icon2" alt="pix"/>
                                <br/>
                                <p className="track-name">PIX</p>
                                <p className="track-name">R$ 20,00</p>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        )
    }
};

export default Assinatura;