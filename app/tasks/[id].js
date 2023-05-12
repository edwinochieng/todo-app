import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useSearchParams, useRouter } from "expo-router";
import useStore from "../../store/store";
import EditTask from "../../components/EditTask";

export default function TaskDetails() {
  const router = useRouter();
  const params = useSearchParams();

  const tasks = useStore((state) => state.tasks);

  const task = tasks.find((item) => item.id == params.id);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              className='rounded-lg p-2 bg-gray-200 items-center'
            >
              <Ionicons name='chevron-back-sharp' size={20} color='black' />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView>
        <View className='flex-1 p-4'>
          <View>
            <Text className='font-bold text-xl text-gray-800'>
              {task.title}
            </Text>
          </View>

          <View className='py-2'>
            <Text className='font-semibold'>Category</Text>
            <Text className='mt-1 p-2 bg-gray-200 rounded-md text-blue-400'>
              {task.category}
            </Text>
          </View>

          <View className='py-2'>
            <Text className='font-semibold'>Status</Text>

            <View className='mt-1 bg-gray-200 p-2 rounded-md font-semibold'>
              {task.isCompleted ? (
                <Text className='bg-green-400'>Completed</Text>
              ) : (
                <Text className=' text-gray-600'>Pending</Text>
              )}
            </View>
          </View>

          <View className='py-2'>
            <Text className='font-semibold mb-1'>Description</Text>
            <Text className='bg-gray-200 p-2 rounded-md text-sm text-gray-700'>
              {task.description}
            </Text>
          </View>
          <View className='py-2 flex-row justify-between'>
            <View className='w-2/5'>
              <Text className='mb-1 font-semibold'>Date</Text>
              <Text className='rounded bg-gray-200 px-2 py-4'>
                {task.date.toLocaleDateString()}
              </Text>
            </View>

            <View className='w-2/5'>
              <Text className='mb-1 font-semibold'>Time</Text>
              <Text className='rounded bg-gray-200 px-2 py-4'>
                {task.date.toLocaleTimeString()}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <EditTask
        id={task.id}
        title={task.title}
        description={task.description}
        category={task.category}
        date={task.date}
      />
    </SafeAreaView>
  );
}
