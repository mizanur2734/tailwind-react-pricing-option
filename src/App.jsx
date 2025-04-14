import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./assets/components/DaisyNav/DaisyNav";
import NavBar from "./assets/components/NavBar/NavBar";
import PricingOption from "./assets/components/PricingOption/PricingOption";
import ResultChart from "./assets/components/ResultChart/ResultChart";
import axios from "axios";
import MarkChart from "./assets/components/MarkChart/MarkChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
const marksPromise = axios.get("markData.json");

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-md"></span>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-md"></span>
          }
        >
          <MarkChart marksPromise={marksPromise}></MarkChart>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
