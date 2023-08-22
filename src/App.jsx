import Header from "./components/header/Header";
import GettingStarted from "./components/getting-started/GettingStarted";
import ShortenUrlForm from "./components/shorten-url/ShortenUrlForm";
import AdvancedStatistics from "./components/advanced-statistics/AdvancedStatistics";
import BoostLinks from "./components/boost-links/BoostLinks";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <GettingStarted />
        <ShortenUrlForm />
        <AdvancedStatistics />
        <BoostLinks />
      </main>

      <Footer />
    </>
  );
}

export default App;
