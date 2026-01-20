import React from "react";
import { AppNavigator } from "./src/Navigation/AppNavigator";
import { HistoryProvider } from "./src/context/HistoryContext";

export default function App() {
  return (
    <HistoryProvider>
      <AppNavigator />
    </HistoryProvider>
  );
}
