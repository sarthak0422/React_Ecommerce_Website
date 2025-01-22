import { createSlice } from "@reduxjs/toolkit";

// Load initial state from LocalStorage with a fallback
const savedCart = (() => {
    try {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : []; // Parse only if cart exists, fallback to empty array
    } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        return []; // Fallback to empty array in case of errors
    }
})();

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: savedCart, // Ensure `cart` is nested properly
    },
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.cart.find((item) => item.id === action.payload.id);
            if (!itemExists) {
                state.cart.push({ ...action.payload, quantity: 1 });
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
    },
});

// Export Actions and Reducer
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
