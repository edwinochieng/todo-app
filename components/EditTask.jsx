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
import { categories } from "../store/store";

export default function EditTask({
  id,
  title,
  category,
  description,
  date,
  isCompleted,
}) {
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
        {
          text: "YES",
          onPress: () => {
            setModalVisible(false);
            setNewTitle(title);
            setNewCategory(category);
            setNewDescription(description);
            setNewDate(date);
            setShowDatePlaceholder(true);
          },
        },
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
    setNewCategory(category);
    setNewDescription(description);
    setNewTitle(title);
    setShowDatePlaceholder(true);
  };
  return (
    <View>
      <View className='absolute bottom-5 right-4 flex-row'>
        {!isCompleted && (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className='bg-gray-300 p-2 rounded-md mr-2'
          >
            <FontAwesome name='edit' size={22} color='black' />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={handleDeletePress}
          className='bg-gray-300 p-2 rounded-md ml-2'
        >
          <AntDesign name='delete' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType='slide'>
        <View className='bg-tertiary h-full  p-4 absolute bottom-0 left-0 right-0 '>
          <View className='py-3 border border-x-transparent border-t-transparent border-b-lightGray'>
            <Text className='text-center font-lato-bold font-bold text-xl'>
              Edit Task
            </Text>
          </View>

          <View className='mt-4 '>
            <View className='py-2'>
              <Text className='font-bold text-gray-800 text-sm font-lato mb-1'>
                Title
              </Text>
              <TextInput
                placeholder='Enter title'
                value={newTitle}
                onChangeText={(text) => setNewTitle(text)}
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
                      setNewCategory(item.name);
                    }}
                  >
                    <Text
                      className={`${
                        newCategory === item.name
                          ? "text-blue-400"
                          : "text-black"
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
                value={newDescription}
                onChangeText={(text) => setNewDescription(text)}
                className='rounded bg-gray-200  text-gray-800 px-1 h-20'
              />
            </View>

            <View className='mt-4 '>
              <Text className='font-bold text-gray-800 text-sm font-lato my-1'>
                Date and Time
              </Text>
              <View className='flex flex-row space-x-3 justify-between'>
                <View className='flex-1'>
                  <TouchableOpacity
                    onPress={() => setShowDatePicker(true)}
                    className='rounded-md bg-gray-200 px-1 py-4'
                  >
                    {showDatePlaceholder ? (
                      <Text className='text-gray-700 h-7'>Date</Text>
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

                <View className='flex-1'>
                  <TouchableOpacity
                    onPress={() => setShowTimePicker(true)}
                    className='rounded-md bg-gray-200 px-1 py-4'
                  >
                    {showDatePlaceholder ? (
                      <Text className='text-gray-700 h-7'>Time</Text>
                    ) : (
                      <Text>
                        {newDate.toLocaleTimeString({
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Text>
                    )}
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
                onPress={handleEditTask}
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
