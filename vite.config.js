import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Укажите корневую папку вашего приложения
    build: {
        outDir: '../dist', // Выходная папка для построенного приложения
        emptyOutDir: true, // Очистка выходной папки при каждом сборке
    },
    server: {
        port: 3000, // Порт для локального сервера
    },
    plugins: [],
});