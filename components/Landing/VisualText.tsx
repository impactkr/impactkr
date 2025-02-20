function VisualText({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <h2 className="text-[40px] font-bold mo:text-[24px]">{title}</h2>
      <p className="mt-[6px] text-2xl font-medium mo:mt-[4px] mo:text-[18px]">
        {subtitle}
      </p>
    </>
  );
}

export default VisualText;
