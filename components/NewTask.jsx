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
import DateTimePicker from "@react-native-community/datetimepicker";
import useStore from "../store/store";
import { categories } from "../store/store";
import { Ionicons } from "@expo/vector-icons";

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
        {
          text: "YES",
          onPress: () => {
            setModalVisible(false);
            setTitle("");
            setCategory("");
            setDescription("");
            setDate(currentDate);
            setShowDatePlaceholder(true);
          },
        },
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
    setCategory("");
    setDescription("");
    setTitle("");
    setShowDatePlaceholder(true);
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className='z-50 absolute right-2 bottom-6 rounded-full bg-secondary h-[48px] w-[48px] justify-center items-center'
        >
          <Ionicons name='add' size={24} color='white' />
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType='slide'>
        <View className='bg-tertiary h-full  p-4 absolute bottom-0 left-0 right-0 '>
          <View className='py-3 border border-x-transparent border-t-transparent border-b-lightGray'>
            <Text className='text-center font-lato-bold font-bold text-xl'>
              New Task
            </Text>
          </View>

          <View className='mt-4'>
            <View className='py-2'>
              <Text className='font-bold text-gray-800 text-sm font-lato mb-1'>
                Title
              </Text>
              <TextInput
                placeholder='Enter title'
                value={title}
                onChangeText={(text) => setTitle(text)}
                className='rounded bg-gray-200  text-gray-800 px-1 h-12'
              />
            </View>

            <View>
              <Text className='font-lato font-bold text-gray-800 text-sm'>
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
                        category === item.name ? "text-blue-400 " : "text-black"
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
              <Text className='font-bold text-gray-800 text-sm font-lato my-1'>
                Description
              </Text>
              <TextInput
                multiline
                numberOfLines={4}
                placeholder='Enter description'
                value={description}
                onChangeText={(text) => setDescription(text)}
                className='rounded bg-gray-200  text-gray-800 px-1 h-20'
              />
            </View>

            <View className='mt-4 '>
              <Text className='font-bold text-gray-800 text-sm font-lato my-1'>
                Date and Time
              </Text>
              <View className='flex flex-row space-x-3'>
                <View className='flex-1'>
                  <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    className='rounded-md bg-gray-200 px-1 py-4 mt-1'
                  >
                    {showDatePlaceholder ? (
                      <Text className='text-gray-700 h-7'>Date</Text>
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

                <View className='flex-1'>
                  <TouchableOpacity
                    onPress={() => setShowTimePicker(true)}
                    className='rounded-md bg-gray-200 px-1 py-4 mt-1'
                  >
                    {showDatePlaceholder ? (
                      <Text className='text-gray-700 h-7'>Time</Text>
                    ) : (
                      <Text>
                        {date.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Text>
                    )}
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
            </View>

            <View className='mt-12 flex flex-row space-x-3 font-lato '>
              <TouchableOpacity
                onPress={handleCancelPress}
                className='flex-1 rounded-md border border-blue-500 bg-white h-12 justify-center '
              >
                <Text className='text-blue-500 text-lg text-center '>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleNewTask}
                className='flex-1 rounded-md bg-blue-500 h-12 justify-center'
              >
                <Text className='text-white text-lg text-center'>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
