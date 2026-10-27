import { useState } from "react";
import "./App.css";

const TIP_OPTIONS = [10, 15, 20, 25];
const App = () => {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(15);
  const [people, setPeople] = useState(1);

  const billNumber = Math.max(0, Number(bill));
  const peopleNumber = Math.max(1, Math.floor(Number(people)));
  const tipAmount = billNumber * (tipPercent / 100);
  const total = billNumber + tipAmount;
  const perPerson = total / peopleNumber;

  const resetFunction = () => {
    setBill("");
    setPeople(1);
    setTipPercent(15);
  };

  return (
    <div className="app">
      <div className="card">
        <h1> Tip Calculator</h1>

        <div className="field">
          <label htmlFor="bill">Bill Amount</label>
          <input
            id="bill"
            type="number"
            placeholder="0.00"
            min="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Tip Percentage</label>
          <div className="tip-buttons">
            {TIP_OPTIONS.map((percent) => (
              <button
                key={percent}
                onClick={() => setTipPercent(percent)}
                className={tipPercent === percent ? "active" : ""}
              >
                {percent}%
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <label htmlFor="people"> Number of people</label>
          <input
            id="people"
            type="number"
            min="1"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>

        {billNumber > 0 ? (
          <div className="results">
            <div className="result-row">
              <span>Tip</span>
              <span>{tipAmount.toFixed(2)}</span>
            </div>
            <div className="result-row">
              <span>Total</span>
              <span>{total.toFixed(2)}</span>
            </div>
            <div className="result-row highlight">
              <span>Per Person</span>
              <span>{perPerson.toFixed(2)}</span>
            </div>

            <button onClick={resetFunction} className="reset-button">
              reset
            </button>
          </div>
        ) : (
          <p className="hint">Enter a bill amount to start</p>
        )}
      </div>
    </div>
  );
};

export default App;
