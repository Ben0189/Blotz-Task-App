import { Button } from "@/components/ui/button";
import { H1, H3 } from "@/components/ui/heading-with-anchor";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <H1>Blotz Task</H1>
      <H3 className="text-lg font-light text-muted-foreground sm:text-xl">
        Designed to help users efficiently organize and track their tasks providing functionality for task creation, management, and completion tracking.
      </H3>
      <div className="mt-16 flex flex-col gap-3 md:flex-row">
        <Link href="/tasks">
          <Button asChild>
            <span>
              Task List
            </span>
          </Button>
        </Link>
        <Link href="coming-soon">
          <Button variant="outline" asChild>
            <span>
              My Profile
            </span>
          </Button>
        </Link>
        <Link href="/coming-soon">
          <Button variant="outline" asChild>
            <span>
              Log out
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
