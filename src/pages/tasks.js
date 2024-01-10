import makeHeader from "../components/header";

export default function tasks() {

    // styling
    var content = document.getElementById("content");
    content.replaceChildren();
    var header = makeHeader("All Tasks");
    content.appendChild(header);
};

