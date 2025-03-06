import { getFilms, getFilmsByCategory } from "./films.service";

export const fetchFilms = async () => {
  try {
    const data = await getFilms();
    return data;
  } catch (err) {
    console.error("Ошибка загрузки фильмов:", { message: err.message });
    return [];
  }
};

export const fetchFilmsByCategory = async (category) => {
  try {
    const data = await getFilmsByCategory(category);
    return data;
  } catch (err) {
    console.error("Ошибка загрузки фильмов:", { message: err.message });
    return [];
  }
};
