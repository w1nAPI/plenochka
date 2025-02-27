import { FILMS_ENDPOINTS } from "./config";

export const getFilms = async () => {
  try {
    const response = await fetch(FILMS_ENDPOINTS.all);
    if (!response.ok) throw new Error("Ошибка при получении фильмов");
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getFilmById = async (id) => {
  try {
    const response = await fetch(FILMS_ENDPOINTS.byId(id)); // Исправлено здесь
    if (!response.ok) throw new Error(`Ошибка при получении фильма с ID ${id}`);
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getFilmsByCategory = async (category) => {
  try {
    const response = await fetch(FILMS_ENDPOINTS.byCategory(category)); // Исправлено здесь
    if (!response.ok)
      throw new Error(`Ошибка при получении фильмов в категории ${category}`);
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
