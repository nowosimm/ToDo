import makeHeader from "../components/header";
import makeProjectDiv from "../components/makeProjectDiv";

export default function tasks() {
    // styling
    var content = document.getElementById("content");
    content.replaceChildren();
    var header = makeHeader("All Tasks");
    content.appendChild(header);

    var projects = document.createElement("div");
    projects.id = "contentContainer";
    var projectDiv = makeProjectDiv();
    projects.appendChild(projectDiv);
    content.appendChild(projects);
};

