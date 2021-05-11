import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionInput = Pick<
//   Transaction,
//   'title' | 'amount' | 'type' | 'category'
// >;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  removeTransaction: (transaction: Transaction) => void;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({
  children,
}: TransactionsProviderProps): JSX.Element {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  function removeTransaction(transaction: Transaction) {
    setTransactions(oldData =>
      oldData.filter(item => item.id !== transaction.id),
    );
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, removeTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);

  return context;
}
