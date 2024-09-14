import { NavigationContainer } from "@react-navigation/native";
import {API_URL} from '@env';
import { View , Text} from "react-native";

export const Home: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Api ne: {API_URL}</Text>
    </View>
  );
}