import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const Examples = () => {
  return (
    <main>
      <NavBar />
      <section className="w-full flex justify-center py-4">
        <div className="w-2/4 mx-auto">
          <h1 className="text-4xl max-md:text-2xl max-sm:text-xl">
            🛠️ Working on it
          </h1>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Examples;
