import makeProjectDiv from "./components/makeProjectDiv";

export const projectLibrary = [
];

export class Project {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }
}

export default function addProjectToLibrary() {
    // var content = document.getElementById("contentContainer")
    // var projectDiv = makeProjectDiv();
    // content.appendChild(projectDiv);

    var nameField = document.getElementById("projectInput")

    var newProject = new Project(nameField.value, dateField.value);
    projectLibrary.push(newProject);

    var projectTitle = document.createElement("div");
    projectTitle.textContent = nameField.value;

}

