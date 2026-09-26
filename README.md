# GoIT JS Homework 08 - Image Gallery & Modal Window
JavaScript homework assignment for the GoIT course (Module 8). Topic: creating a dynamic image gallery, event delegation, handling default behavior, and integrating the external modal library `basicLightbox`.

**What was done:**
- Set up the repository `goit-js-hw-08` and configured the project structure (`index.html` and `gallery.js`)
- **Gallery Markup & Rendering:** Dynamically generated and inserted gallery card elements into `ul.gallery` using the `images` dataset, template literals, and a single DOM injection operation
- **Event Delegation & Default Behavior:** Implemented event delegation on the gallery container to listen for clicks on image items, preventing the default browser behavior of opening or downloading links via `e.preventDefault()`
- **Modal Window Integration (`basicLightbox`):** Connected the `basicLightbox` library via CDN, enabling interactive full-size image previews by retrieving the high-resolution source from the `data-source` attribute
- **Keyboard Controls & UX:** Added functionality to safely open and close modal views, including handling the `Escape` key press event exclusively while the modal window is active
- Verified code formatting with Prettier and ensured zero errors or warnings in the browser console across all tasks via GitHub Pages

---

# Домашнє завдання 08 GoIT JS — Галерея зображень та модальне вікно
Практичне завдання з курсу JavaScript від GoIT (Module 8). Тема: створення динамічної галереї зображень, делегування подій, скасування поведінки за замовчуванням та інтеграція зовнішньої бібліотеки модальних вікон `basicLightbox`.

**Що зроблено:**
- Створено репозиторій `goit-js-hw-08` та налаштовано структуру проєкту (`index.html` та `gallery.js`)
- **Розмітка та рендеринг галереї:** Динамічно створено картки зображень на основі масиву `images` із використанням шаблонних рядків та додано їх до `ul.gallery` за одну операцію
- **Делегування подій та скасування поведінки:** Налаштовано слухач подій із використанням прийому делегування на контейнері галереї та скасовано стандартну поведінку посилань за допомогою `e.preventDefault()`
- **Інтеграція модального вікна (`basicLightbox`):** Підключено бібліотеку `basicLightbox` через CDN для перегляду повнорозмірних копій фото з динамічною підстановкою посилань з `data-source` атрибута
- **Керування з клавіатури:** Реалізовано відкриття та закриття модального вікна з підтримкою клавіші `Escape`, із прослуховуванням подій клавіатури лише під час активного стану модалки
- Перевірено форматування коду за допомогою Prettier, а також відсутність будь-яких помилок чи попереджень у консолі на живій сторінці GitHub Pages
