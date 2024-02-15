'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

interface ProvidersProps {
  children: Readonly<React.ReactNode>;
}

const Providers = ({ children }: ProvidersProps) => {
  const router = useRouter();
  return (
    <NextUIProvider className="h-full w-full" navigate={router.push}>
      {children}
    </NextUIProvider>
  );
};

export default Providers;
