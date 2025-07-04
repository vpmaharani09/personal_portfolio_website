import dynamic from "next/dynamic";

const BentoGrid = dynamic(
  () =>
    import("./BentoGrid").then((m) => ({
      default: m.BentoGrid,
      BentoGridItem: m.BentoGridItem,
    })),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-900 animate-pulse" />,
  }
);

export { BentoGrid };
export const BentoGridItem = dynamic(
  () => import("./BentoGrid").then((m) => m.BentoGridItem),
  {
    ssr: false,
  }
);
