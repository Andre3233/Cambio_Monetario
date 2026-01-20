import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Button } from "../components/Button";
import { styles } from "../styles/Home.styles";
import { currencies } from "../constants/currencies";
import { Input } from "../components/Input";
import { ResultCard } from "../components/ResultCard";
import { exchangeRateApi } from "../services/api";
import { useContext, useState } from "react";
import { convertCurrency } from "../utils/convertCurrency";
import { HistoryContext } from "../context/HistoryContext";

export default function HomeScreen({ navigation }) {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [result, setResult] = useState("");
  const [loading, setloading] = useState(false);
  const [exchangeRate, setexchangeRate] = useState(null);
  const { addConversion } = useContext(HistoryContext);

  async function fetchExchangeRate() {
    try {
      if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Digite um valor valido");
        return;
      }
      setloading(true);

      const data = await exchangeRateApi(fromCurrency);
      const rate = data.rates[toCurrency];
      const convertedAmount = convertCurrency(amount, rate);
      setexchangeRate(rate);

      const conversion = {
        id: Date.now(),
        amount: parseFloat(amount),
        fromCurrency,
        result: parseFloat(convertedAmount),
        toCurrency,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      console.log(convertedAmount);
      setResult(convertedAmount);
      addConversion(conversion);
    } catch (err) {
      alert("Erro,tente novamente");
    } finally {
      setloading(false);
    }
  }

  function swapCurrency() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult("");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Text style={styles.title}>Conversor de Moedas</Text>

              <TouchableOpacity
                style={styles.settingsButtom}
                onPress={() => navigation.navigate("Settings")}
              >
                <Text>⚙️</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subTitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De: </Text>
            <View style={styles.cusrrencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="primary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setFromCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                ></Button>
              ))}
            </View>

            <Input label="Valor: " value={amount} onChangeText={setAmount} />

            <TouchableOpacity style={styles.swapButton} onPress={swapCurrency}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para: </Text>
            <View style={styles.cusrrencyGrid}>
              {currencies.map((currency) => (
                <Button
                  variant="secondary"
                  key={currency.code}
                  currency={currency}
                  onPress={() => setToCurrency(currency.code)}
                  isSelected={toCurrency === currency.code}
                ></Button>
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.convertButton,
              (!amount || loading) && styles.convertButtonDisabled,
            ]}
            onPress={fetchExchangeRate}
            disabled={!amount || loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.swapButtonText}>Converter</Text>
            )}
          </TouchableOpacity>

          <ResultCard
            exchangeRate={exchangeRate}
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencies={currencies}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
