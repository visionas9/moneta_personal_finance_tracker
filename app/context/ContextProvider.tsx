"use client";
import { useState, useEffect, createContext } from "react";
import type { ContextType, transactionStates } from "@/app/types";

export const TransactionContext = createContext<ContextType | null>(null);

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<transactionStates[]>([]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  // False until localStorage has been read, so "no transactions" is not
  // shown to someone who has some, and the empty list is never saved over them.
  const [isLoaded, setIsLoaded] = useState(false);

  function toggleForm(): void {
    setIsFormOpen((prevFormOpen) => !prevFormOpen);
  }

  function handleDelete(index: number): void {
    setTransactions((prev) => prev.filter((_, i) => i !== index));
  }

  //converts to string to save data to local storage, then updates back to the original
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) setTransactions(JSON.parse(saved));
    setIsLoaded(true);
  }, []);

  //takes whatever is currently in transactions state, converts it to string, and saves it to the notebook
  useEffect(() => {
    if (isLoaded) localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions, isLoaded]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        isFormOpen,
        setIsFormOpen,
        toggleForm,
        handleDelete,
        isLoaded,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
