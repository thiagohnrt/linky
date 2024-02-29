import { repeatNode } from "@/services/utils";

export default function LoadingExplorer() {
  return (
    <div className="p-4 flex flex-col items-start gap-2">
      <span className="skeleton">......... .........</span>
      {repeatNode(
        10,
        <>
          <span className="skeleton mt-2">
            ............... ............... ...............
          </span>
          {repeatNode(
            5,
            <span className="skeleton">....... ....... .......</span>
          )}
        </>
      )}
    </div>
  );
}
