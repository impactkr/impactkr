import Link from 'next/link';

const navLinks = [
  {
    title: '회사소개',
    href: '/',
  },
  {
    title: '사업영역',
    href: '/',
  },
  {
    title: '커뮤니티',
    href: '/',
  },
  {
    title: '상담신청',
    href: '/',
  },
];

function Gnb() {
  return (
    <ul className="flex gap-[48px]">
      {navLinks.map((link) => {
        return (
          <li key={link.title} onClick={() => alert('페이지 준비 중입니다.')}>
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
