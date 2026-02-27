"use client";
import { TransactionContext } from "@/app/context/ContextProvider";
import { useContext } from "react";

export default function TransactionForm() {
  const { toggleForm }: any = useContext(TransactionContext);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-surface rounded-xl p-8 w-[400px]">
        <form>
          <button onClick={toggleForm}>X</button>
          <input name="query" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
