import { FiMusic } from "react-icons/fi";

interface CategoryMenuProps {
  icon: any;
  label: string;
}

const CategoryMenu = ({ icon, label }: CategoryMenuProps) => {
  return (
    <div className="flex flex-row items-center gap-4 w-full h-[56px] py-4 px-[24px] bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition">
      {icon}
      {label}
    </div>
  );
};

export default function Category() {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu label={"최신 음악"} icon={<FiMusic color="#AAAAAA" />} />
      <CategoryMenu label={"차트"} icon={<FiMusic />} />
      <CategoryMenu label={"분위기 및 장르"} icon={<FiMusic />} />
    </div>
  );
}
