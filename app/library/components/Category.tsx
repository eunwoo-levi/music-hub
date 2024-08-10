"use client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

interface CategoryProps {
  label: string;
  src: string;
}

export default function Category() {
  const libraryCategory = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];
  /*
  // justand상태관리 구현 필요
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

  const onClickCategory = (item: CategoryProps) => {
    if (homeCategory === item.label) {
      setHomeCategory("");
      setHeaderImageSrc("");
    } else {
      setHomeCategory(item.label);
      setHeaderImageSrc(item.src);
    }
  };
  */

  return (
    <div className="flex flex-row justify-between items-center flex-wrap">
      <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
        {libraryCategory.map((item) => (
          <li
            key={item}
            className="h-[38px] min-w-fit flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-[162px] h-[42px] flex flex-row justify-between items-center p-4 bg-neutral-800 border border-neutral-600 rounded-3xl text-[14px]">
              <div>최근 활동</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px] bg-neutral-800" align="end">
            <DropdownMenuLabel className="p-4">정렬기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px]">
                <FiCheck size={20} />
              </span>
              최근활동
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px] pl-10">최근에 저장됨</span>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="p-4">
              <span className="min-w-[40px] pl-10">최근 재생한 음악</span>
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
