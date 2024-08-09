import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const sleep = (ms:number) =>{
  return new Promise((res)=>setTimeout(res,ms))
}

export function getRandomInt(min:number, max:number) {
  min=Math.ceil(min);
  max=Math.ceil(max);
  return Math.floor(Math.random() * (max-min+1)) + min
}

export function getRandomElementArray(arr:any[]){
  const len = arr?.length
  return arr[getRandomInt(0, len-1)]
}