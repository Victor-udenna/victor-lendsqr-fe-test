import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserIdState {
  userId: string;
}

interface UserIdActions {
  setUserId: (userId: string) => void;
}

export const useUserIdStore = create<UserIdState & UserIdActions>()(
  persist(
    (set) => ({
      userId: "",
      setUserId: (userId: string) => set({ userId }),
    }),
    { name: "user-id" },
  ),
);
