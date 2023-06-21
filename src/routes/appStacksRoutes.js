import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes"
import PaginaDeProduto from "../screens/PaginaDeProduto";
import OnBoarding from "../screens/OnBoarding";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          title: "Detalhes",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pagina de Produto"
        component={PaginaDeProduto}
        options={{
          title: "Pagina de produto",
        }}
      />
    </Stack.Navigator>
  );
}
