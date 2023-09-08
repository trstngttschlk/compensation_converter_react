import { useState } from "react"
import Result from "./Result"

export function MoneyInput({ conversionType }) {
  const [userInput, setUserInput] = useState("")
  let text

  conversionType === "annualToHour"
    ? (text = "Enter your current annual salary")
    : (text = "Enter your current hourly rate")

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
  )
}
