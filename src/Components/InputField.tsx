import "../css/Input.css"

const InputField = ({label, placeholder, value , type , onChange}: {
  label: string,
  placeholder: string,
  value: string,
  onChange: (e: any) => void,
  type: string
}) => {
  return (
    <div>
      <label for="fname">{label}</label>
      <input type={type} id={label} name={label.split(" ").join("")} placeholder={placeholder || ""} value={value} onChange={onChange}></input>
    </div>
  )
}

export default InputField