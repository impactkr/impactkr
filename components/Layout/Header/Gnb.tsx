import Link from "next/link";

const navLinks = [
  {
    title: "회사소개",
    href: "/AboutUs",
  },
  {
    title: "사업영역",
    href: "/Service",
  },
  {
    title: "커뮤니티",
    href: "/Community",
  },
  {
    title: "상담신청",
    href: "/Contact",
  },
];

function Gnb() {
  return (
    <ul className="flex gap-[48px] mo:hidden">
      {navLinks.map((link) => {
        return (
          <li
            key={link.title}
            className="relative cursor-pointer before:absolute before:bottom-[-2px] before:left-0 before:h-[2px] before:w-0 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
          >
            <Link href={link.href} className="text-lg font-medium text-white">
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Gnb;
