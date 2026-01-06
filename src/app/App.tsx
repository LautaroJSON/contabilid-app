import { BalanceCard } from "../components/BalanceCard";
import { FloatButton } from "../components/FloatButton";
import { ContabilityList } from "../components/Contability/ContabilityList";
import { Header } from "../components/header";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-200 gap-2">
      {/* <h1>Contabilidapp</h1> */}
      <Header />
      <div className="m-2 flex flex-col gap-4 flex-1 overflow-y-auto items-center">
        <BalanceCard />
        <ContabilityList />
      </div>
      <FloatButton onClick={() => console.log("Botón flotante clickeado")} />
    </div>
  );
}

export default App;
