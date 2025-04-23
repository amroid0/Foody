import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import DetailScreen from "./src/screens/resturantDetail";
const navigation = createStackNavigator(
  {
    search: SearchScreen,
    details : DetailScreen
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "search",
    },
  }
);
export default createAppContainer(navigation)
