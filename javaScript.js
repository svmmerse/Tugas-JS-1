
alert("Selamat Datang");
function displayDetails(){

    var a = document.getElementById("nama_lengkap").value;
    var b = document.getElementById("email").value;

    var tabel = document.getElementById("display");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    if (!a || !b ){
        alert("Data Inputan Kurang / Tidak Terisi Sepenuhnya");
        return
    }

    cell1.innerHTML = a;
    cell2.innerHTML = b;

    alert("DATA ANDA SUDAH MASUK");

}