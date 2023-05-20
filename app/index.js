import React from "react";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import Avatar from "../components/Avatar";
import Categories from "../components/Categories";
import Tasks from "../components/Tasks";
import Welcome from "../components/Welcome";
import NewTask from "../components/NewTask";

export default function Home() {
  return (
    <SafeAreaView className='flex-1 bg-tertiary px-6'>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#F4F6FD" },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <Avatar />,
        }}
      />

      <View className='flex-1'>
        <Welcome />
        <Categories />
        <Tasks />
      </View>
      <NewTask />
    </SafeAreaView>
  );
}
