import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    LatoRegular: require("../assets/fonts/Lato-Regular.ttf"),
    LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
    LatoLight: require("../assets/fonts/Lato-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
