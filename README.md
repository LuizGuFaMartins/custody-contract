# Custody Contract

Este projeto implementa um contrato inteligente simples na blockchain Polygon (rede de testes Amoy). O contrato permite que os usuários realizem depósitos e retiradas de MATIC, armazenando o saldo de cada usuário de forma segura.

## Pré-requisitos

- **Node.js**: v20.17.0
- **Metamask** ou outra carteira Ethereum para interagir com o contrato

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

Para fazer o deploy do contrato usando o script bash, execute: `./scripts/deploy.sh --network amoy --contract CustodyContract`. Certifique-se de substituir `CustodyContract` pelo nome do contrato que você deseja implantar.

### 2. Sem o Script

Se preferir fazer o deploy sem o script, você pode executar diretamente os comandos do Hardhat. Certifique-se de ter o arquivo de deploy correto (por exemplo, `ignition/modules/contrato.ts`) e execute: `npx hardhat ignition deploy $PATH/ignition/modules/contrato.ts`.

## Visualizando o Contrato

Como a rede de testes utilizada foi a Amoy, após o deploy, você pode visualizar o contrato na rede usando o seguinte link: [Visualizar Contrato na Amoy](https://www.oklink.com/pt-br/amoy). Basta inserir o endereço do seu contrato na barra de pesquisa.

## Verificando e Publicando o Contrato

Para verificar e publicar seu contrato inteligente na OKLink, acesse o seguinte link: [Verifique e publique seu contrato inteligente](https://www.oklink.com/pt-br/amoy/verify-contract-preliminary). 

No formulário, preencha os campos requisitados, incluindo o endereço do seu contrato e o código fonte. Após o preenchimento, siga as instruções fornecidas na página para realizar a verificação. Isso permitirá que você teste e interaja com o contrato de maneira mais transparente.

## Testando a Lógica do Contrato no Remix

Para testar a lógica do contrato sem grandes dificuldades, você pode utilizar o [Remix IDE](https://remix.ethereum.org/). Basta copiar o código do contrato para o Remix, compilar e interagir com ele na rede desejada.

## Licença

Este projeto está licenciado sob a [GPL-3.0 License](LICENSE).
