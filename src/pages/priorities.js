import makeHeader from "../components/header";

export default function priorities() {

    // styling
    var content = document.getElementById("content");
    content.replaceChildren();
    var header = makeHeader("Priorities");
    content.appendChild(header);
}
