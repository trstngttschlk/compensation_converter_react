export default function Result({ conversionType, userInput }) {
  let conversion = conversionType
  let conversionText
  let result

  if (conversion === "annualToHour") {
    result = userInput / 52 / 40
    conversionText = "hourly wage"
  } else {
    result = userInput * 52 * 40
    conversionText = "annual salary"
  }

  result = result.toLocaleString("en-US")

  return (
    <div>
      <h2>
        Your {conversionText} is about ${result}
      </h2>
    </div>
  )
}
