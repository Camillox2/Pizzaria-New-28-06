"use client";
import React from "react";
import { useStore } from "../state/useStore";

const Pagamentos: React.FC = () => {
  const { pagamentos } = useStore();

  return (
    <div className="container">
      <h1>Pagamentos Realizados</h1>
      <ul>
        {pagamentos.map((pagamento) => (
          <li key={pagamento.id}>
            {pagamento.clienteId} - R${pagamento.valor.toFixed(2)} -{" "}
            {new Date(pagamento.data).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagamentos;
