import { HaikuValidator } from "@/components/haiku-validator";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="container mt-14 max-w-md flex-1 px-8">
        <HaikuValidator />
      </div>
    </>
  );
}
