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

const todoList = document.querySelector('.todo__list');


const add_task = btnAdd;
add_task.addEventListener('click', (e) => {
	//e.preventDefault()
	const titleInput = form.elements["title"];
	const bodyInput = form.elements["body"];
	
	const end_id = taskList[taskList.length - 1].id;
	if (titleInput.value !== "" && bodyInput.value !== ""){
		const obj = {
			id: end_id + 1,
			title: titleInput.value,
			body: bodyInput.value,
			important: false
		};

		taskList.push(obj);
		let t = createTaskItem(obj);
		todoList.insertAdjacentHTML('afterbegin', t);
	}else{
		alert("Заполните все поля");
	}

})

function getTasksList (tasks) {
	const objOfTasks = tasks.reduce((acc, item)=>{
		acc[item.id] = item;
		return acc;
	}, {});
	const arrOfTasks = Object.values(objOfTasks);

	let templateListItem = '';
    
	arrOfTasks.forEach((item)=>{
		templateListItem += createTaskItem(item);
	});
	todoList.insertAdjacentHTML('afterbegin', templateListItem);}

getTasksList(taskList);

function createTaskItem (task) {
	const taskItem = `
    <li style="background-color: ${task.important ? '#58A4B0' : ''}" class="todo__list__item" id="${task.id}i">
        <div class="list__item__desc">
            <h3>${task.title}</h3>
            <p>${task.body}</p>
        </div>
        <div class="list__item__btns">
            <div style="background-color: ${task.important ? '#ED217C' : ''}" class="btns__important" id="${task.id}b">
				<button style="background-color: ${task.important ? '#ED217C' : ''}" type="button" id="${task.id}">
            	    <img src="images/icons8-important-30.png" alt="">
				</button>
            </div>
            <div class="btns__delete">
				<button type="button" id="-${task.id}">
                	<img src="images/icons8-delete-30.png" alt="">
				</button>
            </div>
        </div>
    </li>
    `;
	return taskItem;

}

// Buttons ----------------------------------------------------------------

const objList = taskList.reduce((acc, item)=>{
	acc[item.id] = item;
	return acc;
}, {});

const objKeys = Object.keys(objList);
// Удаление заданию
for (let i = 0; i < objKeys.length; i++) {
	const btnOfKey = document.getElementById("-" + objKeys[i]);
	btnOfKey.addEventListener('click', () => {
		console.log(taskList[i].id + "i");
		const taskToRemove = document.getElementById(taskList[i].id + "i");
		if (taskToRemove) {
			taskToRemove.remove();
			console.log('Элемент успешно удален из DOM.');
		  } else {
			console.log('Элемент не найден.');
		  }
	});
}

// важный или не важный
console.log(objList);
for(let j = 0; j < objKeys.length; j++) {
	const btnImportant = document.getElementById(objKeys[j]);
	console.log(btnImportant);
	btnImportant.addEventListener('click', () => {

		const backgroundColor = window.getComputedStyle(btnImportant).backgroundColor;
		const listImportant = document.getElementById(objKeys[j] + "i");
		const listBlock = document.getElementById(objKeys[j] + "b");

		let colorList = 'rgb(255, 253, 130)';
		let colorButton = 'rgb(255, 255, 255)'

		if (backgroundColor ===  colorButton){
			colorButton = 'rgb(237, 33, 124)';
			colorList = 'rgb(88, 164, 176)'
		}
		btnImportant.style.backgroundColor = colorButton;
		listImportant.style.backgroundColor = colorList;
		listBlock.style.backgroundColor = colorButton;

	})
}

// End buttons ------------------------------------------------------------
