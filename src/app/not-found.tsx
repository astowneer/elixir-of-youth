import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-300 to-amber-400 px-4 text-center">
      <h1 className="text-6xl font-bold text-amber-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-amber-700 px-6 py-3 text-white font-medium hover:bg-amber-800s transition-colors"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
