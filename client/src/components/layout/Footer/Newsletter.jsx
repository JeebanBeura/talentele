"use client";

import { Input, Button, Text } from "../../ui";

export default function Newsletter() {
  return (
    <div className="flex flex-col gap-4">
      <Text variant="bodyLarge" weight="semibold" color="heading">
        Subscribe to our newsletter
      </Text>
      <Text variant="small" color="muted">
        Get the latest news and articles to your inbox every month.
      </Text>
      <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <Input 
          type="email" 
          placeholder="Enter your email" 
          required 
          className="bg-[#FAFAFA]" 
          aria-label="Email address"
        />
        <Button variant="primary" type="submit">Subscribe</Button>
      </form>
    </div>
  );
}
