import { redirect } from "next/navigation";
import { getUser } from "./actions";

export default async function ProfilePage() {
  const user = await getUser();
  if (user === null) {
    redirect("/login");
  }
  return <div>{user.name}</div>;
}
