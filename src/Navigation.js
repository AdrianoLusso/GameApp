import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home/Home";
import Add from "./screens/Add/Add";
import GameList from "./screens/GameList/GameList";
import GameDetails from "./screens/GameDetails/GameDetails";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      animation: 'slide_from_bottom'}}>
      <Stack.Screen name="Home" component={Home} options={{headerStyle:{backgroundColor:'#FF8C00'}}}/>
      <Stack.Screen
        name="Add"
        component={Add}
        options={{presentation: "modal",headerStyle:{backgroundColor:'#FF8C00'}}}
      />
      <Stack.Screen
        name="GameList"
        component={GameList}
        options={{ presentation: "modal",headerStyle:{backgroundColor:'#FF8C00'}}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={{ presentation: "modal",headerStyle:{backgroundColor:'#FF8C00'}}}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
