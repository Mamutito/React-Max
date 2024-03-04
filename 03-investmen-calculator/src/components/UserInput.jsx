import React from "react";

function UserInput({ onInputChange, annualData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            name="initialInvestment"
            type="number"
            onChange={onInputChange}
            value={annualData.initialInvestment}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            name="annualInvestment"
            type="number"
            onChange={onInputChange}
            value={annualData.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Investment</label>
          <input
            name="expectedReturn"
            type="number"
            onChange={onInputChange}
            value={annualData.expectedReturn}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            name="duration"
            type="number"
            onChange={onInputChange}
            value={annualData.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
