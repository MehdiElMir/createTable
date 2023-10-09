const etudiants = [
  {
    id: 1,
    fName: "Ahmed",
    lName: "Amrani",
  },
  {
    id: 2,
    fName: "Rachid",
    lName: "Karimi",
  },
  {
    id: 3,
    fName: "Hajar",
    lName: "Tazi",
  },
];

function deleteObj(id) {
  document.getElementById(id).style = "display:none;";
}

function showComponents(id1, id2) {
  const labels = document.getElementsByClassName(id1);
  const btn = document.getElementsByClassName(id2);
  for (let i = 0; i < labels.length; i++) {
    labels[i].style = "visibility:visible;";
    btn[i].style = "display: inline-block;";
  }
}
function hideComponents(id1, id2) {
  const labels = document.getElementsByClassName(id1);
  const btn = document.getElementsByClassName(id2);
  for (let i = 0; i < labels.length; i++) {
    btn[i].style = "display: none;";
    labels[i].style = "visibility:hidden;";
  }
}
function changeStudent(student) {
  const fName = document.getElementById(`fName${student}`).value;
  const lName = document.getElementById(`lName${student}`).value;

  const label1 = document.getElementById(`labelFName${student}`);
  const label2 = document.getElementById(`labelLName${student}`);

  if (fName == "" || lName == "") {
    console.log("boucle");
    document.getElementById(`fName${student}`).style =
      "border: 3px solid red; visibility:visible;";
    document.getElementById(`lName${student}`).style =
      "border: 3px solid red; visibility:visible;";
  } else {
    label1.innerHTML = fName;
    label2.innerHTML = lName;

    const labels = document.getElementsByClassName(`input${student}`);
    const btn = document.getElementsByClassName(`validation${student}`);
    for (let i = 0; i < labels.length; i++) {
      labels[i].value = "";
      btn[i].style = "visibility:hidden;";
      labels[i].style = "visibility:hidden; border: 3px solid #01987a;";
    }
  }

  console.log(fName, lName);

  console.log(student);
}

function createTable() {
  const tbody = document.getElementById("t-body");
  let data = "";

  const lines = etudiants.map(
    (e) => `<tr id="e${e.id}">
                                        <td>
                                            ${e.id}
                                        </td>        
                                        <td>
                                            <div class="cell">
                                                <label for="fName${e.id}" id="labelFName${e.id}">${e.fName}</label>
                                                <input class="input${e.id} input_field" id="fName${e.id}" type="text" name="fName" placeholder="---enter first name"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="cell">
                                                <label for="fName" id="labelLName${e.id}">${e.lName}</label>
                                                <input class="input${e.id} input_field" id="lName${e.id}" type="text" name="fName" placeholder="---enter last name"/>
                                            </div>
                                        </td>
                                        <td>
                                        <div class="cell_btn">
                                            <button class="btn1" onclick=deleteObj('e${e.id}')>
                                            <svg class="icon">
                                                <use xlink:href="sprite.svg#icon-bin"></use>
                                            </svg>
                                            </button>
                                            <button class="btn2" onclick=showComponents('input${e.id}','validation${e.id}')>
                                            <svg class="icon">
                                                <use xlink:href="sprite.svg#icon-pencil"></use>
                                            </svg>
                                            </button>
                                        </div>
                                        <div class="cell_validation">
                                            <button class="btn_validation validation${e.id}" onclick=changeStudent(${e.id})>valider</button>
                                            <button class="btn_validation validation${e.id}" onclick=hideComponents('input${e.id}','validation${e.id}')>annuler</button>
                                        </div>
                                        </td>
                                        </tr>`
  );
  lines.forEach((elem) => (data += elem));
  tbody.innerHTML = data;
}

function search(event) {
  event.preventDefault();
  const val = document.querySelector(".search-input").value;
  console.log(val);
  const resultat = etudiants.filter(
    (etudiant) => etudiant.fName === val || etudiant.lName === val
  );

  const tbody = document.getElementById("t-body");
  let data = "";

  const lines = resultat.map(
    (e) => `<tr id="e${e.id}">
                                        <td>
                                            ${e.id}
                                        </td>        
                                        <td>
                                            <div class="cell">
                                                <label for="fName${e.id}" id="labelFName${e.id}">${e.fName}</label>
                                                <input class="input${e.id} input_field" id="fName${e.id}" type="text" name="fName" placeholder="---enter first name"/>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="cell">
                                                <label for="fName" id="labelLName${e.id}">${e.lName}</label>
                                                <input class="input${e.id} input_field" id="lName${e.id}" type="text" name="fName" placeholder="---enter last name"/>
                                            </div>
                                        </td>
                                        <td>
                                        <div class="cell_btn">
                                            <button class="btn1" onclick=deleteObj('e${e.id}')>
                                            <svg class="icon">
                                                <use xlink:href="sprite.svg#icon-bin"></use>
                                            </svg>
                                            </button>
                                            <button class="btn2" onclick=showComponents('input${e.id}','validation${e.id}')>
                                            <svg class="icon">
                                                <use xlink:href="sprite.svg#icon-pencil"></use>
                                            </svg>
                                            </button>
                                        </div>
                                        <div class="cell_validation">
                                            <button class="btn_validation validation${e.id}" onclick=changeStudent(${e.id})>valider</button>
                                            <button class="btn_validation validation${e.id}" onclick=hideComponents('input${e.id}','validation${e.id}')>annuler</button>
                                        </div>
                                        </td>
                                        </tr>`
  );
  lines.forEach((elem) => (data += elem));

  tbody.innerHTML = data;
}
