import { NavigationContainer } from "@react-navigation/native";
import {API_URL} from '@env';
import { View , Text} from "react-native";

export const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Api ne: {API_URL}</Text>
    </View>
  );
}