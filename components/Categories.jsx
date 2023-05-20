import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import CategoryCard from "./CategoryCard";
import { categories } from "../store/store";

export default function Categories() {
  return (
    <View className='mb-3'>
      <Text className='uppercase text-[13px] font-lato-bold font-bold text-secondary'>
        Categories
      </Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard title={item.name} />}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
