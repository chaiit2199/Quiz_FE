// src/pages/reset-password.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ResetPassword() {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type New Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
              </div>

              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset Password</button>
              {message && <p className="mt-4 text-center text-green-500">{message}</p>}
            </form>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              <Link href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-1">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
