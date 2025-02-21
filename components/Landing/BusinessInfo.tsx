function BusinessInfo({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <dl className="mt-[30px] text-[#555555]">
      <dt className="text-[32px] font-semibold">{title}</dt>
      <dd className="mt-[16px] text-[18px] font-medium leading-[24px]">
        {children}
      </dd>
    </dl>
  );
}

export default BusinessInfo;
