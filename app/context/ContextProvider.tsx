"use client";
import React, { useState, createContext } from "react";

type ContextType = {
  transactions: any[];
  setTransactions: React.Dispatch<React.SetStateAction<any[]>>;
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleForm: () => void;
};

export const TransactionContext = createContext<ContextType | null>(null);

export default function ContextProvider({ children }: { children: any }) {
  const [transactions, setTransactions] = useState<any[]>([]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm(): void {
    setIsFormOpen((prevFormOpen) => !prevFormOpen);
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        isFormOpen,
        setIsFormOpen,
        toggleForm,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
