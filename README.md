# Three.js Homepage

3D веб-приложение с использованием Three.js для отображения GLTF моделей.
![forest-and-robot](forest.png)

## Установка и запуск

1. Установите зависимости:
```bash
pnpm install
```

2. Запустите проект:
```bash
pnpm run dev
```

(проверьте что скрипты есть в package.json) если нет -

```bash
npx vite
```

Или добавьте скрипт в package.json и используйте:
3. Откройте браузер и перейдите по адресу: `http://localhost:5173`

## Структура проекта

- `index.html` - основная HTML страница с Three.js сценой
- `main.js` - дополнительный JavaScript файл
- `package.json` - конфигурация проекта и зависимости

## Требования

- Node.js
- Браузер с поддержкой WebGL
- 3D модели в формате GLB/GLTF (если используются)
