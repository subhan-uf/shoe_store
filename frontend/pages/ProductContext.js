import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function useProducts() {
    return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);

    // Value to be passed to context consumers
    const value = {
        products,
        setProducts,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
