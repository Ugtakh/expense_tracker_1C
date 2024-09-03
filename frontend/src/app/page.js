import Image from "next/image";
import { UserCard } from "./components/home/user-card";

// const fetchUsers = async () => {
//   try {
//     const res = await fetch("http://localhost:8008/users");
//     const data = await res.json()
//     return data
//   } catch (error) {
//     console.log("error", error)
//   }
// }

export default async function Home() {
  // const users = await fetchUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
