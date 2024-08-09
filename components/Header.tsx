"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { cn } from "@/lib/utils";

const HeaderDrawer = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo isInDrawer={true} onClickClose={() => setIsOpen(false)} />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default function Header({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrolled = () => {
      if (headRef.current) {
        const scrollValue = headRef.current.scrollTop;
        setIsScrolled(scrollValue !== 0);
      }
    };

    headRef?.current?.addEventListener("scroll", handleScrolled);
    return () => {
      headRef?.current?.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      {/*bg Section */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            className="object-cover"
            fill
            src="https://bloximages.newyork1.vip.townnews.com/dailytitan.com/content/tncms/assets/v3/editorial/6/3b/63b9ede6-56f6-11ec-b3f2-3fac8e9950df/61aeaeb273317.image.jpg?resize=1333%2C757"
            alt="Header"
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full" />
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full" />
        </div>
      </section>
      {/*Search Section */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-slate-800 opacity-50 rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="w-full h-full bg-slate-800 opacity-50"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
}
