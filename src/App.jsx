import { useState } from "react";

import Header from "./components/layout/Header";
import GettingStarted from "./components/GettingStarted";
import ShortenUrl from "./components/shorten-url/ShortenUrl";
import AdvancedStatistics from "./components/AdvancedStatistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/layout/Footer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main>
        <GettingStarted />
        <ShortenUrl />
        <AdvancedStatistics />
        <BoostLinks />
      </main>

      <Footer />
    </>
  );
}

export default App;
