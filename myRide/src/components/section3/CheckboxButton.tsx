import './styles/checkbox.css'

const CheckboxButton = () => {
  return (
    <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
    </label>
  )
}

export default CheckboxButton