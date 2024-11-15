import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import defaultTheme from "@/src/themes/defaultTheme";
import { Loading } from "@/src/components/Loading";
import { Routes } from "@/src/routes";
import { StatusBar } from "react-native";

export default function App() {
  const [fonstLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar barStyle="dark-content" />
      {fonstLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
