export default function MenuSide({
  children,
  open,
  paddingTop,
}: {
  children: React.ReactNode;
  open: boolean;
  paddingTop: string;
}) {
  return (
    <nav
      className={`${
        open
          ? " right-0"
          : " -right-[85%] md:-right-[65%] lg:-right-[45%] xl:-right-[35%]"
      } flex flex-col justify-between ${paddingTop} fixed min-h-screen bg-gradient-blue top-0 z-40 transition-all duration-700 ease-in-out w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] overflow-y-scroll`}
    >
      {children}
    </nav>
  );
}
