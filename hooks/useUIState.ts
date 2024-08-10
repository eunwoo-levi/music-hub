import { create } from "zustand";

interface UIStateProps {
  homeCategory: string;
  headerImageSrc: string;
  setHomeCategory: (homeCategory: string) => void;
  setHeaderImageSrc: (headerImageSrc: string) => void;
}

export const useUIState = create<UIStateProps>((set) => ({
  homeCategory: "",
  headerImageSrc: "https://bloximages.newyork1.vip.townnews.com/dailytitan.com/content/tncms/assets/v3/editorial/6/3b/63b9ede6-56f6-11ec-b3f2-3fac8e9950df/61aeaeb273317.image.jpg?resize=1333%2C757",
  setHomeCategory: (homeCategory:string) => set({ homeCategory: homeCategory }),
  setHeaderImageSrc: (headerImageSrc:string) => set({ headerImageSrc: headerImageSrc })
}));