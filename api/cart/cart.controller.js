import { addFilmToCart } from "./cart.service";

export const handleAddToCart = async (filmId, quantity) => {
  try {
    const payload = {
      filmId: filmId,  
      quantity: Number(quantity),  
    };

    console.log("Отправляем в корзину:", payload);

    const result = await addFilmToCart(payload);
    console.log("Added to cart:", result);
  } catch (error) {
    console.error("Add to cart failed:", error);
  }
};
