# 💱 Conversor de Moedas Mobile

Aplicação mobile desenvolvida em **React Native com Expo**, focada na
conversão de moedas em tempo real, com persistência local, navegação
estruturada e uma arquitetura modular preparada para escalar.

Este projeto evoluiu de um exercício de aprendizagem para uma aplicação
funcional e bem organizada, aplicando boas práticas de desenvolvimento,
separação de responsabilidades e gestão global de estado.

---

## 📌 Objetivo do projeto

- Consolidar conhecimentos em React Native\
- Trabalhar com APIs externas\
- Aplicar Context API para estado global\
- Implementar persistência local de dados\
- Criar uma base sólida para aplicações mobile de média escala

---

## 🚀 Funcionalidades

### 💱 Conversão de moedas

- Seleção de moeda de origem e moeda de destino\
- Conversão com base em taxas de câmbio em tempo real\
- Exibição do resultado formatado (2 casas decimais)\
- Apresentação clara da taxa de câmbio utilizada\
- Botão de troca rápida de moedas

### 🎨 Experiência de utilizador

- Validação de valores introduzidos\
- Indicador de loading durante pedidos à API\
- Interface consistente com tema escuro\
- Layout responsivo e organizado

### 📜 Histórico de conversões

- Armazenamento local com AsyncStorage\
- Histórico persistente entre sessões\
- Remoção individual de conversões\
- Limpeza total do histórico\
- Visualização através de modal dedicado

### 🧭 Navegação

- Navegação entre ecrãs com React Navigation (Native Stack)\
- Separação clara entre Home e Definições

---

## 🧱 Arquitetura

    src/
    ├─ components/
    │  ├─ Button/
    │  ├─ Input/
    │  ├─ ResultCard/
    │  └─ History/
    ├─ constants/
    │  └─ currencies.js
    ├─ context/
    │  └─ HistoryContext.js
    ├─ navigation/
    │  └─ AppNavigator.js
    ├─ screens/
    │  ├─ HomeScreen.js
    │  └─ SettingsScreen.js
    ├─ services/
    │  └─ api.js
    ├─ styles/
    │  ├─ colors.js
    │  ├─ Home.styles.js
    │  └─ Settings.styles.js
    └─ utils/
       └─ convertCurrency.js

---

## 🧠 Gestão de estado

### Estado local

- Inputs\
- Loading\
- Resultados de conversão

### Estado global (Context API)

- Histórico de conversões\
- Funções para adicionar, remover e limpar histórico\
- Sincronização automática com AsyncStorage

---

## 💾 Persistência de dados

O histórico é armazenado localmente com AsyncStorage, permitindo:

- Recuperar dados ao iniciar a aplicação\
- Manter histórico mesmo após fechar a app\
- Operações CRUD simples sobre o histórico

---

## 🌐 API de câmbio

**API pública:** ExchangeRate-API

    https://api.exchangerate-api.com/v4/latest/{CURRENCY}

- Dados obtidos em tempo real\
- Não são utilizadas chaves privadas\
- Consumo direto via fetch

---

## 🛠️ Tecnologias utilizadas

- React Native\
- Expo\
- React Navigation (Native Stack)\
- AsyncStorage\
- Context API\
- JavaScript (ES6+)\
- StyleSheet (React Native)

---

## ▶️ Como executar o projeto

### Pré-requisitos

- Node.js v18 ou superior\
- Expo CLI instalado globalmente

```bash
npm install -g expo-cli
```

### Instalação

```bash
npm install
```

### Execução

```bash
expo start
```

A aplicação pode ser executada no Expo Go, em emulador ou em dispositivo
físico.

---

## 📈 Estado atual do projeto

- Aplicação totalmente funcional\
- Arquitetura preparada para novas features\
- Código modular e legível\
- Base sólida para evolução futura

Este projeto é adequado para:

- Portfólio pessoal\
- Demonstração de competências em React Native\
- Base para projetos mais complexos

---

## 📚 Referência inicial

O projeto teve origem num tutorial do canal DevClub, usado apenas como
ponto de partida.\
A estrutura, lógica e funcionalidades foram significativamente
expandidas.

https://www.youtube.com/watch?v=a8YvzTXft9c
