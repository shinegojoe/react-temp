import TextField from '@material-ui/core/TextField'
// import style from '../../sass/component/UI/textInput.module.sass'
import { makeStyles } from '@material-ui/core/styles'


interface IProps {
  width: string
  fullWidth: boolean
  label: string
}

const TextInput = (props: IProps) => {
  const useStyles = makeStyles({
    textInputContainer: {
      width: props.width,
    }
  })

  const style = useStyles()
  return (
    <div className={style.textInputContainer}>
      <TextField label={props.label} fullWidth={props.fullWidth} />
    </div>
  )
}

export default TextInput