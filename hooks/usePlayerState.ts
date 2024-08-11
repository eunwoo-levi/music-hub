import { dummyAllSongList } from "@/lib/dummyData";
import { Song } from "@/types";
import { create } from "zustand";

interface PlayerState{
    isVisiblePlayer:false;
    activeSong?:Song| null 
    prevPlayerQueue:Song[] 
    nextPlayerQueue:Song[]
    setIsVisiblePlayer:(isVisiblePlayer:boolean)=>void
    addSongList:(songList:Song[])=>void;
    playNext:()=>void;
    playBack:()=>void;
}

export const usePlayerState= create<PlayerState>((set)=>({
    isVisiblePlayer:true,
    activeSong:null,
    prevPlayerQueue:[],
    nextPlayerQueue:[],
    setIsVisiblePlayer:(isVisiblePlayer:boolean)=>set({isVisiblePlayer}),
    addSongList:(songList:Song[])=>set((prev)=>{
        const prevSong = prev.activeSong;
        const cloneSongList=[...songList];
        const currentSong = cloneSongList.splice(0,1)?.[0]

        return{
            activeSong:currentSong,
            prevPlayerQueue: prevSong?[prevSong, ...prev.prevPlayerQueue]:prev.prevPlayerQueue,
            nextPlayerQueue:[...cloneSongList],
            isVisiblePlayer:true
        }
    }),
    playNext:()=>{set((prev)=>{
        const currentSong=prev.activeSong;
        const nextSrc = prev.nextPlayerQueue.splice(0,1)?.[0];

        return({
            activeSong:nextSrc,
            nextPlayerQueue:prev.nextPlayerQueue,
            prevPlayerQueue:[...(currentSong?[currentSong]:[]),...prev.prevPlayerQueue]
        })
    })},
    playBack:()=>set((prev)=>{
        const currentSong=prev.activeSong;
        const prevSrc = prev.prevPlayerQueue.splice(0,1)?.[0]

        return{
            activeSong:prevSrc,
            nextPlayerQueue:[...(currentSong?[currentSong]:[]) ,...prev.nextPlayerQueue],
            prevPlayerQueue:prev.prevPlayerQueue
        }
    })
}));