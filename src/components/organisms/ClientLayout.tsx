"use client";
import { useState } from "react";
import LoadingScreen from "@/components/organisms/LoadingScreen";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default ClientLayout;
