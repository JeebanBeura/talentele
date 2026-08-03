"use client";

import * as React from "react";
import { ThemeProvider } from "../components/providers/ThemeProvider";

// Placeholder for future Query Provider (e.g. React Query)
function QueryProvider({ children }) {
  return <>{children}</>;
}

// Placeholder for Toast Provider (e.g. sonner or react-toastify)
function ToastProvider() {
  return null;
}

// Placeholder for Analytics Provider (e.g. Vercel Analytics)
function AnalyticsProvider() {
  return null;
}

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
        <ToastProvider />
        <AnalyticsProvider />
      </QueryProvider>
    </ThemeProvider>
  );
}
