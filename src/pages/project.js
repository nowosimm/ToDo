import makeInput from "../components/makeInput";

export default function project(projects) {
    var inputContainer = document.getElementById("addProject");
    var addProjectButton = document.getElementById("addProjectButton");
    addProjectButton.style = "display: none";

    console.log(projects)

    var projectInput = makeInput(projects);
    inputContainer.appendChild(projectInput);
};