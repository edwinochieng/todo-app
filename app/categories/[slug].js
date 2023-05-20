import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, View, FlatList, Text } from "react-native";
import useStore from "../../store/store";
import { useSearchParams } from "expo-router";
import BackButton from "../../components/BackButton";
import ToDo from "../../components/ToDo";

export default function Categories() {
  const tasks = useStore((state) => state.tasks);
  const params = useSearchParams();
  const category = params.slug;

  const foundTasks = tasks.filter((task) => task.category === category);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <BackButton />,
        }}
      />
      <View className='px-4'>
        <Text className='text-center font-lato-bold font-bold text-xl my-3'>
          {category} Tasks
        </Text>
        <FlatList
          data={foundTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ToDo id={item.id} title={item.title} />}
        />
      </View>
    </SafeAreaView>
  );
}
