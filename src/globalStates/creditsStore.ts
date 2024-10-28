import { useSession } from "next-auth/react";
import { create } from "zustand";

type CreditsStoreType = {
  currentCredits: number;
  setCurrentCredits: (credits: number) => void;
};

export const useCreditsSore = create<CreditsStoreType>((set) => {
  return {
    currentCredits: 0,
    setCurrentCredits(credits) {
      this.currentCredits = credits;
    },
  };
});
