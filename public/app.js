// Targeting Element From Html
let mainContainer = document.getElementById("container");

// Declaring Empty Array
let dataArray = [];

// Function For Adding Task
let data = () => {
  // Getting Input Value
  let input = document.getElementById("input");
  let inpData = input.value;
  input.value = "";

  // Creating a Constructor
  function App(id, userInput, completed) {
    this.id = id;
    this.userInput = userInput;
    this.completed = completed;
  }

  // Passing Arguments in constructor
  let toDoData = new App(dataArray.length, inpData, false);

  // Pushing Data to Array
  dataArray.push(toDoData);

  // Filtering Data Using If Else
  if (inpData === "" || inpData === " ") {
    alert("Please Enter Text");
  } else {
    for (let i = 0; i < dataArray.length; i++) {
      for (let key in dataArray[i]) {
        var div = document.createElement("div"); // Creating a Div
        div.setAttribute("id", dataArray[i].id);
        let ul = document.createElement("ul"); // Creating a Unordered List
        div.setAttribute("class", "div");
        let li = document.createElement("li"); // Making List Items
        li.setAttribute("id", "li-item");
        let liText = document.createTextNode(dataArray[i].userInput);
        var myDiv = document.createElement("div");

        // Creating Del Button
        let delBtn = document.createElement("button");
        let btnText = document.createTextNode("Delete");
        delBtn.setAttribute("id", "del-btn");
        delBtn.setAttribute("onClick", "delBtn(this)");
        delBtn.appendChild(btnText);
        // Creating Edit Button
        let editBtn = document.createElement("button");
        let editText = document.createTextNode("Edit");
        editBtn.setAttribute("id", "edit-btn");
        editBtn.setAttribute("onClick", "editBtn(this)");
        editBtn.appendChild(editText);

        // Creating Complete Button
        let completedBtn = document.createElement("button");
        let completedText = document.createTextNode("Completed");
        completedBtn.setAttribute("id", "comp-btn");
        completedBtn.setAttribute("onClick", "compBtn(this)");
        completedBtn.appendChild(completedText);

        // Appending Elements Into DOM
        li.appendChild(liText);
        myDiv.appendChild(delBtn);
        myDiv.appendChild(editBtn);
        myDiv.appendChild(completedBtn);
        li.appendChild(myDiv);
        ul.appendChild(li);
        div.appendChild(ul);
      }
    }
    mainContainer.appendChild(div);
  }
};

// Creating Delete Button
let delBtn = (del) => {
  del.parentNode.parentNode.remove();
  let updateBtn = document.getElementById("update-Btn");
  updateBtn.style.display = "none";
  let inp = document.getElementById("input");
  inp.value = "";
};

// Creating Edit Button
let editBtn = (edit) => {
  let inp = document.getElementById("input");
  var edit_btn = edit.parentNode.parentNode.firstChild.nodeValue;
  inp.value = edit_btn;
  editId = edit.parentNode.parentNode.parentNode.parentNode.id;
  // Creating Update Button
  let updateBtn = document.getElementById("update-Btn");
  // updateBtn.setAttribute("onClick", "upBtn(this)");
  updateBtn.style.display = "inline-block";
  edit.style.display = "none"
};

// Creating Completed Button
let compBtn = (comp) => {
  comp.style.display = "none";
  comp.previousSibling.style.display = "none";
  comp.previousSibling.previousSibling.style.backgroundColor = "green";
  comp.parentNode.parentNode.style.backgroundColor = "green";
};
var editId;

function update() {
  if (document.getElementById("input").value === "") {
    alert("Please Write Something to Update");
  } else {
    document.getElementById(
      editId
    ).childNodes[0].childNodes[0].firstChild.nodeValue =
      document.getElementById("input").value;
    document.getElementById("update-Btn").style.display = "none";
    document.getElementById("input").value = "";
    document.getElementById("edit-btn").style.display = "flex"
  }
}
