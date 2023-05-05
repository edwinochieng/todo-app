import React from "react";
import { Text, View } from "react-native";

export default function CategoryCard({ title, tasks }) {
  return (
    <View className='w-[180px] h-[120px] bg-cyan-600 rounded-2xl justify-center pl-4 my-3 mr-2'>
      <Text className='text-sm text-gray-700 font-medium'>{tasks} tasks</Text>
      <Text className='text-2xl font-bold text-gray-700'>{title}</Text>
    </View>
  );
}
