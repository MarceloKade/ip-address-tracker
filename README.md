# IP address tracker

<a href="https://ip-address-tracker-marcelo.netlify.app/" title="Clique aqui para acessar o projeto">Clique aqui para acessar o projeto
<img width="3161" alt="previsao-tempo" src="https://github.com/MarceloKade/ip-address-tracker/assets/98852912/227d19f4-4535-4ff0-97fe-684ff0d09e4a">
</a>

## Sumário

- [Visão geral](#visão-geral)
  - [Apresentação](#apresentação)
  - [Objetivo](#objetivo)
  - [Funcionalidades](#funcionalidades)
  - [Links](#links)
- [Tecnologias](#tecnologias)
  - [Aprendizado](#aprendizado)
  - [Desenvolvimento futuro](#desenvolvimento-futuro)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)

## Visão geral

### Apresentação

Um rastreador de endereço IP que permite aos usuários encontrar informações detalhadas sobre endereço de IP. Com base na API de Geolocalização de IP da IPify, a aplicação exibe informações-chave, como localização geográfica, provedor de serviços de internet e organização associada ao endereço IP pesquisado.

Os usuários podem começar visualizando seu próprio endereço IP no mapa ao carregar a página inicial. Além disso, eles têm a opção de pesquisar qualquer endereço IP usando o campo de pesquisa fornecido. A aplicação exibirá automaticamente as informações e a localização relacionadas à consulta.

### Objetivo

O objetivo deste projeto é aprimorar as habilidades de desenvolvimento web, especialmente no contexto de consumo de APIs de terceiros. O foco principal é aprender a fazer solicitações HTTP para a API de Geolocalização de IP da IPify e manipular os dados retornados para exibição na interface do usuário, renderizando um mapa com a localização dos dados.

Além disso, este projeto oferece a oportunidade de aprofundar o conhecimento em tecnologias como, Next.js, React e Tailwind CSS. A implementação de um layout responsivo, com suporte a diferentes tamanhos de tela, e a criação de estados interativos, como hover states, também são metas a serem alcançadas.

No geral, o objetivo é desenvolver uma aplicação funcional e esteticamente agradável, que atenda aos requisitos do desafio proposto pelo Frontend Mentor, ao mesmo tempo em que aprimora as habilidades e conhecimentos em desenvolvimento web.

### Funcionalidades

- [x] layout ideal para cada página, dependendo do tamanho da tela de seus dispositivos.
- [x] Ver os estados de destaque (hover) para todos os elementos interativos da página.
- [x] Ver endereço IP da localização do provedor ao carregar a página.
- [x] Pesquisar qualquer endereço IP ver as informações-chave e a localização.

### Links

- Link do repositório: [URL do projeto no Github](https://github.com/MarceloKade/ip-address-tracker)
- Link do deploy: [URL do projeto em funcionamento](https://ip-address-tracker-marcelokade.netlify.app/)

### Tecnologias

- Next.js
- React.js
- TypeScript
- JavaScript
- Tailwind CSS
- Axios

### Aprendizado

Aprendi a utilizar a api ipfy para mostrar os dados da localização atual e os dados do ip pesquisado. Aprendi também a renderizar um mapa com a API Leaflet, mostrando a localização do ip do provedor.
Utilizei o React.Lazy para conseguir realizar a build de páginas estáticas e assim fazer o deploy da aplicação, envolvendo o componente Leaflet com um React.Suspense, fazendo com que o componente entre em funcionamento apenas quando necessário.

### Autor

- Github - https://github.com/MarceloKade
- LinkedIn - https://www.linkedin.com/in/marcelokade
- Frontend Mentor - @MarceloKade