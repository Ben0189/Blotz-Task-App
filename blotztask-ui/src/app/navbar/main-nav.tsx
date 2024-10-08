import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { cn } from "@/lib/utils"
import Link from "next/link";

export async function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const session = await getServerSession(authOptions);

  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
          >
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Task List
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Profile
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Test Connection
            </Link>
            <ul>
                <li>
                  {session ? (<>logined</>):(<>not logined</>)}
                </li>
              </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
