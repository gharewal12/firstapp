import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, StatusBar } from "react-native";
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
      <TouchableOpacity onPress={() => console.log("Image is clicked")}>
        <Image
          source={{
            uri: "https://picsum.photos/200",
            width: 200,
            height: 300,
          }} />
      </TouchableOpacity>
      <TouchableNativeFeedback onPress={() => console.log("image tapped")}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
      </TouchableNativeFeedback  >
      <Button
        color={"red"}
        title="ClickMe"
        onPress={() => Alert.alert("My Title", "button tapped", [{ text: "Yes", onPress: () => console.log("Yes is clicked") }, { text: "No", onPress: () => console.log("No is clicked") }])} />
      <Button
        color={"green"}
        title="ClickMe"
        onPress={() => Alert.prompt("My Title", "my message")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? StatusBar?.currentHeight : 0
    // alignItems: "center",
    // justifyContent: "center", 
  },
});
