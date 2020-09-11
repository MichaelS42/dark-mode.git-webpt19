import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialState) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkmode", false)



    return [darkMode, setDarkMode]
}