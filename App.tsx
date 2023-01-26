import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from "react-native";
import favicon from "./assets/favicon.png";

export default function App() {

  const handlePress = () => {
    console.log("Text clicked");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native. This is a veru long text to test numberoflines props </Text>
      <Image source={favicon} />
      <Text>Please click on the below image to see the effect.</Text>
      <TouchableHighlight onPress={() => console.log("Image is clicked")}>
        <Image
          source={{
            uri: "https://picsum.photos/200",
            width: 200,
            height: 300,
          }} />
      </TouchableHighlight>
      <TouchableNativeFeedback onPress={() => console.log("image tapped")}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
      </TouchableNativeFeedback  >
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
