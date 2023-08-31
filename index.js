// Завдання: 1
/**
 * Функція `customSet` створює множину з масиву чисел та рядків, але видаляє всі елементи, які є числами.
 * arr - Масив, з якого створюється множина.
 * Повертаємо - Нову множину, яка містить лише рядкові елементи.
 */
function customSet(arr) {
  let set= new Set(arr);// Створення множини з масиву за допомогою конструктора Set
  for(const el of set){// Перебираємо множину за допомогою 'for of'. Цикл 'for of' дозволяє пройтись по всіх елементах колекції.
  if(typeof(el)==='number'){set.delete(el)}; // Для кожного елемента перевіряємо, чи є цей елемент числом за допомогою оператора typeof
  // Якщо елемент є числом, то видаляємо його з множини за допомогою метода delete
  };
  return set;// Повертаємо нову множину, яка вже не містить числових значень
}
// Приклад використання функції customSet
console.log("Завдання: 1 ==============================");
console.log(customSet([1, "a", 2, "b", 3, "c"]));
// Виведе: Set(3) { 'a', 'b', 'c' }

// Завдання: 2
/**
 * Функція `clearSet` очищає множину.
 * set - Множина, яку потрібно очистити.
 */
function clearSet(set) {
  if(set.size>0){set.clear(set); console.log("Множину очищено"); return set;}// Використання властивості size для перевірки розміру множини, чи більше вона нуля
  else{return set}// Якщо так використання методу clear для очищення множини та повертаємо Множину очищено.
  // Якщо ні повертаємо Множина вже порожня.
}

// Приклад використання функції clearSet
console.log("Завдання: 2 ==============================");

console.log(clearSet(new Set([1, 2, 3])));
// Виведе:
// Множину очищено.

// Завдання: 3
/**
 * Функція `addElements` додає елементи до множини з масиву, якщо вони ще не присутні у множині.
 * mySet - Множина, до якої будуть додані елементи.
 * arr - Масив з елементами, які потрібно додати до множини.
 * Повертаємо - Оновлену множину з новими елементами.
 */
function addElements(mySet, arr) {
  for(let i=0;i<arr.length;i++){mySet.add(arr[i])};// Перебираємо масив та додаємо кожний елемент до множини за допомогою методу add
  return mySet// Метод add додає елемент до множини лише якщо він ще не присутній у множині
  // Повертаємо оновлену множину
}

// Приклад використання функції addElements
console.log("Завдання: 3 ==============================");
console.log(addElements(new Set(["a", "b", "c"]), ["d", "e", "f"]));
// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 4
/**
 * Функція `filterAndAdd` видаляє з множини всі числові елементи та додає до множини унікальні значення з масиву,
 * якщо вони ще не присутні в множині. В результаті отримуємо множину, що містить лише рядкові значення.
 *
 * mySet - Множина, з якої будуть видалені числові елементи.
 * arr - Масив, з якого будуть додані унікальні елементи в множину.
 *
 * Повертаємо - Оновлену множину.
 */
function filterAndAdd(mySet, arr) {
  for(const el of mySet){// Перебираємо множину за допомогою 'for of'. Всередині циклу перевіряємо, чи є поточний елемент числом.
  if(typeof(el)==='number'){mySet.delete(el)};}// Якщо елемент є числом, видаляємо його з множини за допомогою методу delete.
  for(let i=0;i<arr.length;i++){
     mySet=mySet.add(arr[i]);
  }// Тепер множина не містить числових значень. Перебираємо масив та додаємо кожний елемент до множини
    return mySet;// за допомогою методу add. Метод add додає елемент до множини лише якщо він ще не присутній у множині.
  // Повертаємо оновлену множину
}

// Приклад використання функції filterAndAdd
console.log("Завдання: 4 ==============================");
console.log(filterAndAdd(new Set([1, 2, 3, "a", "b", "c"]), ["d", "e", "f"]));
// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 5

/**
 * Функція `checkValueAndType` перевіряє, чи містить множина певне значення та виводить його тип.
 *
 * mySet - Множина, в якій буде проводитися пошук.
 * value - Значення, яке потрібно знайти.
 *
 * Повертаємо - рядок із повідомленням про наявність значення та його тип.
 */
function checkValueAndType(mySet, value) {
 if(mySet.has(value)){// Використовуємо метод has для перевірки, чи містить множина певне значення.
  console.log(`${value}типу ${typeof(value)}`);}// Якщо значення знайдено, повертаємо рядок Множина має значення "${value}" типу "${typeof value}".
  else{console.log(`Множина не має значення${value}`);}// Якщо значення не знайдено, повертаємо рядок Множина не має значення "${value}".
}
// Приклад використання функції checkValueAndType
console.log("Завдання: 5 ==============================");
console.log(checkValueAndType(new Set([1, 2, 3, "a", "b", "c"]), "b"));
// Виведе: Множина має значення "b" типу "string"

// Завдання: 6

/**
 * Функція `setToArray` конвертує множину в масив, видаляє з масиву всі числові елементи
 * та відсортовує рядкові елементи в алфавітному порядку.
 *
 * mySet - Множина, яку треба конвертувати в масив та обробити.
 *
 * Повертаємо - Відсортований масив із рядковими елементами.
 */
function setToArray(mySet) {
  let arr=Array();// Конвертуємо множину в масив за допомогою деструктурізації.
  arr=[...mySet];
 // Використовуємо метод filter для створення нового масиву, що містить лише рядкові елементи.
  const result=arr.filter((word)=>typeof(word)==='string');
  // Використовуємо метод sort для сортування рядкових елементів в алфавітному порядку.
  return result.sort();// Повертаємо оброблений масив.
}

