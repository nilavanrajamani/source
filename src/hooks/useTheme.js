import { useDebugValue, useState } from "react";

const useTheme = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => setDarkTheme(!darkTheme);

    useDebugValue(`Dark theme is ${darkTheme}`)
    return {
        darkTheme,
        toggleTheme
    };
};

export default useTheme;