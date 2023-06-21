import * as Font from "expo-font";

export default loadCustomFonts = async () => {
  await Font.loadAsync({
    "DarkerGrotesque-Black": require("../../assets/fonts/DarkerGrotesque-Black.ttf"),
    "DarkerGrotesque-Bold": require("../../assets/fonts/DarkerGrotesque-Bold.ttf"),
    "DarkerGrotesque-ExtraBold": require("../../assets/fonts/DarkerGrotesque-ExtraBold.ttf"),
    "DarkerGrotesque-Light": require("../../assets/fonts/DarkerGrotesque-Light.ttf"),
    "DarkerGrotesque-Medium": require("../../assets/fonts/DarkerGrotesque-Medium.ttf"),
    "DarkerGrotesque-Regular": require("../../assets/fonts/DarkerGrotesque-Regular.ttf"),
    "DarkerGrotesque-SemiBold": require("../../assets/fonts/DarkerGrotesque-SemiBold.ttf"),
  });
  return true;
};
