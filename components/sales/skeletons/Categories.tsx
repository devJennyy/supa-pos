import SkeletonCard from "@/components/ui/skeleton-loading";

const CategorySkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <SkeletonCard className="h-6 lg:w-1/12 sm:w-1/8 w-1/4" />

      <div className="w-full flex gap-3 pb-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="w-full h-20 lg:h-25 rounded-xl border flex flex-col justify-center items-center gap-2 p-3"
          >
            <SkeletonCard className="h-8 w-9 rounded-md mb-2" />
            <SkeletonCard className="h-4 w-16 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
