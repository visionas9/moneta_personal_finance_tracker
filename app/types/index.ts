export type transactionStates = {
  type: "income" | "expense";
  name: string;
  amount: number;
  category: string;
  date: string;
};

export type ContextType = {
  transactions: transactionStates[];
  setTransactions: React.Dispatch<React.SetStateAction<transactionStates[]>>;
  isFormOpen: boolean;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleForm: () => void;
  handleDelete: (index: number) => void;
};
