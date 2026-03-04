"use client";
import { useContext } from "react";
import { TransactionContext } from "@/app/context/ContextProvider";
import TransactionForm from "./TransactionForm";

export default function Modal() {
  const context = useContext(TransactionContext);
  if (!context) return null;

  const { isFormOpen } = context;

  return isFormOpen ? <TransactionForm /> : null;
}
