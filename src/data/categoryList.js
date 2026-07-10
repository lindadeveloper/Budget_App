import { categoriesData as mockData } from "./categoriesData.js";

export const categoryList = [...new Set(mockData.map((item) => item.category))];
