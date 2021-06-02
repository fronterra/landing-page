import { useState, useEffect } from "react"

const useDarkMode = (initial) => {
    const [darkMode, setDarkMode] = useState(initial || false);
    const toggleTheme = () => setDarkMode(() => !darkMode);
    const [theme, setTheme] = useState({
        colors: {
            primary: "#3454D1",
            secondary: "#34D1BF",
            accent: "#D1345B",
            background: "#EFEFEF",
            surface: "#070707",
            error: "#B00020"
        },
        fonts: {
            family: "Nunito Sans"
        }
    });

    const updateColorSystem = (darkMode) => {
        const colorSystems = {
            light: {
                primary: "#3454D1",
                secondary: "#34D1BF",
                accent: "#D1345B",
                background: "#EFEFEF",
                surface: "#070707",
                error: "#B00020"
            },
            dark: {
                primary: "#3454D1",
                secondary: "#34D1BF",
                accent: "#D1345B",
                background: "#070707",
                surface: "#EFEFEF",
                error: "#B00020"
            }
        };

        return darkMode ? colorSystems.dark : colorSystems.light;
    };

    const updateTheme = (colorSystem) => {
        setTheme(() => ({
            colors: {
                ...colorSystem
            },
            fonts: {
                family: "Nunito Sans"
            }
        }));
    };


    useEffect(() => {
        const colorSystem = updateColorSystem(darkMode);
        updateTheme(colorSystem);
    }, [darkMode]);

    return [ theme, darkMode, toggleTheme ];
}

export default useDarkMode;