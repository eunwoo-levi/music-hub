import { RingLoader } from "react-spinners";

export default function LoadingRing() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <RingLoader color="#45ff45" size={100} />
    </div>
  );
}
