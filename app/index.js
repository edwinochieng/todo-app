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
    <SafeAreaView className='flex-1 bg-white'>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <Avatar />,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1 p-4'>
          <Welcome />
          <Categories />
          <Tasks />
        </View>
      </ScrollView>
      <NewTask />
    </SafeAreaView>
  );
}
