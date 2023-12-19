import { HaikuValidator } from "@/components/haiku-validator";

export default function Home() {
  return (
    <>
      <div className="container mt-14 max-w-md flex-1 px-8">
        <HaikuValidator />
      </div>
    </>
  );
}
