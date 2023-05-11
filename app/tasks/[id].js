import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useSearchParams, useRouter } from "expo-router";
import useStore from "../../store/store";

export default function TaskDetails() {
  const router = useRouter();
  const params = useSearchParams();

  const tasks = useStore((state) => state.tasks);

  const task = tasks.find((item) => item.id == params.id);
  console.log(task);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='chevron-back-sharp' size={24} color='black' />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView>
        <Text>{params.id}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
