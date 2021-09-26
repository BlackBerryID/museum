const styles = [
  "font-size: 30px; color: rgb(2, 120, 151); text-decoration: underline;",
  "font-size: 14px; color: rgb(2, 120, 151);",
  "font-size: 14px; color: #fff; background-color: #8AB4F8; border-radius: 35%; padding: 2px;",
  "font-size: 12px; color: rgb(2, 120, 151);",
];

console.log("%cСамооценка", styles[0]);
console.log("%c1. Вёрстка валидная %c+10", styles[1], styles[2]);
console.log("%c2. Вёрстка семантическая %c+24", styles[1], styles[2]);
console.log(
  "%cheader, main, footer. Более семи элементов section. Только один заголовок h1. Более семи заголовков h2. Шесть заголовков h3. Два элемента nav. 3 списка ul. Более тринадцати кнопок button. 3 тега input type='radio'. Более двех тегов input type='number'. 2 тега input type='range'. У всех элементов img указан обязательный атрибут alt. ",
  styles[3]
);
console.log("%c3. Вёрстка соответствует макету %c+45", styles[1], styles[2]);
console.log("%c4. Форма покупки билетов %c+22", styles[1], styles[2]);
console.log(
  "%cФорма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей. Форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay. При вёрстке формы используются следующие элементы: form, input type='date', input type='time', input type='text', input type='email', input type='tel', input type='number', select. Вёрстка формы соответствует макету.",
  styles[3]
);
console.log("%c5. Требования к css %c+18", styles[1], styles[2]);
console.log(
  "%cДобавлен favicon. Для построения сетки используются флексы или гриды. При уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону. Фоновый цвет каждого блока и секции тянется на всю ширину страницы. Иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing. Переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка. В блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel. В футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css.",
  styles[3]
);
console.log(
  "%c6. Интерактивность, реализуемая через css %c+25",
  styles[1],
  styles[2]
);
console.log(
  "%cПлавная прокрутка по якорям. Параллакс. При кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницу сайта при помощи iframe. Изменение стиля интерактивных элементов при наведении и клике.",
  styles[3]
);
console.log(
  "%c7. Интерактивность, реализуемая через js %c+16",
  styles[1],
  styles[2]
);
console.log(
  "%cМожно передвигать ползунки громкости и прогресс-бар видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету. кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20. Кнопке 'Book' в форме покупки билетов добавлен ripple-эффект. При перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке.",
  styles[3]
);

console.log("%cИтого: 160/160", styles[0]);
console.log(
  "%cНадеюсь вам понравилось моя работа. Буду рад видеть ваши замечания и предложения по улучшению в дискорд BlackBerryID #3277. Хорошего дня!",
  styles[3]
);