import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Button({ variant = "primary", onPress, currency, isSelected}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSelected && (variant === "primary" ? styles.buttonPrimary : styles.buttonSecundary)
      ]}
    >
      <Text style={styles.buttunText}>{currency.code}</Text>
    </TouchableOpacity>
  );
}
