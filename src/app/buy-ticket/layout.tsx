"use client";

import { Button } from "@/components/ui/button";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="container mb-5">
        {/* go back button */}
        <Button href="/account" customLink>
          Go back
        </Button>
      </div>
      <div>{children}</div>
    </div>
  );
}
