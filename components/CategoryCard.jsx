import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useStore from "../store/store";

export default function CategoryCard({ title }) {
  const router = useRouter();
  const tasks = useStore((state) => state.tasks);
  const foundTasks = tasks.filter((task) => task.category === title);
  const foundTasksCount = foundTasks.length;

  return (
    <View className='w-[220px] h-[135px] bg-secondary rounded-[26px] justify-center pl-4 my-3 mr-2'>
      <TouchableOpacity onPress={() => router.push(`categories/${title}`)}>
        <Text className='text-sm text-gray-400 font-lato font-bold'>
          {foundTasksCount} tasks
        </Text>
        <Text className='text-2xl font-lato font-bold text-lightGray '>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
