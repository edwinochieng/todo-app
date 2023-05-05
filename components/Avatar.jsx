import React from "react";
import { View, Image } from "react-native";
import profile from "../assets/icons/profile.jpeg";

export default function Avatar() {
  return (
    <View className=''>
      <Image source={profile} className='rounded-full h-[30px] w-[30px]' />
    </View>
  );
}
