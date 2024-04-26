const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");

//when we close the browser aand reopen it - check if there was notes already and show that
const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();
const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let input = document.createElement("p");
  let img = document.createElement("img");
  input.className = "inputBox";
  input.setAttribute("contenteditable", "true");
  img.src = "assets/delete.png";
  notesContainer.appendChild(input);
  input.appendChild(img);
  updateStorage();
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".inputBox");
    notes.forEach((item) => {
      item.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
