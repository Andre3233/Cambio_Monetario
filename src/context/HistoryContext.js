import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";

export const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function loadHistory() {
      try {
        const storageHistory = await AsyncStorage.getItem("history");
        if (storageHistory) {
          setHistory(JSON.parse(storageHistory));
        }
      } catch (error) {
        console.log("ERRO! Erro ao carregar historico: ", error);
      }
    }
    loadHistory();
  }, []);

  async function addConversion(conversion) {
    try {
      const updateHistory = [conversion, ...history];
      setHistory(updateHistory);
      await AsyncStorage.setItem("history", JSON.stringify(updateHistory));
    } catch (error) {
      console.log("ERRO! Erro ao guardar conversão: ", error);
    }
  }

  async function removeConversion(id) {
    try {
      const updateHistory = history.filter((item) => item.id !== id);
      setHistory(updateHistory);
      await AsyncStorage.setItem("history", JSON.stringify(updateHistory));
    } catch (error) {
      console.log("ERRO! Erro ao apagar conversão: ", error);
    }
  }

  async function clearHistory() {
    try {
      setHistory([]);
      await AsyncStorage.setItem("history", JSON.stringify([]));
    } catch (error) {
      console.log("ERRO! Erro ao limpar histórico: ", error);
    }
  }

  return (
    <HistoryContext.Provider
      value={{ history, addConversion, removeConversion, clearHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
}
