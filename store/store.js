import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create((set, get) => ({
  tasks: [],

  addTask: (newTask) => {
    set({ tasks: [...get().tasks, newTask] });
  },

  updateTask: (editedTask, taskId) => {
    set(() => {
      const tasks = get().tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, ...editedTask };
        } else {
          return task;
        }
      });

      return { tasks };
    });
  },

  removeTask: (taskId) => {
    set({ tasks: get().tasks.filter((item) => item.id !== taskId) });
  },
  clearStore: () => {
    set({ tasks: [] });
  },
}));

export default useStore;
