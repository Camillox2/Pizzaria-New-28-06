"use client";

import React, { useState, useEffect } from "react";
import Clientes from "./components/client";
import Pagamentos from "./components/payments";
import Pedidos from "./components/order";
import Link from "next/link";
import { useDarkMode } from '@/app/state/store';
import { useStore } from "zustand";



const Home = () => {
  const [darktheme, setDarkTheme] = useState(false);
  const isDark = useDarkMode((state) => state.dark);
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  }, [isDark]);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#292c35" : "#fff";
  }, [isDark]);
  
  const mudarDarktheme = () => {
    changeState();
  }

  const changeState = useDarkMode((state) => { return state.change })
  console.log(isDark);
  

  return ( <div>
    <p>{isDark ? 'DARK': 'LIGHT'}</p>
    <button onClick={mudarDarktheme} onChange={() => { changeState() }}></button>
    <h1>Bem-vindo à Pizzaria</h1>
    <Clientes />
    <Link href={"pages/paginaTeste"}>CLIQUE AQUI PARA PIZZAS</Link>
    <Pagamentos />
    <Pedidos />
  </div> );
}
 
export default Home;
// const Home: React.FC = () =>
  
//   (
//   <div>
//     <p>{theme}</p>
//     <h1>Bem-vindo à Pizzaria</h1>
//     <Clientes />
//     <Link href={"pages/paginaTeste"}>CLIQUE AQUI PARA PIZZAS</Link>
//     <Pagamentos />
//     <Pedidos />
//   </div>
// );

// export default Home;
