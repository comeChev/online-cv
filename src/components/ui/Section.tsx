type SectionProps = {
  css?: string;
  children: React.ReactNode;
  id?: string;
};
export default function Section({ css, children, id = "" }: SectionProps) {
  return (
    <section className={`mt-10 py-10 ${css}`} id={id}>
      {" "}
      {children}
    </section>
  );
}
