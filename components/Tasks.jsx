import React from "react";
import { Text, View, FlatList } from "react-native";
import useStore from "../store/store";
import ToDo from "./ToDo";

export default function Tasks() {
  const tasks = useStore((state) => state.tasks);
  console.log(tasks);

  return (
    <View className=''>
      <Text className='uppercase text-xs font-semibold text-gray-700'>
        Today's Tasks
      </Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ToDo title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
