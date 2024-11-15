import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();
import { Home } from "../screens/Home";
import { NewSnack } from "../screens/NewSnack";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newSnack" component={NewSnack} />
    </Navigator>
  );
}
