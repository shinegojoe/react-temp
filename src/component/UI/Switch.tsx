import { useState } from 'react'

import Switch from '@material-ui/core/Switch'

interface IProps {
  update: Function
  isOn: boolean
}

const SwitchBtn = (props: IProps)=> {

  const [isOn, setIsOn ] = useState<boolean>(props.isOn)
  
  const handleChange = () => {
    props.update(!isOn)
    setIsOn(!isOn)
  }

  return (
    <div>
      <Switch
        checked={isOn}
        onChange={handleChange}
        name="checkedA"
      />

    </div>
  )
}

export default SwitchBtn