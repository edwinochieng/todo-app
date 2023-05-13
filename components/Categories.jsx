import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import { categories } from "../store/store";

export default function Categories() {
  return (
    <View className='my-3'>
      <Text className='uppercase text-xs font-semibold text-gray-700'>
        Categories
      </Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard title={item.name} tasks={item.tasks} />
        )}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
