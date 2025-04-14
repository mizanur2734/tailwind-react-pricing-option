import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./assets/components/DaisyNav/DaisyNav";
import NavBar from "./assets/components/NavBar/NavBar";
import PricingOption from "./assets/components/PricingOption/PricingOption";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

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
      </main>
    </>
  );
}

export default App;
