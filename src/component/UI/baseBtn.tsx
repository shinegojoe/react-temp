import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from "react-redux"
import { ThemeState } from '../../action/theme.action'


interface IProps {
  width: string
  height: string
  bgc: string
  color: string
  text: string
}

const BaseBtn = (props: IProps) => {

  const themeState = useSelector((state: any) => {
    return state.themeReducer as ThemeState
  })
  console.log('sssssss', themeState)
  const mode = themeState.mode
  

  const useStyle = makeStyles({
    baseBtnContainer: {
      width: props.width,
      height: props.height,
      backgroundColor: props.bgc,
      color: props.color
    }
  })
  const style = useStyle()

  return (
    <div>
      {mode}
      <Button className={style.baseBtnContainer} variant="contained">{props.text}</Button>
    </div>
  )
}

export default BaseBtn