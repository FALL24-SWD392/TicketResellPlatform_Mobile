import { Pressable, View, Text} from "react-native";

interface TextButtonProps{
    icon: React.ReactNode;
    onPress: () => void;
}

export default function IconButton({ icon , onPress } : TextButtonProps) {
  return (
    <View className=''>
        <Pressable className='' onPress={onPress}>
            {icon}
        </Pressable>
    </View>
  );
}