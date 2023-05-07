import React, { useState } from "react";
import {
  Modal,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
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
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancelPress = () => {
    Alert.alert(
      "Cancel",
      "Are you sure you want to cancel?",
      [
        { text: "NO", style: "cancel" },
        { text: "YES", onPress: () => setModalVisible(false) },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className='absolute right-4 bottom-6 rounded-full bg-blue-600 px-3 py-4 justify-center items-center'
        >
          <Text className='text-white '>New</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType='slide'>
        <Text className='text-center font-semibold text-lg'>New Task</Text>
        <View className='mt-4 p-4'>
          <View className='py-2'>
            <Text className='font-semibold text-gray-800 text-sm'>Title</Text>
            <TextInput
              placeholder='Enter title'
              value={title}
              onChange={(text) => setTitle(text)}
              className='rounded bg-gray-200 placeholder-gray-600 px-1 py-2'
            />
          </View>

          <View>
            <Text className='font-semibold text-gray-800 text-sm'>
              Category
            </Text>
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className='bg-green-500 rounded-md px-2 py-1'
                  onPress={() => {
                    setActiveCategory(item);
                  }}
                >
                  <Text className='text-sm font-normal'>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              className='my-1'
            />
          </View>

          <View>
            <Text className='font-semibold text-gray-800 text-sm py-1'>
              Description
            </Text>
            <TextInput
              multiline
              numberOfLines={4}
              placeholder='Enter description'
              value={description}
              onChange={(text) => setDescription(text)}
              className='rounded bg-gray-200 placeholder-gray-600 px-1 py-2'
            />
          </View>

          <View className='flex-row mt-4'>
            <TouchableOpacity
              onPress={handleCancelPress}
              className='rounded border border-blue-100 bg-white px-6 py-3'
            >
              <Text className='text-blue-400'>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity className='rounded bg-blue-400 px-6 py-3'>
              <Text className='text-white'>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
