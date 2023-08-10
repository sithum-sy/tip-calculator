import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billInput, setBillInput] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");

  const tip = billInput * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBillInput("");
    setPercentage1("");
    setPercentage2("");
  }

  return (
    <div>
      <h1>Tip Calulator</h1>
      <BillInput bill={billInput} onBillInput={setBillInput} />
      <Percentage percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </Percentage>
      {billInput > 0 && (
        <div>
          <Output bill={billInput} tip={tip} />
          <Reset reset={handleReset} />
        </div>
      )}
    </div>
  );
}

function BillInput({ bill, onBillInput }) {
  return (
    <div>
      <h3>How much was the bill?</h3>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onBillInput(Number(e.target.value))}
      />
    </div>
  );
}

function Percentage({ children, percentage, onSetPercentage }) {
  return (
    <div>
      <h3>{children}</h3>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
