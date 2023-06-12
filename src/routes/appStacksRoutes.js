import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Categoria from "../screens/Categoria"
import PaginaDeProduto from "../screens/PaginaDeProduto"


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Categoria" 
                component={Categoria} 
                options={{
                    title: "Categoria",
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
    )
}
