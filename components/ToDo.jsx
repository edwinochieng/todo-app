import react, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ToDo({ id, title }) {
  const [isDone, setIsDone] = useState(false);

  const router = useRouter();

  return (
    <View className='bg-gray-800 rounded-lg py-4 mb-1 flex-row items-center'>
      <View className='mx-3'>
        <TouchableOpacity
          onPress={() => setIsDone((prevValue) => !prevValue)}
          className='border rounded-full w-[24px] h-[24px] items-center justify-center'
        >
          {isDone && <Ionicons name='checkmark' size={18} color='black' />}
        </TouchableOpacity>
      </View>
      <View>
        <Text
          className={`${
            isDone ? "line-through" : "no-underline"
          } text-base text-white`}
        >
          {title}
        </Text>
      </View>

      <View className='absolute right-0 mr-1'>
        <TouchableOpacity onPress={() => router.push(`tasks/${id}`)}>
          <Ionicons name='chevron-forward-outline' size={28} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
