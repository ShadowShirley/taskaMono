import { defineConfig } from 'vite';
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
    root: 'src', // Укажите корневую папку вашего приложения
    build: {
        outDir: '../dist', // Выходная папка для построенного приложения
        emptyOutDir: true, // Очистка выходной папки при каждом сборке
    },
    server: {
        port: 3000, // Порт для локального сервера
    },
    plugins: [viteStaticCopy({
        targets: [
            {
                src: 'assets/font/*', // Путь к вашим шрифтам или другим статическим файлам
                dest: 'assets/font', // Директория в dist, куда файлы должны быть скопированы
            },
            {
                src: 'assets/svg/*', // Путь к вашим шрифтам или другим статическим файлам
                dest: 'assets/svg', // Директория в dist, куда файлы должны быть скопированы
            },
            ],
        }),
    ],
});