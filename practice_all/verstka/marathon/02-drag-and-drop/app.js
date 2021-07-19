const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
});

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  if (event.target.getAttribute("data-item") == 1) {
    event.target.classList.add("start");
  }
  if (event.target.getAttribute("data-item") == 2) {
    event.target.classList.add("progress");
  }
  if (event.target.getAttribute("data-item") == 3) {
    event.target.classList.add("done");
  }
}

function dragleave(event) {
  if (event.target.classList.contains("start")) {
    event.target.classList.remove("start");
  }
  if (event.target.classList.contains("progress")) {
    event.target.classList.remove("progress");
  }
  if (event.target.classList.contains("done")) {
    event.target.classList.remove("done");
  }
}

function dragdrop(event) {
  if (event.target.classList.contains("start")) {
    event.target.classList.remove("start");
  }
  if (event.target.classList.contains("progress")) {
    event.target.classList.remove("progress");
  }
  if (event.target.classList.contains("done")) {
    event.target.classList.remove("done");
  }
  event.target.append(item);
}

function dragend(event) {
  event.target.className = "item";
}
