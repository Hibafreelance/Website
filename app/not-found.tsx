'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center lg:my-20 py-20">
      <div className="text-center">
      <h1 className="text-9xl font-bold mb-4 text-purple-600">404</h1>
        <h2 className="text-3xl mb-4 text-purple-600">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-4">We couldn't find the page you were looking for.</p>
        <p className="text-gray-600 mb-4">
          Return to the{" "}
          <Link href="/" className="text-blue-500 font-bold hover:underline">
Home page.
          </Link>
        </p>
      </div>
    </main>
  );
}
