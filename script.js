const mylist = document.getElementById("Mylist");
var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sun", "Mon", "Tus", "Wed", "Thus", "Fri", "Sat"];
document.getElementById("Date").innerHTML = `
                                                ${months[date.getMonth()]} / 
                                                ${date.getDate()} / 
                                                ${date.getFullYear()}<br>
                                                ${days[date.getDay()]} `;



var i = 1;

function InputTodolist() {
    let Userinput = document.getElementById("InputTodo").value;
    i++;
    let li = document.createElement("li");
    li.innerHTML = `  
     <li class="ToBeDo list-group-item" id= "${i}">
        ${Userinput}
    <button class="btn btn-success m-1" type="submit" onclick="Donework(${i})">Done</button>
    <button class="btn btn-danger m-1" type="submit" job="Delete" onclick="DeleteTODO(${i})">Delete</button>

</li>

    `

    mylist.appendChild(li);
    Userinput.value = "";

}

function Donework(v) {
    let li = document.getElementById(`${v}`);
    li.style.textDecoration = "line-through";
}

function DeleteTODO(v) {
    let li = document.getElementById(`${v}`);
    li.remove();
}
