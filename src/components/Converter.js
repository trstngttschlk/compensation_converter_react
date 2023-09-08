export default function Converter({ conversionType, onConversionSelect }) {
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
  )
}
