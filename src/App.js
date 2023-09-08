import { useState } from "react"
import { MoneyInput } from "./components/MoneyInput"
import Converter from "./components/Converter"

export default function App() {
  const [conversionType, setConversionType] = useState("preselect")

  function handleConversionSelect(e) {
    setConversionType(e.target.value)
  }

  return (
    <div>
      <Converter
        onConversionSelect={handleConversionSelect}
        conversionType={conversionType}
      />
      {conversionType !== "preselect" ? (
        <>
          <MoneyInput conversionType={conversionType} />
        </>
      ) : null}
    </div>
  )
}
