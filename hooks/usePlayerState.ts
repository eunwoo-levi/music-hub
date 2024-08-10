import { create } from "zustand";

interface PlayerState{
    isVisiblePlayer:boolean;
    setIsVisiblePlayer:(isVisiblePlayer:boolean)=>void
}

export const usePlayerState= create<PlayerState>((set)=>({
    isVisiblePlayer:true,
    setIsVisiblePlayer:(isVisiblePlayer:boolean)=>set({isVisiblePlayer})
}))