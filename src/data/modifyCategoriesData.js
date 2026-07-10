import { categoriesData as mockData } from "./categoriesData.js";

const STORAGE_KEY = "categoriesData";

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : mockData; // fall back to mock data first time
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let categoriesData = load();

export function getCategoriesData() {
  return categoriesData;
}

export function addCategoryItem(item) {
  categoriesData.push(item);
  save(categoriesData);
}

export function removeCategoryItem(index) {
  categoriesData.splice(index, 1);
  save(categoriesData);
}

export function resetCategoriesData() {
  localStorage.removeItem(STORAGE_KEY);
  categoriesData = []; // empties all data
  save(categoriesData);
}

export function showExamplesData() {
  localStorage.removeItem(STORAGE_KEY);
  categoriesData = structuredClone(mockData); //to restore mock data
  save(categoriesData);
}
