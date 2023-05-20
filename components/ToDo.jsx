import react, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useStore from "../store/store";

export default function ToDo({ id, title }) {
  const [isDone, setIsDone] = useState(false);

  const router = useRouter();

  const updateTask = useStore((state) => state.updateTask);

  const handleEditTask = () => {
    const editedTask = {
      isCompleted: !isDone,
    };
    updateTask(editedTask, id);
    setIsDone(!isDone);
  };

  return (
    <View className='bg-white   rounded-2xl min-h-[56px] py-5 mb-2 flex-row items-center shadow-lg'>
      <View className='mx-3'>
        <TouchableOpacity
          onPress={handleEditTask}
          className={`${
            isDone ? "bg-gray" : " border border-gray "
          } rounded-full w-[24px] h-[24px] items-center justify-center`}
        >
          {isDone && <Ionicons name='checkmark' size={18} color='white' />}
        </TouchableOpacity>
      </View>
      <View>
        <Text
          className={`${
            isDone ? "line-through" : "no-underline"
          } text-base font-lato-bold font-semibold text-gray`}
        >
          {title}
        </Text>
      </View>

      <View className='absolute right-0 mx-2'>
        <TouchableOpacity onPress={() => router.push(`tasks/${id}`)}>
          <Ionicons name='chevron-forward-outline' size={24} color='#BBC2D8' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
