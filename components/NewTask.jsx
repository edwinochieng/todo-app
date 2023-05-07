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

      <Modal visible={modalVisible}>
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

          <View className='flex-row gap-3'>
            <TouchableOpacity
              onPress={handleCancelPress}
              className='border border-blue-100 bg-white px-4 px-3'
            >
              <Text className='text-blue-400'>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity className='bg-blue-400 px-4 px-3'>
              <Text className='text-white'>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
