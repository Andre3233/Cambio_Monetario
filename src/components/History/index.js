import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useContext } from "react";
import { HistoryContext } from "../../context/HistoryContext";
import { styles } from "../History/style";

export function HistoryComponents() {
  const { history, removeConversion, clearHistory } =
    useContext(HistoryContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>

      {history.length === 0 ? (
        <Text style={styles.emptyTextalert}>Histórico vazio!</Text>
      ) : (
        <ScrollView>
          {history.map((item) => (
            <View key={item.id} style={styles.item}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  {item.amount} {item.fromCurrency} → {item.result}{" "}
                  {item.toCurrency}
                </Text>
                <Text style={styles.text}>
                  {item.date} {item.time}
                </Text>
              </View>

              <TouchableOpacity onPress={() => removeConversion(item.id)}>
                <Image
                  source={require("../../../assets/delete.png")}
                  style={styles.trashIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          ))}
          {history.length > 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
              <Text style={styles.clearButtonText}>Limpar tudo</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      )}
    </View>
  );
}
