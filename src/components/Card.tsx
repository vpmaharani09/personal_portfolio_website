import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
  useBorder = true,
}: PropsWithChildren<{ className?: string; useBorder?: boolean }>) => {
  return (
    <div
      className={twMerge(
        "cursor-pointer shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-3xl relative z-0 overflow-hidden after:z-50 after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:pointer-events-none",
        useBorder
          ? "border border-white/[0.1] hover:border-white/[0.2] transition duration-700"
          : "",
        className
      )}
    >
      {children}
    </div>
  );
};
