import { Text, View } from "react-native";

export default function ToDo({ title }) {
  return (
    <View className='bg-green-400'>
      <Text className='text-white'>{title}</Text>
    </View>
  );
}
