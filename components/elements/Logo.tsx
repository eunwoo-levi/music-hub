"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";

export default function Logo() {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        icon={<RxHamburgerMenu size={24} />}
        onClickIcon={onClickMenu}
      />

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={"/main-logo.svg"} alt="logo" />
      </div>
    </section>
  );
}
