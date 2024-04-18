'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import nProgress from 'nprogress';

const NProgress = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    nProgress.done();
    return () => {
      nProgress.start();
    };
  }, [pathname, searchParams]);

  return <></>;
};

export { NProgress };
