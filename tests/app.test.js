const { addToDo, LIST, resetList } = require('../js/app.js');

// Mock de localStorage
const mockLocalStorage = {
    setItem: jest.fn(),
    getItem: jest.fn(() => JSON.stringify([]))
};
global.localStorage = mockLocalStorage;

describe('addToDo', () => {
    test('No guarda tareas vacías ("   ")', () => {
        const result = addToDo("   ", 0, false, false);
        expect(result).toBeNull(); // ✅
    });

    test('Guarda tareas válidas ("Estudiar JS")', () => {
        const result = addToDo("Estudiar JS", 1, false, false);
        expect(result.html).toMatch(/Estudiar JS/i); // ✅
    });
});