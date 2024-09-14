import { View, Text } from "react-native";
import { styled } from "nativewind";

export const Profile: React.FC = () => {
  const StyledView = styled(View);
  const StyledText = styled(Text);
  
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Trang này test nè.</Text>
    </View>
  );
};
