import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import useStore from "../../store/store";
import { useSearchParams } from "expo-router";
import BackButton from "../../components/BackButton";

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
    </SafeAreaView>
  );
}
