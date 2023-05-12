import React, { useState, useEffect } from "react";
import {
  Modal,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import useStore from "../store/store";

const categories = [
  { name: "Personal" },
  { name: "Business" },
  { name: "School" },
];

const currentDate = new Date();

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(currentDate);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePlaceholder, setShowDatePlaceholder] = useState(true);

  const addTask = useStore((state) => state.addTask);

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

  const handleDateChange = (event, selectedDate) => {
    const newDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(newDate);
    setShowDatePlaceholder(false);
  };

  const handleTimeChange = (event, selectedTime) => {
    const newDate = selectedTime || date;
    setShowTimePicker(false);
    setDate(newDate);
    setShowDatePlaceholder(false);
  };

  const handleNewTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      title,
      category,
      description,
      date,
      isCompleted: false,
    };
    addTask(newTask);
    setModalVisible(false);
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
              onChangeText={(text) => setTitle(text)}
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
                    setCategory(item.name);
                  }}
                >
                  <Text
                    className={`${
                      category === item.name ? "text-blue-400" : "text-black"
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
              value={description}
              onChangeText={(text) => setDescription(text)}
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
                  <Text>{date.toLocaleDateString()}</Text>
                )}
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
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
                <Text>{date.toLocaleTimeString()}</Text>
              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={date}
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
              onPress={handleNewTask}
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
