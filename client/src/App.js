import Header from "./components/Header/Header";
import MainInfo from "./components/MainInfo/MainInfo";
import Services from "./components/Services/Services";
import WorkingStages from "./components/WorkingStages/WorkingStages";
import Portfolio from "./components/Portfolio/Portfolio";
import Geography from "./components/Geography/Geography";
import PriceSheet from "./components/PriceSheet/PriceSheet";
import FAQ from "./components/FAQ/FAQ";
import Company from "./components/Company/Company";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import WidthProvider from "./ContextProviders/WidthProvider";
import CitySelectionProvider from "./ContextProviders/CitySelectionProvider";
import { Route, Routes } from "react-router-dom";
import Admin from "../src/routes/Admin/Admin";
import { DropDownMessage } from "./elements/dropDownMessage/dropDownMessage";
import { useDropDownMessageContext } from "./ContextProviders/DropDownMessageProvider";

function App() {
  const { isShown } = useDropDownMessageContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <WidthProvider>
              <CitySelectionProvider>
                {isShown && <DropDownMessage />}
                <Header />
                <MainInfo />
                <Services />
                <WorkingStages />
                <Geography />
                <Portfolio />
                <PriceSheet />
                <FAQ />
                <Company />
                <ContactUs />
                <Footer />
              </CitySelectionProvider>
            </WidthProvider>
          </div>
        }
      />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
