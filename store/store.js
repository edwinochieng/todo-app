import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create((set, get) => ({
  tasks: [],

  addTask: (newTask) => {
    set({ tasks: [...get().tasks, newTask] });
  },

  removeTask: (task) => {
    set({ tasks: get().tasks.filter((item) => item.id !== task.id) });
  },
  clearStore: () => {
    set({ tasks: [] });
  },
}));

export default useStore;
