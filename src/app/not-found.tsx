import { Home } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found – TensorUSD",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="grow flex items-center justify-center px-4 h-screen w-full">
      <section className="w-full max-w-2xl text-center py-16">
        <div className="space-y-6">
          <h1
            aria-label="Error 404"
            className="text-9xl font-bold text-foreground"
          >
            404
          </h1>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved. Please
            check the URL or return to the homepage.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Home size={20} />
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
