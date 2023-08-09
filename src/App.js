import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <Percentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <h3>How much was the bill?</h3>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Percentage({ children, percentage, onSelect }) {
  return (
    <div>
      <h3>{children}</h3>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  const output = bill + tip;

  return (
    <div>
      <h2>
        You pay ${output} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
