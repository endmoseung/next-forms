import { delay } from "@/utils/delay";

const ParallelB = async () => {
  await delay(5000);
  // throw new Error("error");
  return <div>ParallelB</div>;
};

export default ParallelB;
