import { Text, View } from "react-native";

export default function ToDo({ title }) {
  return (
    <View className='bg-gray-800 rounded-lg px-1 py-4 mb-1'>
      <Text className='text-white'>{title}</Text>
    </View>
  );
}
