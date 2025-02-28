// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Arte is ERC721URIStorage, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // Definindo o endereço base do IPFS para as imagens
    string private baseURI = "https://plum-atomic-lemur-391.mypinata.cloud/ipfs/";

    constructor(address initialOwner) ERC721("Arte EdCation3", "AEC") Ownable(msg.sender) {}

    // Função para definir a base URI para os tokens
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    // Função para cunhar um novo token com URI do IPFS
    function mint(address to) external onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);

        // Definindo URI do token (imagem no IPFS)
        _setTokenURI(tokenId, "bafkreiboef5a4igyyg7ema6lusykh2h23vewkytpnnfufztmyjkhnkq3uu");
    }
}
