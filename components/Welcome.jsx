import React from "react";
import { View, Text } from "react-native";

export default function Welcome() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <View className='my-7'>
      <Text className='font-lato-bold font-semibold text-secondary text-[40px]'>
        {greeting}
      </Text>
    </View>
  );
}
