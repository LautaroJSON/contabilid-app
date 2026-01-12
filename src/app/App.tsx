import {
  BalanceCard,
  FloatButton,
  Header,
  Modal,
  ContabilityList,
  ContabilityForm,
} from "@/components";
import { useState } from "react";
import { ContabilityProvider } from "@/context/ContabilityProvider";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ContabilityProvider>
      <div className="flex flex-col h-screen bg-gray-200 gap-2">
        <Header />
        <div className="m-2 flex flex-col gap-4 flex-1 overflow-y-auto items-center">
          <BalanceCard />
          <ContabilityList />
        </div>
        <FloatButton onClick={() => setIsModalOpen(true)} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContabilityForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </ContabilityProvider>
  );
}

export default App;
