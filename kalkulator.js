function hitungKalori() {

  var usia = parseFloat(document.getElementById("usia").value);
  var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);
  var beratBadan = parseFloat(document.getElementById("beratBadan").value);
  var aktivitas = document.getElementById("aktivitas").value;
  var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;

  // Lakukan perhitungan kalori berdasarkan rumus Mifflin St. Jeor
  var kalori;
  if (jenisKelamin === "pria") {
      kalori = (10 * beratBadan) + (6.25 * tinggiBadan) - (5 * usia) + 5;
  } else if (jenisKelamin === "wanita") {
      kalori = (10 * beratBadan) + (6.25 * tinggiBadan) - (5 * usia) - 161;
  }

  // Tambahkan faktor aktivitas
  if (aktivitas === "ringan") {
      kalori *= 1.2;
  } else if (aktivitas === "sedang") {
      kalori *= 1.55;
  } else if (aktivitas === "berat") {
      kalori *= 1.725;
  } else if (aktivitas === "ekstrim") {
      kalori *= 1.9;
  }


  var hasilPopup = document.getElementById("hasilKalori");
  hasilPopup.textContent = "Anda memerlukan sekitar " + kalori.toFixed(2) + " kalori per hari.";
  document.getElementById("hasil").style.display = "block";
}

function closePopup() {
  document.getElementById("hasil").style.display = "none";
}

document.getElementById("kalkulatorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  hitungKalori();
});

document.addEventListener("DOMContentLoaded", function () {
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Gulingkan ke elemen dengan ID yang sesuai saat halaman dimuat
  const targetId = window.location.hash.substring(1);
  if (targetId) {
    scrollToElement(targetId);
  }
  
});


