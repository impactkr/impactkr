function VisualText({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <h2 className="text-[40px] font-bold">{title}</h2>
      <p className="mt-[6px] text-2xl font-medium">{subtitle}</p>
    </>
  );
}

export default VisualText;
