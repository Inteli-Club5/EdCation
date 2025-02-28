import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/edcation3.png';
import profile from './images/profile.png';
import pix from './images/pix.png';
import onchain from './images/onchain.png';

class Assinatura extends Component {

    connectMetaMaskAndPay = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                console.log("Conectado com a conta:", account);

                // Verifica se está na rede Arbitrum Sepolia
                const networkId = await window.ethereum.request({ method: 'eth_chainId' });
                if (networkId !== '0x66eee') {  // ID da Arbitrum Sepolia
                    try {
                        // Adiciona a rede Arbitrum Sepolia ao MetaMask
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x66eee', // ID da Arbitrum Sepolia
                                chainName: 'Arbitrum Sepolia',
                                nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
                                rpcUrls: ['https://sepolia-rollup.arbitrum.io/rpc'],
                                blockExplorerUrls: ['https://explorer.arbitrum.io/'],
                            }]
                        });
                    } catch (addError) {
                        console.error("Erro ao adicionar a rede Arbitrum Sepolia:", addError);
                        alert("Erro ao adicionar a rede Arbitrum Sepolia. Tente novamente.");
                        return;
                    }
                }

                // Parâmetros da transação
                const transactionParameters = {
                    to: '0x7d2e47076043786803b2258511359C3C198c3b73', // Substitua pelo contrato real
                    from: account,
                    value: '0x16345785D8A0000', // Equivalente a 0.0001 ETH em Wei
                };

                // Envia a transação
                const txHash = await window.ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                });

                console.log("Transação enviada! Hash:", txHash);

                // Espera pela confirmação da transação
                window.ethereum.request({
                    method: 'eth_getTransactionReceipt',
                    params: [txHash],
                }).then((receipt) => {
                    if (receipt && receipt.status === '0x1') {
                        window.location.href = '/home';
                    } else {
                        alert("Falha na transação.");
                    }
                });

            } catch (error) {
                console.error("Erro ao conectar ou transacionar:", error);
                alert("Erro ao processar a transação.");
            }
        } else {
            alert("MetaMask não encontrada. Instale a MetaMask para continuar.");
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
                    <hr className="horizontal-line2" />
                    <div className="cards-container2">
                        <div className="card">
                            <div className='meioCard4'>
                                <img src={onchain} alt="Programação" className="card-image" />
                            </div>
                            <p className='textT'>OnChain</p>
                            <p className="titulo6">ETH 0.0001</p>
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
            </div>
        )
    }
};

export default Assinatura;