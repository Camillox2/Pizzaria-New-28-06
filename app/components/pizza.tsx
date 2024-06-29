"use client";
import React, { useState } from "react";
import { useStore } from "../state/useStore";

const Pizzas: React.FC = () => {
  const { pizzas, setPizzas } = useStore();
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preco, setPreco] = useState("");

  const addPizza = async () => {
    const newPizza = {
      nome,
      ingredientes: ingredientes.split(",").map((ing) => ing.trim()),
      preco: parseFloat(preco),
    };

    try {
      const response = await fetch("/api/create/pizza", {
        // Caminho correto da API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPizza),
      });

      if (!response.ok) {
        throw new Error("Erro ao adicionar pizza");
      }

      const data = await response.json();
      setPizzas([...pizzas, data.item]);
      setNome("");
      setIngredientes("");
      setPreco("");
    } catch (error) {
      console.error("Erro ao adicionar pizza:", error);
    }
  };

  return (
    <div className="container">
      <h1>Pizzas Disponíveis</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPizza();
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
          type="text"
          value={ingredientes}
          placeholder="Ingredientes (separados por vírgula)"
          onChange={(e) => setIngredientes(e.target.value)}
          required
        />
        <input
          type="number"
          value={preco}
          placeholder="Preço"
          onChange={(e) => setPreco(e.target.value)}
          required
        />
        <button type="submit">Adicionar Pizza</button>
      </form>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            {pizza.nome} - {pizza.ingredientes.join(", ")} - R$
            {pizza.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;
