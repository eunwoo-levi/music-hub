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

export function chunkArray(arr:any[], chunkSize:number){
  const resultArray=[];
  for(let i=0; i<arr.length; i+=chunkSize){
    const chunk = arr.slice(i,i+chunkSize);
    resultArray.push(chunk);
  }

  return resultArray
}

// 랜덤 색상 생성
export function generateRandomHex(){
  return "#" + ((Math.random()*0xffffff << 0).toString(16).padStart(6,"0"))
}