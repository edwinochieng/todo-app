import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import useStore from "../store/store";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";

const categories = [
  { name: "Personal" },
  { name: "Business" },
  { name: "School" },
];

export default function EditTask({ id, title, category, description, date }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCategory, setNewCategory] = useState(category);
  const [newDate, setNewDate] = useState(date);
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePlaceholder, setShowDatePlaceholder] = useState(true);

  const router = useRouter();
  const updateTask = useStore((state) => state.updateTask);
  const deleteTask = useStore((state) => state.removeTask);

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

  const handleDeletePress = () => {
    Alert.alert(
      "Are you sure you want to delete?",
      "This will permanently remove this task.",
      [
        { text: "NO", style: "cancel" },
        {
          text: "YES",
          onPress: () => {
            router.push("/");
            deleteTask(id);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleDateChange = (event, selectedDate) => {
    const pickedDate = selectedDate || newDate;
    setShowDatePicker(false);
    setDate(pickedDate);
    setShowDatePlaceholder(false);
  };

  const handleTimeChange = (event, selectedTime) => {
    const pickedDate = selectedTime || newDate;
    setShowTimePicker(false);
    setDate(pickedDate);
    setShowDatePlaceholder(false);
  };

  const handleEditTask = () => {
    const editedTask = {
      title: newTitle,
      category: newCategory,
      description: newDescription,
      date: newDate,
    };
    updateTask(editedTask, id);
    setModalVisible(false);
  };
  return (
    <View>
      <View className='absolute right-4 flex-row'>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className='bg-gray-300 p-2 rounded-md mr-1'
        >
          <FontAwesome name='edit' size={24} color='black' />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDeletePress}
          className='bg-gray-300 p-2 rounded-md ml-1'
        >
          <AntDesign name='delete' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <Text className='text-center font-semibold text-lg'>Edit Task</Text>
        <View className='mt-4 p-4'>
          <View className='py-2'>
            <Text className='font-semibold text-gray-800 text-sm'>Title</Text>
            <TextInput
              placeholder='Enter title'
              value={newTitle}
              onChangeText={(text) => setNewTitle(text)}
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
                  className='bg-gray-300 rounded p-2 w-[70px] mr-1'
                  onPress={() => {
                    setNewCategory(item.name);
                  }}
                >
                  <Text
                    className={`${
                      newCategory === item.name ? "text-blue-400" : "text-black"
                    } text-sm font-normal`}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
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
              value={newDescription}
              onChangeText={(text) => setNewDescription(text)}
              className='rounded bg-gray-200 placeholder-gray-600 px-1 py-2'
            />
          </View>

          <View className='mt-4 flex-row justify-between'>
            <View className='w-2/5'>
              <Text>Date</Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                className='rounded-md bg-gray-200 px-1 py-4'
              >
                {showDatePlaceholder ? (
                  <Text>dd/mm/yyy</Text>
                ) : (
                  <Text>{newDate.toLocaleDateString()}</Text>
                )}
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={newDate}
                  mode='date'
                  display='default'
                  onChange={handleDateChange}
                />
              )}
            </View>

            <View className='w-5/12'>
              <Text>Time</Text>
              <TouchableOpacity
                onPress={() => setShowTimePicker(true)}
                className='rounded-md bg-gray-200 px-1 py-4'
              >
                <Text>
                  {newDate.toLocaleTimeString({
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={newDate}
                  mode='time'
                  display='default'
                  onChange={handleTimeChange}
                />
              )}
            </View>
          </View>

          <View className='flex-row justify-between mt-4'>
            <TouchableOpacity
              onPress={handleCancelPress}
              className='w-5/12 rounded border border-blue-100 bg-white px-6 py-3 '
            >
              <Text className='text-blue-400'>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleEditTask}
              className='w-5/12 rounded bg-blue-400 px-6 py-3'
            >
              <Text className='text-white'>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
