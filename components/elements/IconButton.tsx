import * as RxIcons from "react-icons/rx";

interface IconButtonProps {
  icon: any;
  onClickIcon?: () => void;
}

export default function IconButton({
  icon,
  onClickIcon = () => {},
}: IconButtonProps) {
  return (
    <div
      className="flex justify-center items-center w-[36px] h-[36px] hover:bg-slate-700 rounded-full cursor-pointer"
      onClick={onClickIcon}
    >
      {icon}
    </div>
  );
}
