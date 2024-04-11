'use client';
import Image from 'next/image';
import significa from '@/assets/images/significa.svg';

export default function Logo() {
  return (
    <Image
      className="logo"
      src={significa}
      alt="Significa"
      width="150"
      height="52"
      priority
    />
  );
}
