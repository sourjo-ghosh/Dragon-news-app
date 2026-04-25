"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 dark:bg-black">
      <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <Image
          src={logo}
          alt="Dragon News logo"
          width={260}
          className="mx-auto mb-8 h-auto w-auto"
          priority
        />

        <p className="text-xl font-semibold uppercase tracking-[0.25em] text-red-500">
          Error 404
        </p>
        <h1 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100 md:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-zinc-600 dark:text-zinc-400">
          The page you are looking for does not exist or may have been moved.
          Please return to the homepage and continue exploring the latest news.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
          >
            Go to Homepage
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
