import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return;
  }

  if (!session) {
    return (
      <div style={{ padding: "20px" }}>
        <h1 className="mb-2">Chào mừng bạn!</h1>
        <p className="mb-4">Vui lòng đăng nhập để tiếp tục.</p>
        <Link href="/login">
          <button className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đăng nhập</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Xin chào, {session.user?.name || session.user?.email}!</h1>
      <button className=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => signOut()}>Đăng xuất</button>
      {session?.user?.role}
    </div>
  );
}
