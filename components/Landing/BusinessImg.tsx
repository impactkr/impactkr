import Image from "next/image";

function BusinessImg({ src }: { src: string }) {
  return (
    <div className="relative h-[500px] w-[300px]">
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}

export default BusinessImg;
