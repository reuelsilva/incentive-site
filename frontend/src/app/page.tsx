"use client";
import Header from "./components/Header";
import { MenuProvider } from "./context/MenuContext";

export default function App() {
  return (
    <div>
      <MenuProvider>
        <Header/>
      </MenuProvider>
    </div>
  );
}
