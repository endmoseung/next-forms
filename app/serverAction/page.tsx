import ClientActionComponent from "@/components/clientActionComponent";
import ServerActionComponent from "@/components/serverActionComponent";

const page = () => {
  return (
    <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
      <ServerActionComponent />
      <ClientActionComponent />
    </div>
  );
};

export default page;
