# Cálculo de Combustível para Viagem

Este projeto é uma aplicação web que calcula o consumo de combustível e o custo de uma viagem. Possui um frontend feito com HTML, CSS e JavaScript e um backend API em Node.js que salva o histórico de pesquisas no Firebase Firestore.

## Pré-requisitos

- **Node.js** (v14 ou superior) – [Baixe o Node.js](https://nodejs.org/)
- Conta no **Firebase** e um projeto com o Firestore configurado – [Console do Firebase](https://console.firebase.google.com/)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/itsryu/N1_PW
   ```

2. **Instale as dependências do backend:**

   Navegue até a pasta do backend e execute:
   ```bash
   cd ex_001/backend
   npm install
   ```

3. **Configure o Firebase Firestore:**

   - Crie um projeto no Firebase e configure um banco de dados Firestore.
   - No diretório do backend, crie um arquivo `.env` e adicione suas credenciais do Firebase:
     ```env
     FIREBASE_API_KEY=your_api_key
     FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     FIREBASE_APP_ID=your_app_id
     ```
   - Certifique-se de configurar o backend para utilizar essas variáveis de ambiente.

## Sobre a Collection "fuel" no Firestore

No Firestore, os registros de cada cálculo são armazenados em uma collection chamada **fuel**. Cada documento nesta collection contém os seguintes campos:
- **distance:** A distância da viagem em quilômetros.
- **consumption:** O consumo médio do veículo (km/l).
- **fuelPrice:** O preço do combustível (R$/l).
- **totalConsumption:** O total de combustível consumido (calculado).
- **totalCost:** O custo total da viagem (calculado).
- **timestamp:** Data e hora em que o registro foi criado (em formato ISO).

## Execução do Projeto

1. **Inicie o servidor de API (Backend):**

   No diretório do backend, execute:
   ```bash
   npm run start
   ```
   O servidor iniciará em [http://localhost:3000](http://localhost:3000) e exporá os endpoints para salvar e recuperar o histórico.

2. **Abra o Frontend:**

   Navegue até o diretório `ex_001/frontend` e abra o arquivo `index.html` em seu navegador.  
   Você pode usar uma extensão "Live Server" no VS Code ou executar:
   ```bash
   npx live-server ex_001/frontend
   ```

## Como Funciona

- **Frontend:**  
  O usuário insere a distância, o consumo e o preço do combustível. Ao submeter o formulário, um cálculo é realizado e o resultado é exibido na tela. Em seguida, os dados são enviados via `fetch` para o backend para armazenamento.

- **Backend:**  
  Um servidor Node.js recebe os dados enviados, salvando-os no Firestore através do Firebase Admin SDK na collection **fuel** e disponibiliza um endpoint para recuperar todo o histórico de pesquisas.

- **Firebase Firestore:**  
  A collection **fuel** armazena os registros de cálculos realizados, permitindo a persistência do histórico e a consulta futura para análises.

## Dependências Principais

- [Express](https://expressjs.com/) – Para a criação do servidor backend.
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) – Para interação com o Firestore.
- Outras dependências estão listadas no `package.json`.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).