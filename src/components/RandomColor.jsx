import { useState } from "react"

const RandomColor = () => {
    const [color, setColor] = useState("#3e3e3e")

    const handleCreateRandomHexColor = () => {
        const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        setColor(randomHexColor)
    }

    const handleCreateRandomRgbColor = () => {
        const randomRgbColor = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
        const finalRgbColor = `rgb(${randomRgbColor.join(", ")})`;
        setColor(finalRgbColor);
    };

    const getRandomColor = () => {
        const selectRandomNumber = Math.floor(Math.random() * 2 + 1)
        if (selectRandomNumber === 1) {
            handleCreateRandomRgbColor()
        } else {
            handleCreateRandomHexColor()
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out" style={{ background: color }}>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition duration-300"
                    onClick={handleCreateRandomHexColor}
                >
                    Create HEX Color
                </button>
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition duration-300"
                    onClick={handleCreateRandomRgbColor}
                >
                    Create RGB Color
                </button>
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition duration-300"
                    onClick={getRandomColor}
                >
                    Generate Random Color
                </button>
            </div>
            <div className="mt-6 text-white text-3xl font-bold drop-shadow-lg tracking-wider">
                {color}
            </div>
        </div>
    )
}

export default RandomColor
