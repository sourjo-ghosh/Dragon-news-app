/** Skeleton shown while auth pages or search-param UI resolve. */
export default function AuthPageSkeleton() {
  return (
    <div className="mx-auto flex min-h-[80vh] w-full items-center justify-center bg-gray-100 px-4 py-8 sm:px-6 sm:py-10 dark:bg-zinc-800">
      <div className="w-full max-w-xl rounded-2xl bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-10 dark:bg-zinc-900">
        <div className="mx-auto mb-4 h-8 w-48 max-w-full animate-pulse rounded-lg bg-gray-200 dark:bg-zinc-800" />
        <div className="mx-auto mb-8 h-4 w-full max-w-md animate-pulse rounded bg-gray-200 dark:bg-zinc-800" />
        <div className="flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-12 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-zinc-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
