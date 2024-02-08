// const fs = require("fs");

// const filePath = 'js/todo.json';

// // Чтение JSON-файла
// const jsonData = fs.readFileSync(filePath, {encoding: 'utf8'});
// const data = JSON.parse(jsonData);
// const aaa = data.reduce((acc, item) => {
//     acc[item.id] = item;
//     console.log(item); 
//     return acc;
// }, {});


// Добавление нового объекта в массив
// data.push({
//   "id": 4,
//   "title": "Покупки",
//   "body": "Купить продукты в магазине"
// });

// // Запись обновленных данных в JSON-файл
// const updatedJsonData = JSON.stringify(data, null, 2); // 2 пробела для форматирования
// fs.writeFileSync(filePath, updatedJsonData, 'utf-8');


const taskList = [
    {
		"id" : 1,
		"title" : "Сходить в магазин",
		"body" : "Купить хлеб",
		"important": false
	},
	{
		"id" : 2,
		"title" : "Спорт",
		"body" : "Сходить в  тренажер",
		"important": false
	},
	{
		"id" : 3,
		"title" : "Учеба",
		"body" : "Посетить курс по Swift",
		"important": true
	}
];
// Buttons ----------------------------------------------------------------

const objList = taskList.reduce((acc, item)=>{
	acc[item.id] = item;
	return acc;
}, {});

const keysObj = Object.keys(objList);
console.log(typeof keysObj)
keysObj.forEach(key => {
    console.log(parseInt(key));
})