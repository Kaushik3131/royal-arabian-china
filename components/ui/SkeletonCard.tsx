export function SkeletonCard() {
  return (
    <div className="w-full bg-card rounded-2xl border border-border overflow-hidden spatial-shadow">
      {/* Image shimmer */}
      <div className="w-full aspect-4/3 relative bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-shimmer" />

      {/* Content details */}
      <div className="p-6 space-y-4">
        {/* Duration badge skeleton */}
        <div className="flex justify-between items-center">
          <div className="h-5 w-24 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Title skeleton */}
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />

        {/* Description skeleton */}
        <div className="space-y-2 pt-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Footer/Price and Button skeleton */}
        <div className="border-t border-border pt-4 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-10 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
