import { delay } from "@/utils/delay";

const ParallelA = async () => {
  await delay(6000);
  return <div>ParallelA</div>;
};

export default ParallelA;
