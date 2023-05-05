import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";

const categories = [
  { id: 0, title: "Personal", tasks: 20 },
  { id: 1, title: "Business", tasks: 7 },
  { id: 2, title: "School", tasks: 10 },
];

export default function Categories() {
  return (
    <View className='my-3'>
      <Text className='uppercase text-xs font-semibold text-gray-700'>
        Categories
      </Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard title={item.title} tasks={item.tasks} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
