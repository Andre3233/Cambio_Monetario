# Conversor de Moedas

Uma aplicação de aprendizagem em **React Native** com **Expo** que permite converter valores entre diferentes moedas de forma rápida e intuitiva.  
Este projeto foi desenvolvido como exercício prático, focando na organização modular do código, consumo de API pública e criação de componentes reutilizáveis.

---

## Funcionalidades

- Escolher **moeda de origem** e **moeda de destino**  
- Inserir o **valor** a converter  
- Mostrar o **resultado convertido** com duas casas decimais  
- Exibir a **taxa de câmbio atual**  
- **Trocar moedas** facilmente com um botão de swap  
- Indicação de **loading** durante a conversão  

---

## Tecnologias e ferramentas

- **Frontend:** React Native, Expo  
- **API:** ExchangeRate-API (pública)  
- **Estilização:** StyleSheet React Native, cores globais e consistentes  
- **Componentes reutilizáveis:** Button, Input, ResultCard  
- **Gestão de estado:** useState  

---

## Estrutura do projeto

- src/
  - components/   # Componentes reutilizáveis (Button, Input, ResultCard)
  - constants/    # Moedas disponíveis e símbolos
  - services/     # API de conversão
  - styles/       # Cores e estilos globais
  - utils/        # Funções utilitárias (convertCurrency)
- App.js           # Componente principal

---

## Como executar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)  
- Expo CLI instalado globalmente (`npm install -g expo-cli`)  

### Observações
Projeto de aprendizagem, baseado em tutorial, com código modular e organizado

api.js consome API pública, sem chaves privadas

Este projeto serve para praticar React Native, criação de componentes e integração de API

O tuturial em questão é do canal DevClub: https://www.youtube.com/watch?v=a8YvzTXft9c 