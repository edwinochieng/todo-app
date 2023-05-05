import React from "react";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/Avatar";
import Categories from "../components/Categories";

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
      <ScrollView>
        <View>
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
