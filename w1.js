const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date");
const time = document.getElementById("time");
const list = document.getElementById("list");

function addList(a, b, c, d) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<th>${a}</th>
    <td>${b}</td>
    <td>${c}</td>
    <td>${d}</td>
    <td> <button>Edit</button> </td>
    <td> <button>XXX</button> </td>
    `;
  return tr;
}

function editFun(a, b, c, d) {
  const tr = document.createElement("tr");
  tr.innerHTML = `<th><input type='text' value=${a}></th>
    <td><input type='email' value=${b}></td>
    <td><input type='date' value=${c}></td>
    <td><input type='time' value=${d}></td>
    <td> <button>Save</button> </td>
    <td> <button>XXX</button> </td>
    `;
  return tr;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const a = name.value;
  const b = email.value;
  const c = date.value;
  const d = time.value;
  if (a === "" || b === "" || c === "" || d === "") {
    alert("Please fill in all required fields before submitting the form.");
  } else {
    const tr = addList(a, b, c, d);
    list.appendChild(tr);
    axios
      .post(
        "https://crudcrud.com/api/a3497299c5604ba19f8e20dccd6dd15a/details",
        {
          name: a,
          email: b,
          date: c,
          time: d,
        }
      )
      .catch((err) => console.error(err));
  }
  document.getElementById("form").reset();
});

/*
  ----------------------Button in Action-----------------
 */
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const td = button.parentNode.parentNode;
    const ul = td.parentNode;
    if (button.textContent === "XXX") {
      ul.removeChild(td);
    } else if (button.textContent === "Edit") {
      const child = td.children;
      const a = child[0].textContent;
      const b = child[1].textContent;
      const c = child[2].textContent;
      const d = child[3].textContent;

      //localStorage.removeItem(y);

      ul.insertBefore(editFun(a, b, c, d), td);
      ul.removeChild(td);
    } else if (button.textContent === "Save") {
      const baby = td.children;
      const u = baby[0].firstElementChild.value;
      const v = baby[1].firstElementChild.value;
      const w = baby[2].firstElementChild.value;
      const x = baby[3].firstElementChild.value;
      ul.insertBefore(addList(u, v, w, x), td);
      ul.removeChild(td);
    }
  }
});
