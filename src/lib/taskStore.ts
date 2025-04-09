import { create } from 'zustand';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  created_at: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
  toggleStatus: (id: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    {
      id: 1,
      title: 'Setup Development Environment',
      description: 'Install and configure all necessary development tools',
      status: 'completed',
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Create React Components',
      description: 'Develop reusable React components for the application',
      status: 'completed',
      created_at: new Date().toISOString(),
    },
    {
      id: 3,
      title: 'Implement Task Management',
      description: 'Set up task management functionality',
      status: 'pending',
      created_at: new Date().toISOString(),
    },
  ],
  addTask: (title: string, description: string) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Math.max(0, ...state.tasks.map((t) => t.id)) + 1,
          title,
          description,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ],
    })),
  deleteTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  updateTask: (id: number, updates: Partial<Task>) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),
  toggleStatus: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
          : task
      ),
    })),
}));