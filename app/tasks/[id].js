import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { Stack, useSearchParams } from "expo-router";
import useStore from "../../store/store";
import EditTask from "../../components/EditTask";
import BackButton from "../../components/BackButton";

export default function TaskDetails() {
  const params = useSearchParams();

  const tasks = useStore((state) => state.tasks);

  const task = tasks.find((item) => item.id == params.id);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#F4F6FD" },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <BackButton />,
        }}
      />
      <ScrollView>
        <View className='flex-1 p-4 h-screen bg-white'>
          <View>
            <Text className='font-lato-bold font-bold text-xl text-gray-800'>
              {task.title}
            </Text>
          </View>

          <View className='py-3'>
            <Text className='font-bold text-gray-700 font-lato'>Category</Text>
            <Text className='mt-1 px-2 py-3 bg-gray-200 rounded-md text-blue-400'>
              {task.category}
            </Text>
          </View>

          <View className='py-2'>
            <Text className='font-bold text-gray-700 font-lato'>Status</Text>

            <View className='mt-1 bg-gray-200 px-2 py-3 rounded-md font-semibold'>
              {task.isCompleted ? (
                <Text className='text-green-600'>Completed</Text>
              ) : (
                <Text className=' text-gray-700'>Pending</Text>
              )}
            </View>
          </View>

          <View className='py-2'>
            <Text className='font-bold font-lato text-gray-700 mb-1'>
              Description
            </Text>
            <Text className='bg-gray-200 px-2 py-3 rounded-md text-sm text-gray-700 font-lato'>
              {task.description}
            </Text>
          </View>
          <View className='py-2 flex-row justify-between'>
            <View className='w-2/5'>
              <Text className='font-bold font-lato text-gray-700 mb-1'>
                Date
              </Text>
              <Text className='rounded bg-gray-200 px-2 py-4'>
                {task.date.toLocaleDateString()}
              </Text>
            </View>

            <View className='w-2/5'>
              <Text className='font-bold font-lato text-gray-700 mb-1'>
                Time
              </Text>
              <Text className='rounded bg-gray-200 px-2 py-4'>
                {task.date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
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
        isCompleted={task.isCompleted}
      />
    </SafeAreaView>
  );
}
