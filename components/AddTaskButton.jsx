import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function AddTaskButton() {
  return (
    <TouchableOpacity className='absolute right-4 bottom-6 rounded-full bg-blue-600 px-3 py-4 justify-center items-center'>
      <Text className='text-white '>New</Text>
    </TouchableOpacity>
  );
}
