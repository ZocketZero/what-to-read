import { useState } from "react"
import { checkDarkFromLocal } from "./CheckTheme"

function ToggleMode() {
    const [isDark, setIsDark] = useState<boolean>(checkDarkFromLocal())
    const [icon, setIcon] = useState<string>(checkDarkFromLocal() ? "🌚" : "🌞")

    function changeMode(): void {
        if (window.document.documentElement.classList.contains("dark")) {
            window.document.documentElement.classList.remove("dark")
            setIcon("🌞")
            setIsDark(false)
        } else {
            window.document.documentElement.classList.add("dark")
            setIcon("🌚")
            setIsDark(true)
        }
    }

    return (
        <div className="absolute top-0 right-0 p-4">
            <button
                className="toggle-btn"
                onClick={changeMode}
                title={isDark ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด"}
                aria-label="toggle dark mode"
            >
                {icon}
            </button>
        </div>
    )
}

export default ToggleMode;