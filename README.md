# Фронтенд проекта «Я Помогаю»

## Описание

Проект для волонтерской организации ЯПомогаю. Цель, создать удобное веб-приложение поиска волонтёров для помощи реципиентам. От выгула собак, до помощи людям с ограниченными возможностями.

[Бриф проекта](https://www.notion.so/3-9-4fb37047c4064717973bd79ab22a79b0)

[Сторибук с UI компонентами](https://yapomogayu.github.io/frontend/)

### Технологии

- NodeJS v18.15.0 (build)
- React v18.2
- TypeScript v4.9.5
- React Router v6.11.1

### Визуализация UI компонентов

- Storybook v7

## Установка и запуск в режиме разработки

Должнен быть установлен NodeJS v18.15

1. Клонировать репозиторий

   ```shell
   git clone git@github.com:YaPomogayu/frontend.git
   cd frontend
   ```

2. Установить зависимости

   ```shell
   npm ci
   ```

3. Запустить скрипт

   ```shell
   npm run start
   ```

4. Браузер автоматически откроет новую вкладку с адресом локального сервера http://localhost:3000/

## Сборка для деплоя

1.  Запустить скрипт

    ```shell
    npm run build
    ```

2.  Бандл для переноса на сервер будет собран в папке `build`
