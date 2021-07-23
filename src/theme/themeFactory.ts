import lightTheme from './light'
import darkTheme from './dark'


const themeFactory = (mode: string) => {
  if(mode === 'light') {
    return lightTheme
  }
  if(mode === 'dark') {
    return darkTheme
  }

  return lightTheme
}

export default themeFactory
