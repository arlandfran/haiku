import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        *a form of Japanese poetry. A haiku expresses a single feeling or
        impression and contains three unrhymed lines of five, seven, and five
        syllables, respectively.
      </p>
      <p className="font-mono leading-7 [&:not(:first-child)]:mt-6">
        calm as a river tranquility in my heart blue summer skies reign
      </p>
    </div>
  );
}
