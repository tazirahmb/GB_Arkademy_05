function countChar() {
    var text = document.getElementById("tulisan").value;
    var char = document.getElementById("karakter").value;
    var total = 0;
    var hasil = "";

    for(var i = 0; i < text.length; i++) {
        if (text.charAt(i) == char) {
            total += 1
        }
    }

    if (total == 0) {
        hasil = "karakter " + char + " tidak terdapat pada kata tersebut.";
    } else {
        hasil = "jumlah karakter " + char + " pada kata tersebut sebanyak " + total + " buah.";
    }

        document.getElementById("result").innerHTML = hasil;
    }

    document.getElementById("check").addEventListener("click", countChar);