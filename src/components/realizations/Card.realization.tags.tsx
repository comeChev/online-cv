export default function CardRealizationTags({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="flex flex-wrap w-full items-center justify-start my-4">
      {children}
    </ul>
  );
}
