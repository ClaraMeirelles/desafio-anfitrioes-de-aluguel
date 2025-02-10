# 📌 API de Acomodações - Documentação

Esta é uma API simples desenvolvida em Flask que fornece informações sobre acomodações para aluguel. A API permite listar todas as acomodações, filtrar por cidade e obter detalhes de uma acomodação específica.

## 🚀 Como Rodar a API

### **1️⃣ Requisitos**
- Python 3 instalado
- Flask e Flask-CORS instalados

### **2️⃣ Instalação**
1. Clone este repositório:
   ```bash
   git clone https://github.com/ClaraMeirelles/desafio-anfitrioes-de-aluguel.git
   ```
2. Acesse a pasta do backend:
   ```bash
   cd desafio-anfitrioes-de-aluguel/backend
   ```
3. Instale as dependências necessárias:
   ```bash
   pip install flask flask-cors
   ```

### **3️⃣ Executando a API**
Para rodar o servidor Flask, execute o seguinte comando:
```bash
python3 app.py
```
A API estará disponível em `http://localhost:5000`.

---

## 📌 Endpoints Disponíveis

### **1️⃣ Listar todas as acomodações**
**Rota:** `GET /acomodacoes`

**Resposta de Sucesso (200 OK):**
```json
[
    {
        "id": 1,
        "nome": "Apartamento Beira-Mar",
        "imagem": "https://picsum.photos/300/200",
        "precoNoite": 350,
        "localizacao": "Florianópolis, SC"
    },
]
```

### **2️⃣ Filtrar acomodações por cidade**
**Rota:** `GET /acomodacoes?cidade={nome_da_cidade}`

**Exemplo de Uso:**
```
GET /acomodacoes?cidade=Florianópolis
```

**Resposta de Sucesso (200 OK):**
```json
[
    {
        "id": 1,
        "nome": "Apartamento Beira-Mar",
        "imagem": "https://picsum.photos/300/200",
        "precoNoite": 350,
        "localizacao": "Florianópolis, SC"
    }
]
```

### **3️⃣ Buscar detalhes de uma acomodação específica**
**Rota:** `GET /acomodacoes/{id}`

**Exemplo de Uso:**
```
GET /acomodacoes/1
```

**Resposta de Sucesso (200 OK):**
```json
{
    "id": 1,
    "nome": "Apartamento Beira-Mar",
    "imagem": "https://picsum.photos/300/200",
    "precoNoite": 350,
    "localizacao": "Florianópolis, SC"
}
```

**Resposta de Erro (404 Not Found):**
```json
{
    "erro": "Acomodacao nao encontrada",
    "id": 99
}
```

---

## 📂 Estrutura do Projeto

```
📦 backend
 ┣ 📜 app.py  # Código principal do servidor Flask
 ┣ 📜 accommodations.json  # Base de dados local com as acomodações
 ┗ 📜 requirements.txt  # Dependências do projeto
```

## 🔧 Melhorias Futuras
✔️ Adicionar suporte a banco de dados SQLite ou PostgreSQL
✔️ Implementar um sistema de autenticação para usuários
✔️ Criar novos endpoints para cadastro e atualização de acomodações
✔️ Adicionar testes automatizados para a API

---
📢 **Dúvidas ou sugestões?** Contribua com melhorias! 😃


- [Documentação do Frontend](https://github.com/ClaraMeirelles/desafio-anfitrioes-de-aluguel/blob/main/frontend/README.md)
