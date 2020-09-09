import useLocalStorage from './useLocalStorage';

export const useDarkMode = (initialState) => {
    const [darkMode, setDarkMode] = useLocalStorage(false)
const toggleMode = 
    return [darkMode, setDarkMode]
}