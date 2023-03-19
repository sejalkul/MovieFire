import { create } from "zustand";
import { getProfile } from "../api/profile.api";

export const useUserStore = create((set) => ({
  profile: null,
  fetchProfile: async () => {
    const { data } = await getProfile();
    set({ profile: data });
  },
  updateProfile: async (profile) => {
    const { data } = await updateProfile(profile);
    set({ profile: data });
  },
  clearProfile: () => {
    set({ profile: null });
  },
}));
