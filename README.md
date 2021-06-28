# LuizaLabs - Marvel API teste

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Como reproduzir o ambiente de desenvolvimento

1. Após clonar o repositório em sua máquina, instalar as dependências utilizando **npm install** ou **yarn install**

2. Para ter acesso aos dados da API é necessário criar uma conta neste [link](https://developer.marvel.com/)- e clicar em *my developer account*. epois em , em posse da *publicKey* e da *privateKey* da API preencher o arquivo .env.copy nos campos indicados.
3.  Renomear o arquivo .env.copy para .env - caso contrário o sistema não será capaz de ler as informações das chaves da API. Você pode renomear o arquivo em seu editor de código ou através do terminal 
> 	**Em um terminal bash:**
>  mv .env.copy .env
4. Executar o sistema utilizando **npm start** ou **yarn start** e acessar a porta designada em seu servidor local/localhost.

### Observação
Devido a conflitos entre o endpoint da API da Marvel e o Github (em uma das solicitações a API não retornava os dados via HTTPS) utilizei de um cors para que a aplicação não tivesse a funcionalidade comprometida. Contudo para que ela funcione localmente é necessário alterar uma propriedade na linha 132 do arquivo index.js da pasta SingleHero (src > componentes > SingleHero > index.js).
>Alterar de:
>url={`https://cors-anywhere.herokuapp.com/${comics.collectionURI}`}
>Para:
>url=${comics.collectionURI}

## Acessando o deploy do projeto

O projeto pode ser acessado e visualizado rodando neste [link](https://gabriel-brunetti.github.io/luizalabs-teste/) - deploy no github pages.

