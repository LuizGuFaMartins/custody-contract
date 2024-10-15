# Custody Contract

Este projeto implementa um contrato inteligente simples na blockchain Polygon (rede de testes Amoy). O contrato permite que os usuários realizem depósitos e retiradas de MATIC, armazenando o saldo de cada usuário de forma segura.

## Pré-requisitos

- **Node.js**: v20.17.0
- **Hardhat**: Para desenvolvimento e testes de contratos inteligentes
- **Metamask** ou outra carteira Ethereum para interagir com o contrato

## Criação da Carteira Metamask

Para interagir com contratos inteligentes na blockchain, você precisa de uma carteira digital. A Metamask é uma das carteiras mais populares e fáceis de usar.

### Como criar uma carteira Metamask:

1. **Baixe e instale a Metamask**: [Metamask - Site oficial](https://metamask.io/).
2. **Crie uma nova carteira**: Após instalar a extensão ou aplicativo, siga as instruções para criar uma nova carteira. Certifique-se de guardar a **seed phrase** em um local seguro, pois ela será necessária para recuperar sua conta.
3. **Proteção**: Defina uma senha forte para proteger sua carteira.

## Adicionando a Rede Amoy à Metamask

Você precisará adicionar a rede de testes Amoy para poder interagir com o contrato. A forma mais fácil de fazer isso é usando a **Chainlist**:

1. **Acesse a Chainlist**: [Chainlist - Adicionar Redes](https://chainlist.org/).
2. **Conecte sua Metamask**: No topo da página da Chainlist, clique em "Connect Wallet" para conectar sua carteira Metamask.
3. **Busque pela rede Amoy**: Na barra de pesquisa, digite "Amoy" e selecione a rede Amoy Testnet.
4. **Adicionar a Rede**: Clique em "Add to Metamask" para adicionar a rede automaticamente à sua Metamask.

Agora você estará conectado à rede de testes Amoy.

## Obter MATIC (Tokens de Teste) na Amoy

Para testar o contrato, você precisará de MATIC na rede Amoy (testnet). Você pode obter tokens de teste em faucets. Aqui estão dois faucets que oferecem tokens MATIC para a rede Amoy:

- [Faucet Oficial da Polygon](https://faucet.polygon.technology/)
- [Faucet da Alchemy - Polygon Amoy](https://www.alchemy.com/faucets/polygon-amoy)

Basta acessar os links, fornecer o endereço da sua carteira e solicitar tokens de teste.

## Instalação

1. **Clone o repositório:** `git clone <URL_DO_REPOSITORIO> && cd custody-contract`
2. **Instale as dependências:** `npm install`
3. **Configuração do ambiente:** Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente: `PROVIDER_URL=https://rpc.amoy.network` e `PRIVATE_KEY=sua_chave_privada_aqui`.

## Compilação do Contrato

Para compilar o contrato inteligente, execute: `npx hardhat compile`.

## Testando o Contrato

Para testar o contrato, use o comando: `npx hardhat test`.

## Deploy do Contrato

### 1. Usando o Script de Deploy

Para fazer o deploy do contrato usando o script, execute: `./deploy.sh --network amoy --contract CustodyContract`. Certifique-se de substituir `CustodyContract` pelo nome do contrato que você deseja implantar.

### 2. Sem o Script

Se preferir fazer o deploy sem o script, você pode executar diretamente o comando Hardhat. Certifique-se de ter o arquivo de deploy correto (por exemplo, `scripts/deploy.js`) e execute: `npx hardhat run scripts/deploy.js --network amoy`.

## Visualizando o Contrato

Após o deploy, você pode visualizar o contrato na rede de testes Amoy usando o seguinte link: [Visualizar Contrato no PolygonScan Amoy](https://amoy.polygonscan.com). Basta inserir o endereço do seu contrato na barra de pesquisa.

## Verificando e Publicando o Contrato pela Polygon Scan

Para verificar e publicar seu contrato inteligente no PolygonScan Amoy, acesse o seguinte link: [Verifique e publique seu contrato inteligente](https://amoy.polygonscan.com/verifyContract).

No formulário, preencha os campos requisitados, incluindo o endereço do seu contrato e o código fonte. Após o preenchimento, siga as instruções fornecidas na página para realizar a verificação. Isso permitirá que você teste e interaja com o contrato de maneira mais transparente.

## Verificando e Publicando o Contrato pela Polygon Scan via Hardhat

Para verificar seu contrato via hardhat será necessário fazer um cadastro na polygon scan e gerar um chave de api.

Após isso adicione a variável de ambiente no seu projeto, como consta no .env.example e execute o seguinte comando:

`npx hardhat verify --network <REDE> <ENDERECO_DO_CONTRATO>`

Obs: é importante esperar alguns minutos antes de verificar seu contrato.

## Exemplo de contrato publicado e verificado na rede amoy na Polygon Scan

Seguindo todas as etapas descritas acima foi possível publicar e verificar um contrato.

Endereço do contrato: 0x01Bfd9b4cf07cbfAA5eFB05DD50d2Cda9E43e10E

Segue o link para visualisá-lo na Polygon Scan:

[Contrato publicado](https://amoy.polygonscan.com/address/0x01Bfd9b4cf07cbfAA5eFB05DD50d2Cda9E43e10E#code).

## Testando a Lógica do Contrato no Remix

Para testar a lógica do contrato sem grandes dificuldades, você pode utilizar o [Remix IDE](https://remix.ethereum.org/). Basta copiar o código do contrato para o Remix, compilar e interagir com ele na rede desejada.

Segue um rápido tutorial de como fazer o deploy e testar o contrato pelo Remix:

[Tutorial](https://drive.google.com/file/d/1IeCHtmj1UO27gzEYK2Q6rUuoF38_XuGP/view).

## Licença

Este projeto está licenciado sob a [GPL 3.0 License](LICENSE).
