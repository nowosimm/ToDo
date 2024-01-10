import makeInput from "../components/makeInput";

export default function project() {
    var inputContainer = document.getElementById("addProject")

    var projectInput = makeInput();
    inputContainer.appendChild(projectInput);
};