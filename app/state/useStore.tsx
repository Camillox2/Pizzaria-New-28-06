// src/store/store.ts
import create from "zustand";

interface Cliente {
  id: string;
  nome: string;
  email: string;
}

interface Pizza {
  id: string;
  nome: string;
  ingredientes: string[];
  preco: number;
}

interface Pagamento {
  id: string;
  clienteId: string;
  valor: number;
  data: string;
}

interface Pedido {
  id: string;
  clienteId: string;
  pizzas: Pizza[];
  total: number;
  data: string;
}

interface StoreState {
  clientes: Cliente[];
  pizzas: Pizza[];
  pagamentos: Pagamento[];
  pedidos: Pedido[];
  setClientes: (clientes: Cliente[]) => void;
  setPizzas: (pizzas: Pizza[]) => void;
  setPagamentos: (pagamentos: Pagamento[]) => void;
  setPedidos: (pedidos: Pedido[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  clientes: [
    { id: "1", nome: "João", email: "joao@example.com" },
    { id: "2", nome: "Maria", email: "maria@example.com" },
  ],
  pizzas: [
    {
      id: "1",
      nome: "Margherita",
      ingredientes: ["Tomate", "Mussarela", "Manjericão"],
      preco: 20,
    },
    {
      id: "2",
      nome: "Pepperoni",
      ingredientes: ["Pepperoni", "Mussarela"],
      preco: 25,
    },
  ],
  pagamentos: [
    { id: "1", clienteId: "1", valor: 20, data: "2023-06-25" },
    { id: "2", clienteId: "2", valor: 25, data: "2023-06-26" },
  ],
  pedidos: [
    {
      id: "1",
      clienteId: "1",
      pizzas: [
        {
          id: "1",
          nome: "Margherita",
          ingredientes: ["Tomate", "Mussarela", "Manjericão"],
          preco: 20,
        },
      ],
      total: 20,
      data: "2023-06-25",
    },
    {
      id: "2",
      clienteId: "2",
      pizzas: [
        {
          id: "2",
          nome: "Pepperoni",
          ingredientes: ["Pepperoni", "Mussarela"],
          preco: 25,
        },
      ],
      total: 25,
      data: "2023-06-26",
    },
  ],
  setClientes: (clientes) => set({ clientes }),
  setPizzas: (pizzas) => set({ pizzas }),
  setPagamentos: (pagamentos) => set({ pagamentos }),
  setPedidos: (pedidos) => set({ pedidos }),
}));
