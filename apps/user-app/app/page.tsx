
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient() 


export default function Home():JSX.Element {
  return (
    <div className="">
      <div className="w-56 h-56 bg-black">
        hello EveryOne
      </div>
      
    </div>
  );
}
