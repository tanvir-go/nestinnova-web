"use client";

import React from "react";
import { useQuoteModal } from "./QuoteModalContext";

interface QuoteModalWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const QuoteModalWrapper: React.FC<QuoteModalWrapperProps> = ({ children, className }) => {
  const { openModal } = useQuoteModal();

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
};
