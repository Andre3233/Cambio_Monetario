import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: colors.cardBackground,
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },

  // Estilos do Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 16,
  },
  closeButton: {
    position: "absolute",
    right: 15,
    top: 18,
    backgroundColor: colors.cardBackground,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
  emptyTextalert: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
    top: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: colors.text,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
  clearButton: {
    //Apaga um por vez
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  clearButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
