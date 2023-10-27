import { Switch } from 'antd'

function onChange(checked: boolean) {
  console.log(`switch to ${checked}`)
}

function ToggleBtn() {
  return <Switch defaultChecked onChange={onChange} />
}

export default ToggleBtn
