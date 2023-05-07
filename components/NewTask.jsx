import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const categories = [
  { id: 0, title: "Personal" },
  { id: 1, title: "Business" },
  { id: 2, title: "School" },
];

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activeCategory, setActiveCategory] = useState({});
  return (
    <View>
      <Text>New Task</Text>
      <View>
        <View>
          <Text>Title</Text>
          <TextInput
            placeholder='enter title'
            value={title}
            onChange={(text) => setTitle(text)}
          />
        </View>

        <View>
          <Text>Category</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity
                className='rounded-lg px-2 py-4'
                onPress={() => {
                  setActiveCategory(item);
                }}
              >
                <Text className='text-sm font-normal'>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>

        <View>
          <Text>Description</Text>
          <TextInput
            multiline
            numberOfLines={4}
            placeholder='enter description'
            value={description}
            onChange={(text) => setDescription(text)}
          />
        </View>

        <View className='flex gap-3'>
          <TouchableOpacity className='bg-white px-4 px-3'>
            <Text className='text-blue-400'>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity className='bg-blue-400'>
            <Text className='text-white'>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
