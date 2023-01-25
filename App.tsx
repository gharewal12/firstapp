import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,SafeAreaView} from "react-native";

export default function App() {

  const handlePress=()=>{
    console.log("Text clicked");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native. This is a veru long text to test numberoflines props </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
