import thisWeek from "./pages/weekly";
import tasks from "./pages/tasks";
import priorities from "./pages/priorities";
import project from "./pages/project";
import { Project } from "./project";

const projects = [new Project("Honey Dook list", new Date())];

// todo: add each project in projects to the sidebar

tasks();

var thisWeekButton = document.getElementById("thisWeekButton");
thisWeekButton.onclick = function() {
    thisWeek();
};

var tasksButton = document.getElementById("tasksButton");
tasksButton.onclick = function() {
   tasks();
};

var prioritiesButton = document.getElementById("prioritiesButton");
prioritiesButton.onclick = function() {
    priorities();
};

var addProject = document.getElementById("addProjectButton");
addProject.onclick = function() {
    project(projects);
};