"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { syllable } from "syllable";

export function HaikuValidator() {
  const [syllableCount, setSyllableCount] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor="haiku">Write your haiku</Label>
      <Textarea
        id="haiku"
        placeholder={`calm as a river\ntranquility in my heart\nblue summer skies reign`}
        className="resize-none font-mono"
        onChange={(e) => {
          setSyllableCount(syllable(e.target.value));
        }}
        rows={3}
      />
      <p className="text-sm text-muted-foreground">
        Syllable count: {syllableCount}
      </p>
      <Button
        type="submit"
        disabled={syllableCount === 17 ? false : true}
        className="w-fit self-end"
      >
        Post
      </Button>
    </div>
  );
}
