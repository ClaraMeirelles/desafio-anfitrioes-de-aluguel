# 🏡 Aplicativo de Acomodações - Documentação

## 📌 Visão Geral
Este é um aplicativo desenvolvido em React para exibição de acomodações disponíveis para aluguel. Os usuários podem visualizar detalhes de cada acomodação e favoritar as que mais gostam. O app consome dados de uma API local hospedada em `http://localhost:5000/acomodacoes`.

## 🚀 Como Rodar o Projeto
### **Pré-requisitos**
- Node.js instalado
- Gerenciador de pacotes (npm ou yarn)
- API local rodando

### **Instalação e Execução**
1. Clone este repositório:
   ```bash
   git clone https://github.com/ClaraMeirelles/desafio-anfitrioes-de-aluguel.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd desafio-anfitrioes-de-aluguel/frontend
   ```
3. Instale as dependências:
   ```bash
   npm install  # ou yarn install
   ```
4. Para rodar o back-end, siga as instruções disponíveis na [Documentação do Backend](https://github.com/ClaraMeirelles/desafio-anfitrioes-de-aluguel/blob/main/backend/README.md).

5. Rode o projeto:
   ```bash
   npm start  # ou yarn start
   ```
6. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto
```
📦 src
 ┣ 📂 assets/styles
 ┃ ┗ 📜 GlobalStyles.js  # Estilização global do app
 ┣ 📂 components
 ┃ ┣ 📂 Card
 ┃ ┃ ┣ 📜 index.js  # Componente de Card de Acomodação
 ┃ ┃ ┗ 📜 styled.js  # Estilização  do componente Card
 ┃ ┣ 📂 Header
 ┃ ┃ ┣ 📜 index.js  # Componente do Cabeçalho
 ┃ ┃ ┗ 📜 styled.js  # Estilização  do componente Header
 ┣ 📂 pages
 ┃ ┣ 📂 Home
 ┃ ┃ ┣ 📜 index.js  # Página inicial
 ┃ ┃ ┗ 📜 styled.js  # Estilização da página home
 ┃ ┣ 📂 Detalhes
 ┃ ┃ ┣ 📜 index.js  # Página de detalhes da acomodação
 ┃ ┃ ┗ 📜 styled.js  # Estilização da página de detalhes
 ┣ 📜 App.js  # Componente principal
 ┗ 📜 index.js  # Ponto de entrada do React
```

## 📌 Descrição dos Principais Componentes

### **1️⃣ App.js**
- Controla a navegação entre a página inicial e a página de detalhes.
- Gerencia o estado da página e do ID da acomodação selecionada.

### **2️⃣ Home (src/pages/Home/index.js)**
- Exibe a lista de acomodações disponíveis.
- Cada acomodação é renderizada pelo componente `Card`.
- Permite a busca de acomodações através de um `select` montado dinamicamente com base nas cidades já existentes.

### **3️⃣ Detalhes (src/pages/Detalhes/index.js)**
- Exibe informações detalhadas da acomodação selecionada.
- Permite favoritar ou remover a acomodação dos favoritos.

### **4️⃣ Card (src/components/Card.js)**
- Exibe informações resumidas da acomodação.
- Contém botão para favoritar/remover dos favoritos.
- Permite clicar para acessar a página de detalhes.

## ⚙️ Funcionalidades
✔️ Listagem de acomodações
✔️ Exibição de detalhes de cada acomodação
✔️ Favoritar e remover dos favoritos
✔️ Persistência dos favoritos no `localStorage`
✔️ Navegação entre páginas sem React Router (renderização condicional)

## 📌 Melhorias Futuras (Sugestões)
🔹 Implementar React Router para navegação mais eficiente em caso de necessidade de mais páginas
🔹 Adicionar filtros e busca por localização e preço
🔹 Melhorar o design e responsividade com Styled Components
🔹 Criar uma página de favoritos

---
📢 **Dúvidas ou sugestões?** Fique à vontade para contribuir! 😃

