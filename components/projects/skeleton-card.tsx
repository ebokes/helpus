import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <>
      <div className="shadow-lg w-full rounded-3xl p-4">
        <div className="flex justify-center">
          <Skeleton className="w-full h-[250px] rounded-lg" />
        </div>
        <div className="mt-6">
          <Skeleton className="w-full h-[10px] rounded-full" />
        </div>
        <div className="mt-5 mb-3">
          <div className="flex justify-between w-full mt-2">
            <div className="text-center">
              <Skeleton className="w-16 h-6 mb-1" />
            </div>
            <div className="text-center">
              <Skeleton className="w-16 h-6 mb-1" />
            </div>
            <div className="text-center">
              <Skeleton className="w-16 h-6 mb-1" />
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="w-full h-6 mt-4 mb-2 mx-auto" />
        </div>
        <div className="flex gap-4 mx-auto mt-9 mb-4 justify-center">
          <Skeleton className="w-2/5 h-10 rounded-full" />
        </div>
      </div>
    </>
  );
}
