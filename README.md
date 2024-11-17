# 🗨️ Chatbot com Integração de IA

Este é um projeto de chatbot que utiliza a **API da OpenAI** para responder perguntas de forma inteligente. O projeto é desenvolvido com **Node.js**, **React**, **TypeScript**, e utiliza **Webpack** para a construção do frontend.

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- npm (Node Package Manager)
- Chave de API da OpenAI

## 🚀 Como Rodar a Aplicação

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd my-chatbot-app
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Criar o Arquivo `.env`

- Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API OpenAI:

```bash
OPENAI_API_KEY=sua-chave-da-openai
```

### 4. Rodar a Aplicação em Modo de Desenvolvimento

```bash
npm run dev
```

- Frontend estará disponível em: [http://localhost:3001](http://localhost:3001)
- Backend estará disponível em: [http://localhost:3000](http://localhost:3000)

### 5. Compilar a Aplicação para Produção

```bash
npm run build
```

### 6. Rodar a Aplicação em Modo de Produção

```bash
npm start
```

### 7. Comandos Úteis

- **Limpar a pasta `dist`** (arquivos compilados):
  ```bash
  rm -rf dist
  ```
- **Reinstalar Dependências** (caso necessário):
  ```bash
  rm -rf node_modules
  npm install
  ```
- **Verificar Problemas de Tipagem no TypeScript**:
  ```bash
  npx tsc --noEmit
  ```

### 8. Problemas Comuns

- **Erro: Porta em Uso (EADDRINUSE)**:
  Se você receber o erro `EADDRINUSE`, finalize o processo que está usando a porta:
  ```bash
  lsof -i :3000
  kill -9 <PID> # Substitua <PID> pelo número do processo
  ```

## 🛠 Tecnologias Utilizadas

- Node.js
- React
- TypeScript
- Webpack
- Express
- OpenAI API

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## ✨ Autor

- [Seu Nome](https://github.com/seu-usuario)
