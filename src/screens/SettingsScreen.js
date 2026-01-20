import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  HomeButton,
  Image,
} from "react-native";
import { Button } from "../components/Button";
import { styles } from "../styles/Settings.styles";
import { currencies } from "../constants/currencies";
import { Input } from "../components/Input";
import { ResultCard } from "../components/ResultCard";
import { exchangeRateApi } from "../services/api";
import { useState } from "react";
import { convertCurrency } from "../utils/convertCurrency";
import { Modal } from "react-native";
import { HistoryComponents } from "../components/History/index";
import { styles as HistoryStyles } from "../components/History/style";

export default function SettingsScreen({ navigation }) {
  const [historyVisible, setHistoryVisible] = useState(false);
  return (
    <ScrollView style={[styles.container, styles.scrollView]}>
      <View style={styles.content}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>Defenições</Text>

            <TouchableOpacity
              style={styles.HomeButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Image
                source={require("../../assets/HomeButton.png")}
                style={styles.ImageBackButton}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.OptionButton}
          onPress={() => setHistoryVisible(true)}
        >
          <Text style={styles.OptionText}>Historico</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          visible={historyVisible}
          onRequestClose={() => setHistoryVisible(false)}
        >
          <View style={HistoryStyles.modalOverlay}>
            <HistoryComponents />
            <TouchableOpacity
              style={HistoryStyles.closeButton}
              onPress={() => setHistoryVisible(false)}
            >
              <Image
                source={require("../../assets/HomeButton.png")}
                style={styles.ImageBackButton}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
