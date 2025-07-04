import dynamic from "next/dynamic";

const BackgroundGradientAnimation = dynamic(
  () =>
    import("./BackgroundGradientAnimation").then(
      (m) => m.BackgroundGradientAnimation
    ),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 to-blue-900" />
    ),
  }
);

export { BackgroundGradientAnimation };
