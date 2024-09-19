import { NavigationContainer } from "@react-navigation/native";
import {API_URL} from '@env';
import { View , Text, Platform} from "react-native";

export const Home: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Api ne: {API_URL}</Text>
      <Text>This app is running on {Platform.OS}</Text>
    </View>
  );
}