// Приклад використання функції setToArray
console.log("Завдання: 6 ==============================");
console.log(setToArray(new Set([1, 2, 3, "b", "a", "c"])));
// Виведе: ['a', 'b', 'c']

// Завдання: 7

/**
 * Функція `removeDuplicatesInPlace` видаляє дублікати з масиву без створення нового масиву.
 * arr - Масив, з якого потрібно видалити дублікати.
 */
function removeDuplicatesInPlace(arr) {
  let set=new Set();// Створення множини для збереження унікальних елементів
  for(let i=0;i<arr.length;i++){
    if(set.has(arr[i])){delete arr[i]; i++};
    set.add(arr[i]);
  }// Перебір елементів масиву за допомогою циклу for від 0 до довжини масиву
  // Перевірка, чи елемент вже присутній у множині
  // Якщо елемент вже є унікальним, видаляємо його з масиву
  // Зменшуємо лічильник, оскільки масив став коротшим
  // Додаємо унікальний елемент до множини
 return set; // Повертаємо множину
}

// Приклад використання функції removeDuplicatesInPlace
console.log("Завдання: 7 ==============================");

console.log(removeDuplicatesInPlace([1, 2, 2, 3, 3, 4, 5, 5]));
// Виведе: Set(5) { 1, 2, 3, 4, 5 }

// Завдання: 8

/**
 * Функція `areDisjoint` перевіряє, чи є дві множини неспільними (не мають спільних елементів).
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - true, якщо множини не мають спільних елементів, інакше false.
 */
function areDisjoint(set1, set2) {
  let bul=true;
  for(const el1 of set1){// Перебираємо першу множину за допомогою оператору for of
   if(set2.has(el1)){bul=false}// Якщо знайдено спільний елемент з другою множиною,використовуємо метод has, повертаємо false
   };
   return bul;//Якщо немає  спільних елементів повертаємо true
}

// Приклад використання функції areDisjoint
console.log("Завдання: 8 ==============================");
console.log(areDisjoint(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Виведе: false

// Завдання: 9

/**
 * Функція `getDifference` повертає множину, яка містить елементи, що належать першій множині, але не належать другій множині.
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - Множина з елементами, що належать set1, але не належать set2.
 */
function getDifference(set1, set2) {
  let differenceSet=new Set(); // Створення множини differenceSet
  for(const el of set1){if(!(set2.has(el))){differenceSet.add(el)}}// Перебір елементів першої множини за допомогою оператору for of
  return differenceSet;// Якщо елемент не належить другій множині, додаємо його до differenceSet
  // Повертаємо множину differenceSet з різницею елементів
}

// Приклад використання функції getDifference
console.log("Завдання: 9 ==============================");
console.log(getDifference(new Set([1, 2, 3, 4]), new Set([2, 3])));
// Виведе: Set(2) { 1, 4 }

// Завдання: 10

/**
 * Функція `getIntersection` повертає множину, яка містить спільні елементи двох масивів.
 * arr1 - Перший масив.
 * arr2 - Другий масив.
 * Повертаємо - Множина зі спільними елементами.
 */
function getIntersection(arr1, arr2) {
  let set1=new Set(arr1);
  let set2=new Set(arr2);// Створення множин з двох масивів
  let intersectionSet=new Set(); // Створення множини intersectionSet
  for(const el of set1)// Перебір елементів першої множини за допомогою оператору for of
  {if(set2.has(el)){intersectionSet.add(el)}}// Перевірка, чи елемент є спільним у другій множині
  return intersectionSet;// Додавання спільного елементу до множини intersectionSet
  // Повертаємо множину intersectionSet
}

// Приклад використання функції getIntersection
console.log("Завдання: 10 ==============================");
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// Виведе: Set(2) { 3, 4 }

// Завдання: 11

/**
 * Функція `iterateSet` виконує ітерацію по множині та виводить ключі, значення та записи кожного елемента.
 * set - Множина, яку потрібно пройтись.
 */
function iterateSet(set) {
  let iterKey=set.keys();// Використовуємо методу keys для отримання ітератора ключів
  for(const key of iterKey){console.log(key)};// Використовуємо for...of для кожного ключа з ітератора keys
  // Виведення ключа у консоль
  let iterValue=set.values();// Використовуємо методу values для отримання ітератора значень
  for(const value of iterValue){console.log(value)};// Використовуємо for...of для кожного значення з ітератора values
  let entries=set.entries();// Виведення значення у консоль
  for(const entr of entries){console.log(entr)};// Використовуємо методу entries для отримання ітератора записів
  // Використовуємо for...of для кожного запису з ітератора entries
  // Виведення запису у консоль
}

// Приклад використання функції iterateSet
console.log("Завдання: 11 ==============================");
iterateSet(new Set(["a", "b", "c"]));
// Виведе:
// a
// b
// c
// a
// b
// c
// [ 'a', 'a' ]
// [ 'b', 'b' ]
// [ 'c', 'c' ]

// Завдання: 12

/**
 * Функція `sumNumbers` рахує суму всіх числових елементів у множині.
 * set - Множина, у якій потрібно порахувати суму чисел.
 * Повертаємо - Суму числових елементів у множині.
 */
function sumNumbers(set) {
  let sum=0;
  set.forEach((el)=>typeof(el)==='number'?sum+=el:el)// Використання методу forEach для перебору елементів множини
  // Перевірка, чи є елемент числом
  // Додавання числового елемента до суми
  // Повертаємо суму
  return sum;
}

// Приклад використання функції sumNumbers
console.log("Завдання: 12 ==============================");
console.log(
  "Сума чисел у множині:",
  sumNumbers(new Set([1, 2, "a", 3, "b", 4, 5]))
);
// Виведе: Сума чисел у множині: 15
