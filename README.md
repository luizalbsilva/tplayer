# Taking Player

Desenvolvido como 'projeto final' do treinamento de capacitação interna de React / NodeJS, faz parte de 3 projetos, a saber:

- [**Front-End React-Native**](https://github.com/luizalbsilva/tplayer-mb): Aplicação hibrida que tocar os audios disponibilizados.
- **Front-End Web**: Este projeto. Módulo administrativo, fará o controle do que será 
  exposto (upload dos audios), sua classificação, e modo de exposição (destaques, etc)
- [**Back-End: Em NodeJS**](https://github.com/RafaelGSantana/Projeto-Capacitacao-Backend), fornecerá a api que será 
  consumida pelos dois projetos anteriores.

## Rodando o programa

A primeira coisa a se fazer, é ter o nodejs instalado na sua máquina. Você pode baixar a última versão em: \
https://nodejs.org/en/

Depois de baixar de nosso repositório, baixe as dependencias com o seguinte comando:

`npm install`

E finalmente pode rodar `npm start`. A aplicação será iniciada em http://localhost:3000. Por se tratar de uma \
aplicação react, quaisquer alterações serão carregadas automaticamente; os erros do Lint serão apresentados \
no console.

Ah, sim... também por se tratar de uma aplicação react, basta usar `npm run build` para criar a versão de \
produção. ;)


## O que estamos usando aqui ?

* react
* redux
* react-redux
* react-router-dom
