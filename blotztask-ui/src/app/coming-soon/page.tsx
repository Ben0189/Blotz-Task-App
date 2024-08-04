import { Button } from "@/components/ui/button";
import { H1, H3 } from "@/components/ui/heading-with-anchor";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <H1>⚒️ Coming Soon...</H1>
      <H3 className="text-lg font-light text-muted-foreground sm:text-xl">
        We are currently working on this page. Please come back later.
      </H3>
      <div className="mt-16 flex flex-col gap-3 md:flex-row">
        <Link href="/">
          <Button asChild>
            <span>
              Return Home Page
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
