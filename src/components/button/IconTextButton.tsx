import { Pressable, View, Text} from "react-native";

interface TextButtonProps{
    icon: React.ReactNode;
    label: string;
    onPress: () => void;
}

export default function IconTextButton({icon, label , onPress } : TextButtonProps) {
  return (
    <View className=''>
        <Pressable className='' onPress={onPress}>
            {icon}
            <Text className=''>{label}</Text>
        </Pressable>
    </View>
  );
}