import React from 'react'
import { toast } from 'react-toastify'

const addToCartButton = () => {
    const handleAddToCart = () => {
        toast.success('Produto adicionado ao carrinho!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <button 
            className="z-50 flex justify-center items-center absolute bottom-0 right-0 w-70 p-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
            onClick={handleAddToCart}
        >
            <p className="text-white text-md font-medium tracking-widest">ADICIONAR AO CARRINHO</p>
        </button>
    )
}

export default addToCartButton