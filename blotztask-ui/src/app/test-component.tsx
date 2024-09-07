
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Link } from "lucide-react";
import { getServerSession } from "next-auth";

//TODO: UI improvement needed
const Nav = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/test">Test</Link>
          {session ? (<>logined</>):(<>not logined</>)}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;