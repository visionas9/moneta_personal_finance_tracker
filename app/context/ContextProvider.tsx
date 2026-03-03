"use client";
import React, { useState, useEffect, createContext } from "react";

type ContextType = {
  transactions: any[];
  setTransactions: React.Dispatch<React.SetStateAction<any[]>>;
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleForm: () => void;
  handleDelete: (index: number) => void;
};

export const TransactionContext = createContext<ContextType | null>(null);

export default function ContextProvider({ children }: { children: any }) {
  const [transactions, setTransactions] = useState<any[]>([]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  function toggleForm(): void {
    setIsFormOpen((prevFormOpen) => !prevFormOpen);
  }

  function handleDelete(index: number): void {
    setTransactions((prev: any[]) => prev.filter((_, i) => i !== index));
  }

  //converts to string to save data to local storage, then updates back to the original
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) setTransactions(JSON.parse(saved));
  }, []);

  //takes whatever is currently in transactions state, converts it to string, and saves it to the notebook
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        isFormOpen,
        setIsFormOpen,
        toggleForm,
        handleDelete,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
