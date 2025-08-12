import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const ColorPicker = ({ 
  currentShoeIndex, 
  currentColorIndex, 
  onShoeChange, 
  onColorChange, 
  shoesData,
  getColorFromName
}) => {
  const currentShoe = shoesData[currentShoeIndex];
  const currentColor = currentShoe.colors[currentColorIndex];

  const handlePreviousShoe = () => {
    const newIndex = currentShoeIndex === 0 ? shoesData.length - 1 : currentShoeIndex - 1;
    onShoeChange(newIndex, 0); // Reset para primeira cor ao trocar de modelo
  };

  const handleNextShoe = () => {
    const newIndex = currentShoeIndex === shoesData.length - 1 ? 0 : currentShoeIndex + 1;
    onShoeChange(newIndex, 0); // Reset para primeira cor ao trocar de modelo
  };

  const handleColorSelect = (colorIndex) => {
    onColorChange(colorIndex);
  };

  return (
    <div className="flex flex-col justify-center items-center absolute bottom-12 md:bottom-0 left-0 w-full p-4 h-32 z-20 gap-4">
      {/* Navegação entre modelos */}
      <div className="flex items-center gap-4 mb-2">
        <GoChevronLeft 
          className="text-[#ffffff] h-8 w-8 cursor-pointer hover:scale-110 transition-transform" 
          onClick={handlePreviousShoe}
        />

      {/* Seleção de cores */}
      <div className="flex gap-3">
        {currentShoe.colors.map((color, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 focus:outline-none shadow-lg ${
              index === currentColorIndex 
                ? 'border-white scale-110' 
                : 'border-none'
            }`}
            style={{ backgroundColor: getColorFromName(color.name) }}
            onClick={() => handleColorSelect(index)}
            title={color.name}
          />
        ))}
      </div>

        <GoChevronRight 
          className="text-[#ffffff] h-8 w-8 cursor-pointer hover:scale-110 transition-transform" 
          onClick={handleNextShoe}
        />
      </div>


    </div>
  )
}

export default ColorPicker