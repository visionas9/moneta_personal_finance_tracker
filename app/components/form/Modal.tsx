"use client";
import { useContext } from "react";
import { TransactionContext } from "@/app/context/ContextProvider";
import TransactionForm from "./TransactionForm";

export default function Modal() {
  const { isFormOpen }: any = useContext(TransactionContext);

  return isFormOpen ? <TransactionForm /> : null;
}
