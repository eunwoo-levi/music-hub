import Image from "next/image";
import { ReactNode } from "react";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="relative overflow-y-auto w-full h-full">
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
      <section className="sticky">
        <PagePadding>
          Search Section
          <UserIcon />
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
}
