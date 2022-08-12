import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
export function useTheme() {

const context = useContext(ThemeContext)

if (context === undefined) {
    throw new Error("use context within defined context scope");
}

  return context
}
