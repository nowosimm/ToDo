import makeHeader from "../components/header";

export default function thisWeek() {

    // styling
    var content = document.getElementById("content");
    content.replaceChildren();
    var header = makeHeader("This Week");
    content.appendChild(header);
}