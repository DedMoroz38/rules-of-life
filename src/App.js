import Header from "./components/Header/Header";
import MainInfo from "./components/MainInfo/MainInfo";
import Services from "./components/Services/Services";
import WorkingStages from "./components/WorkingStages/WorkingStages";
import Portfolio from "./components/Portfolio/Portfolio";
import Geography from "./components/Geography/Geography";
import PriceSheet from "./components/PriceSheet/PriceSheet";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      <Header />
      <MainInfo />
      <Services />
      <WorkingStages />
      <Geography />
      <Portfolio />
      <PriceSheet />
      <FAQ />
    </div>
  );
}

export default App;
