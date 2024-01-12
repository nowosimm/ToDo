import { Project } from "../project";
import populateSidebar from "./populateSidebar";

export default function makeInput(projects) {
    // input field
    var inputContainer = document.createElement('div');
    inputContainer.id = "addProjectForm";
    var input = document.createElement("input");
    input.classList.add("inputField");
    input.type = "text";
    input.id = "projectInput";
    input.placeholder = "Project Name";
    input.maxLength = "24";
    inputContainer.appendChild(input);

    // add and delete buttons  
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add('inputButtonContainer');
    var addButton = document.createElement("button");
    addButton.onclick = function() {
        // todo: get the value from input
        // projects.push(new Project("DOOKIE WOOKIE", new Date()));
        showProjectButton();
        removeProjectForm();
        populateSidebar();
    };
    addButton.innerHTML = '<i class="fa-solid fa-plus"></i>';
    addButton.classList.add("inputButtons");
    buttonContainer.appendChild(addButton);

    var deleteButton = document.createElement('button');
    deleteButton.onclick = function() {
        showProjectButton();
        removeProjectForm();
    };
    deleteButton.innerHTML = '<i class="fa-solid fa-minus"></i>'
    deleteButton.classList.add("inputButtons");
    buttonContainer.appendChild(deleteButton);

    inputContainer.appendChild(buttonContainer);

    return inputContainer;
};

function showProjectButton() {
    var addProjectButton = document.getElementById("addProjectButton");
    addProjectButton.style = "";
};

function removeProjectForm() {
    var inputContainer = document.getElementById("addProjectForm");
    inputContainer.remove();
};


