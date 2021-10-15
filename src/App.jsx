import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import PopBooks from "./components/popbooks/popbooks";
import SlideBooks from "./components/slidebooks/slidebooks";

function App({ bestBooks }) {
  const [BBooks, setBBooks] = useState();
  const [loading, setLoading] = useState(true);

  const startBestBooks = async () => {
    try {
      const data = await bestBooks.getBestBooks();
      setBBooks(data);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    startBestBooks();
  }, []);

  return (
    <main className="App">
      <Navbar />
      <Header />
      <SlideBooks />
      <PopBooks BBooks={BBooks} loading={loading} />
    </main>
  );
}

export default App;
