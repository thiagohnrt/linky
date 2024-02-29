import { repeatNode } from "@/services/utils";

export default function LoadingContent() {
  return (
    <div className="flex flex-col items-start gap-8">
      {repeatNode(
        10,
        <div>
          <span className="skeleton">
            ............... ............... ............... ...............
            ...............
          </span>
          <div className="grid 2xl:grid-cols-12 lg:grid-cols-6 md:grid-cols-4 gap-4 py-4">
            {repeatNode(
              10,
              <div className="skeleton p-3">
                .......................................
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
