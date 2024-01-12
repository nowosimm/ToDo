export default function populateSidebar () {
    // sidebar entry
    var userEntryField = document.getElementById("userProjectContainer");
    var addUserEntry = document.createElement("button");
    addUserEntry.classList.add("button");
    addUserEntry.textContent = "Insert Project Name";
    userEntryField.appendChild(addUserEntry);
};