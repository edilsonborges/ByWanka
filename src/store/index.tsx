import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(
  devtools((set) => ({
    counter: 0,
    setCount: () => set((state) => ({ counter: state.counter + 1 }))
  }))
)
