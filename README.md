# 🏡 Desafio Anfitriões de Aluguel

Este projeto é uma aplicação full-stack para busca de acomodações, utilizando **React** no frontend e **Flask** no backend.

## 📌 Estrutura do Repositório

Este repositório contém tanto o frontend quanto o backend em diretórios separados:

```
accommodation-finder/
│── backend/   # Código do backend em Flask
│── frontend/  # Código do frontend em React
```

Isso facilita o gerenciamento e a organização do projeto em um único repositório.

> **Nota:** Embora manter frontend e backend no mesmo repositório facilite a configuração e o versionamento para pequenos projetos, em aplicações maiores pode ser mais vantajoso separá-los em repositórios distintos. Isso melhora a escalabilidade, permite deploys independentes e facilita a colaboração em equipes separadas.

## 📌 Tecnologias Utilizadas

### Frontend
- React 19
- Styled Components para estilização

### Backend
- Flask
- JSON para armazenar dados fictícios

## 🚀 Como Rodar o Projeto

### 🔧 Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** e **npm** (ou Yarn) para rodar o frontend
- **Python 3** e **Flask** para rodar o backend

### 1️⃣ Configurando o Backend

1. Clone o repositório e navegue até a pasta do backend:
   ```bash
   git clone https://github.com/ClaraMeirelles/desafio-anfitrioes-de-aluguel.git
   cd desafio-anfitrioes-de-aluguel/backend
   ```
2. Crie um ambiente virtual (opcional, mas recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate  # No Windows: venv\Scripts\activate
   ```
3. Instale as dependências:
   ```bash
   pip install flask
   ```
4. Execute o backend:
   ```bash
   python app.py
   ```
   O backend rodará em `http://localhost:5000`

### 2️⃣ Configurando o Frontend

1. Em outra aba do terminal, navegue até a pasta do frontend:
   ```bash
   cd ../frontend
   ```
2. Instale as dependências:
   ```bash
   npm install  # ou yarn install
   ```
3. Inicie o frontend:
   ```bash
   npm start  # ou yarn start
   ```
   O frontend rodará em `http://localhost:3000`

## 📡 Endpoints da API

### 🔍 Listar todas as acomodações
**GET** `/acomodacoes`

### 🔍 Buscar acomodações por cidade
**GET** `/acomodacoes?cidade=Florianópolis`

### 🔍 Buscar acomodação por ID
**GET** `/acomodacoes/{id}`

## 🛠 Melhorias Futuras
- Adicionar persistência com banco de dados (SQLite ou PostgreSQL)
- Criar autenticação de usuários
- Melhorar o design do frontend

---

Feito por [Clara Meirelles](https://github.com/ClaraMeirelles)

