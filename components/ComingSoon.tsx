'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function ComingSoon() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src="/image/img_ready.png"
        alt="페이지 준비 중입니다."
        width={500}
        height={500}
      />
    </div>
  );
}

export default ComingSoon;
