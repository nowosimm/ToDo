export default function makeHeader(value) {
    var header = document.createElement("div");
    header.textContent = value;
    header.classList.add("header");

    return header;
}