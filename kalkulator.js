function hitungKalori() {
    var loading = document.getElementById("loading");
    var hasilPopup = document.getElementById("hasilKalori");
  
    // Menampilkan animasi loading
    loading.style.display = "block";
  
    var usia = parseFloat(document.getElementById("usia").value);
    var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);
    var beratBadan = parseFloat(document.getElementById("beratBadan").value);
    var aktivitas = document.getElementById("aktivitas").value;
    var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
  
    // Simulasi penundaan untuk efek loading (ganti dengan perhitungan sebenarnya)
    setTimeout(function() {
      // Lakukan perhitungan kalori berdasarkan rumus Mifflin St. Jeor
      var kalori;
      if (jenisKelamin === "pria") {
        kalori = (10 * beratBadan) + (6.25 * tinggiBadan) - (5 * usia) + 5;
      } else if (jenisKelamin === "wanita") {
        kalori = (10 * beratBadan) + (6.25 * tinggiBadan) - (5 * usia) - 161;
      }
  
      // Tambahkan faktor aktivitas
      if (aktivitas === "minimal") {
        kalori *= 1.22;
      } else if (aktivitas == "ringan") {
        kalori *= 1.375;
      } else if (aktivitas === "sedang") {
        kalori *= 1.55;
      } else if (aktivitas === "berat") {
        kalori *= 1.725;
      } else if (aktivitas === "ekstrim") {
        kalori *= 1.9;
      }
  
      // Menampilkan hasil perhitungan
      hasilPopup.textContent = "Anda memerlukan sekitar " + kalori.toFixed(2) + " kalori per hari.";
      loading.style.display = "none";
      document.getElementById("hasil").style.display = "block";
    }, 3000); // Ganti dengan waktu yang sesuai dengan perhitungan sebenarnya
  }
  

function closePopup() {
  document.getElementById("hasil").style.display = "none";
}

document.getElementById("kalkulatorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    hitungKalori();
  });
  


