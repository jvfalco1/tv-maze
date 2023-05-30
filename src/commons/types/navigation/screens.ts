import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

interface ScreensInterface {
  component: React.FC;
  name: string;
  options:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;
}

export default ScreensInterface;
