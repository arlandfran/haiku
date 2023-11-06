"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { syllable } from "syllable";

export function HaikuValidator() {
  const [syllableCount, setSyllableCount] = useState(0);

  return (
    <Form.Root>
      <Form.Field name="haiku" className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Form.Label>Write your haiku</Form.Label>
          <Form.Message
            match="valueMissing"
            className="text-sm font-light opacity-80"
          >
            Please enter a haiku
          </Form.Message>
          <Form.Message match={(value) => syllable(value) !== 17}>
            Haiku must be 17 syllables
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Textarea
            placeholder={`calm as a river\ntranquility in my heart\nblue summer skies reign`}
            className="resize-none font-mono"
            onChange={(e) => {
              setSyllableCount(syllable(e.target.value));
            }}
            rows={3}
            required
          />
        </Form.Control>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Syllable count: {syllableCount}
          </span>
          <Form.Submit asChild>
            <Button>Post</Button>
          </Form.Submit>
        </div>
      </Form.Field>
    </Form.Root>
  );
}
