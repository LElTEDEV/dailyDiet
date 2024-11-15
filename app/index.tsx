import { Text, View } from "react-native";

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import defaultTheme from "@/src/themes/defaultTheme";
import { AppRoutes } from "@/src/routes/appRoutes";
import { Loading } from "@/src/components/Loading";

export default function App() {
  const [fonstLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={defaultTheme}>
      {fonstLoaded ? <AppRoutes /> : <Loading />}
    </ThemeProvider>
  );
}
