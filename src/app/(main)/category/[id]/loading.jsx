const CategoryLoading = () => {
  return (
    <div className="mx-auto my-10 grid w-11/12 grid-cols-1 gap-6 md:grid-cols-12">
      <div className="md:col-span-3">
        <div className="mb-4 h-7 w-36 animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="h-6 w-full animate-pulse rounded bg-gray-200"
            />
          ))}
        </div>
      </div>

      <div className="md:col-span-6">
        <div className="mb-4 h-7 w-44 animate-pulse rounded bg-gray-200" />
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="space-y-3 rounded border p-4">
              <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-8/12 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="mb-4 h-7 w-28 animate-pulse rounded bg-gray-200" />
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="h-10 w-full animate-pulse rounded bg-gray-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryLoading;
