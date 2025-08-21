import SkeletonCard from "@/components/ui/skeleton-loading";

const CategoriesSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 !mt-3">
      {/* Section Title */}
      <div className="flex justify-between items-center">
        <SkeletonCard className="h-6 w-1/4" />
        <SkeletonCard className="h-6 w-1/6" />
      </div>

      {/* Carousel Skeleton */}
      <div className="flex gap-3 overflow-x-auto pb-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 lg:h-25 lg:px-8 px-5 h-20 rounded-xl border flex flex-col justify-center items-center gap-1"
          >

            <SkeletonCard className="h-8 w-8 rounded-full mb-2" />
            {/* Title placeholder */}
            <SkeletonCard className="h-3 w-12 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
