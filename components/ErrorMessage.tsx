import { GridLoader } from "react-spinners";

export default function ErrorMessage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
      <GridLoader color="#45ff45" />
      <div className="font-bold text-3xl text-red-600">Error</div>
      <div>잠시 후 다시 확인해주세요...</div>
    </div>
  );
}
