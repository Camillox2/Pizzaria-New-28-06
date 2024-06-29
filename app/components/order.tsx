"use client";
import React from "react";
import { useStore } from "../state/useStore";

const Pedidos: React.FC = () => {
  const { pedidos } = useStore();

  return (
    <div className="container">
      <h1>Pedidos Realizados</h1>
      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Cliente: {pedido.clienteId} - Total: R${pedido.total.toFixed(2)} -
            Data: {new Date(pedido.data).toLocaleDateString()}
            <ul>
              {pedido.pizzas.map((pizza) => (
                <li key={pizza.id}>
                  {pizza.nome} - {pizza.ingredientes.join(", ")}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pedidos;
