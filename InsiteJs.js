/*______________Hard coded DATA__________________*/

const MockData = [
  {
    broj: 1,
    imeIPrezime: "Filip Matkovic",
    Oib: "123456789",
    DatumRodjenja: "10.06.1983.",
  },

  {
    broj: 2,
    imeIPrezime: "Luka Josipovic",
    Oib: "123456978",
    DatumRodjenja: "10.06.1983.",
  },

  {
    broj: 3,
    imeIPrezime: "Darko Krofak",
    Oib: "12345",
    DatumRodjenja: "01.01.2001.",
  },

  {
    broj: 4,
    imeIPrezime: "Marko Markovic",
    Oib: "4567",
    DatumRodjenja: "02.02.2001.",
  },

  {
    broj: 5,
    imeIPrezime: "Zarko Zarkovic",
    Oib: "7890",
    DatumRodjenja: "03.03.2001",
  },

  {
    broj: 6,
    imeIPrezime: "Milo Hrnic",
    Oib: "2345",
    DatumRodjenja: "04.04.2001",
  },

  {
    broj: 7,
    imeIPrezime: "Stefan Karlovic",
    Oib: "5732",
    DatumRodjenja: "05.05.2001",
  },

  {
    broj: 8,
    imeIPrezime: "Sara Muric",
    Oib: "9821",
    DatumRodjenja: "06.06.2001",
  },

  {
    broj: 9,
    imeIPrezime: "Ana Kajic",
    Oib: "739201",
    DatumRodjenja: "07.07.2001",
  },

  {
    broj: 10,
    imeIPrezime: "Antun Brkic",
    Oib: "23489994",
    DatumRodjenja: "08.08.2001",
  },
];

/*______________ end of Hard coded DATA__________________*/

let index = 4; //jer vec imam 5 redaka u tablici

//funkcija koja prikazuje informacije o svakoj osobi
function openPopUp(num) {
  let imeIPrezime = MockData[num].imeIPrezime;
  let oib = MockData[num].Oib;
  let datumRod = MockData[num].DatumRodjenja;

  let newWin = window.open("", "popoup", "left=auto,width=350,height=200");
  newWin.document.write(`

<!DOCTYPE html>
<html>
<head>
<title>Insite zadatak</title>
<link rel="stylesheet" href="InsiteCss.css">
<script src="insiteJs.js"></script>

</head>
<body>

<table id="table">
<tr class="row">
  <td class="td" >Ime i prezime</td>
  <td class="td">${imeIPrezime}</td>
</tr>
 
<tr class="row"> 
  <td class="td" >OIB</td>
  <td class="td">${oib}</td>
</tr>

<tr class="row" >
  <td  class="td">Datum Rodjenja</td>
  <td class="td">${datumRod}</td>
</tr>
</table>
<button id="zatvoriBtn" onclick="window.close()">Zatvori</button>

</body>
</html>`);
}

//funkcija za vizualizaciju jos jedne osobe
function moreData() {
  if (index < 10) {
    let broj = MockData[index].broj;
    let imeIPrezime = MockData[index].imeIPrezime;
    let oib = MockData[index].Oib;
    let datumRod = MockData[index].DatumRodjenja;
    let btn = document.createElement("button");
    btn.innerHTML = "Otvori Pop up";
    btn.classList.add("popupBtn");
    btn.onclick = function () {
      openPopUp(broj - 1);
    };

    let table = document.getElementById("table");
    let row = table.insertRow(broj);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = broj;
    cell2.innerHTML = imeIPrezime;
    cell3.innerHTML = oib;
    cell4.innerHTML = datumRod;
    cell5.appendChild(btn);

    row.classList.add("row");
    cell1.classList.add("td");
    cell2.classList.add("td");
    cell3.classList.add("td");
    cell4.classList.add("td");
    cell5.classList.add("td");

    index++;
  } else {
    alert("Nema drugih osoba");
  }
}

//funkcija za vizualizaciju svih osoba
function openAll() {
  let lenght = 10 - index;
  if (index < 10) {
    for (let i = 0; i < lenght; i++) {
      moreData();
    }
  } else {
    alert("Nema drugih osoba");
  }
}
