import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className='rounded-lg p-2 bg-gray-200 items-center'
    >
      <Ionicons name='chevron-back-sharp' size={20} color='black' />
    </TouchableOpacity>
  );
}
