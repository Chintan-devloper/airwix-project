import React from "react";
import { ProductProvider } from "./context/ProductContext";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <ProductProvider>
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold">Product Management</h1>
          </header>

          <main>
            <ProductForm />
            <ProductList />
          </main>
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
