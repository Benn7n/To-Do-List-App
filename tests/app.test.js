// Importa las funciones a probar
import { validarInput } from './app.js';

// Prueba 1: Input válido
test("Acepta input con texto real", () => {
  expect(validarInput("Hacer ejercicio")).toBe(true);
});

// Prueba 2: Input vacío
test("Rechaza input con espacios", () => {
  expect(validarInput("   ")).toBe(false);
});