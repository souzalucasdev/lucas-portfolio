'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DrawerProvider } from '@/context/DrawerContext';

const queryClient = new QueryClient();

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DrawerProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </DrawerProvider>
  );
}
