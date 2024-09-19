import { Pressable, View, Text} from "react-native";

interface TextButtonProps{
    label: string;
    onPress: () => void;
}

export default function TextButton({ label , onPress } : TextButtonProps) {
  return (
    <View className=''>
        <Pressable className='' onPress={onPress}>
            <Text className=''>{label}</Text>
        </Pressable>
    </View>
  );
}