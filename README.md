# Challenge Semana XII - Compass UOL

Repositório Frontend do 3° Desafio do Programa de Bolsas Fullstack da Compass UOL.

## Descrição

Landing Page de um sistema de transporte (myRide), possuindo 3 seções bem definidas com cada funcionalidade requisitada.
Envia e busca dados no Backend. 
É responsiva nas larguras <strong>1440px</strong> e <strong>414px</strong>.

## Funcionalidades

### 1° Seção

<ul>
  <li>Mostra a localização do usuário com base no IP.</li>
  <li>Recebe uma localização de destino e redireciona para a página 404.</li>
</ul>

### 2° Seção

<ul>
  <li>Busca informações dos carros no database e mostra.</li>
</ul>

### 3° Seção

<ul>
  <li>Possui validações para cada campo do formulário, incluindo validação de email existente.</li>
  <li>A lista de países vem de uma API externa.</li>
  <li>Os dados são enviados ao database ao validar o Submit.</li>
  <li>Um loading é adicionado enquanto o formulário está sendo enviado.</li>
  <li>O envio com sucesso modifica a seção, e troca o formulário por uma seção de sucesso.</li>
</ul>

## Iniciando

### Configuração do arquivo ".env"

Crie um arquivo .env no projeto substituindo os placeholders adequadamente. Para gerar a APIKEY é necessário se cadastrar em
<a href="https://geo.ipify.org">Geo IP</a>. O HOST é o endereço de onde a aplicação Backend está rodando.

```bash
  VITE_IP_API="https://geo.ipify.org/api/v2/country,city?apiKey"
  VITE_APIKEY="[APIKEY]"

  VITE_HOST="[HOST]"
```

### Instalação e Execução

<ul>
  <li>Clone o repositório.</li>
  <li>Acesse por uma IDE, entre no diretório com o comando: </li>

  ```bash
    $ cd myRide
  ```

  <li>Use a CLI para instalar as dependências com o comando: </li>

  ```bash
    $ npm install
  ```

  <li>Inicialize o projeto com o comando: </li>

  ```bash
    $ npm run dev
  ```
</ul>

Visualize a aplicação em uma das larguras responsivas (1440px ou 414px) e teste as funcionalidades.

## Tecnologias utilizadas

<ul>
  <li> <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> - Linguagem utilizada </li>
  <li> <a href="https://react.dev/" target="_blank">React</a> - Com Router e Form </li>
  <li> <a href="https://vitejs.dev/" target="_blank">Vite</a> - Ambiente para React </li>
  <li> <a href="https://www.npmjs.com/" target="_blank">npm</a> - Gerenciador de pacotes </li>
  <li> <a href="https://github.com/axios/axios" target="_blank">Axios</a> - Requisições HTTP </li>
  <li> <a href="https://zod.dev/" target="_blank">Zod</a> - Validações client-side </li>
  <li> <a href="https://phosphoricons.com/" target="_blank">Phosphoricons</a> - Ícones </li>
</ul>