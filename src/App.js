import { useState } from "react";

export default function App() {
  const [conversionType, setConversionType] = useState("preselect");

  function handleConversionSelect(e) {
    setConversionType(e.target.value);
  }

  return (
    <div>
      <Convertor
        onConversionSelect={handleConversionSelect}
        conversionType={conversionType}
      />
      {conversionType !== "preselect" ? (
        <div>
          <MoneyInput conversionType={conversionType} />
        </div>
      ) : null}
    </div>
  );
}

function Convertor({ conversionType, onConversionSelect }) {
  return (
    <>
      <h1>Please select a conversion</h1>
      <select
        name=""
        id=""
        value={conversionType}
        onChange={onConversionSelect}
      >
        <option value="preselect" default>
          --select--
        </option>
        <option value="hourToAnnual">Hourly &gt; Annual</option>
        <option value="annualToHour">Annual &gt; Hourly</option>
      </select>
    </>
  );
}

function MoneyInput({ conversionType }) {
  const [userInput, setUserInput] = useState("");
  let text;

  conversionType === "annualToHour"
    ? (text = "Enter your current annual salary")
    : (text = "Enter your current hourly rate");

  return (
    <>
      <form>
        <label>{text}</label>
        <input
          type="number"
          placeholder="$..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </form>
      <Result conversionType={conversionType} userInput={userInput} />
    </>
  );
}

function Result({ conversionType, userInput }) {
  let conversion = conversionType;
  let conversionText;
  let result;

  if (conversion === "annualToHour") {
    result = userInput / 52 / 40;
    conversionText = "hourly wage";
  } else {
    result = userInput * 52 * 40;
    conversionText = "annual salary";
  }

  result = result.toLocaleString("en-US");

  return (
    <div>
      <h2>
        Your {conversionText} is about ${result}
      </h2>
    </div>
  );
}
