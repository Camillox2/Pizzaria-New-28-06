"use client";
import React, { useState } from "react";
import { useStore } from "../state/useStore";
import { NextResponse } from "next/server";

const Clientes: React.FC = () => {
  const { clientes, setClientes } = useStore();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const addCliente = async () => {
    try {
      const response = await fetch("/api/create/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email }),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar Cliente");
      }

      const data = await response.json();
      setClientes([...clientes, data.item]);
      setNome("");
      setEmail("");
    } catch (error) {
      console.error("Erro ao adicionar Cliente:", error);
    }
  };

  return (
    <div className="container">
      <h1>Clientes Registrados</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addCliente();
        }}
      >
        <input
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Adicionar Cliente</button>
      </form>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;
