// script.js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (nama === "") {
    pesanForm.textContent = "Nama wajib diisi.";
  } else if (nama.length < 3) {
    //
    pesanForm.textContent = "Nama minimal harus terdiri dari 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (
    usiaInput === "" ||
    !Number.isInteger(usia) ||
    usia < 17 ||
    usia > 100
  ) {
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
  } else {
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    form.reset();
  }
});

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");
tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }
  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });
  item.append(label, selesai);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});
const tombolHapusSemua = document.getElementById("hapusTugas");
tombolHapusSemua.addEventListener("click", function () {
  daftarTugas.innerHTML = "";
  pesanTugas.textContent = "Semua tugas telah dihapus.";
});

const sesiWorkshop = document.getElementById("sesiWorkshop");
const tampilanSesi = document.getElementById("tampilanSesi");

// 2. Tambahkan event listener 'change'
sesiWorkshop.addEventListener("change", function () {
  // Mengambil nilai (value) dari opsi yang sedang dipilih
  const pilihan = sesiWorkshop.value;

  // Jika pengguna memilih opsi yang valid (bukan opsi kosong)
  if (pilihan !== "") {
    tampilanSesi.textContent = "Sesi yang Anda pilih: " + pilihan;
  } else {
    // Jika pengguna kembali memilih "-- Pilih Sesi --"
    tampilanSesi.textContent = "";
  }
});

const tombolTampilSembunyi = document.getElementById("tombolTampilSembunyi");
const paragrafTarget = document.getElementById("paragrafTarget");

// 2. Pasang event listener click
tombolTampilSembunyi.addEventListener("click", function () {
  // Toggle kelas '.tersembunyi' pada paragraf
  paragrafTarget.classList.toggle("tersembunyi");

  // Opsional: Mengubah teks tombol agar lebih interaktif dan dinamis
  if (paragrafTarget.classList.contains("tersembunyi")) {
    tombolTampilSembunyi.textContent = "Tampilkan Paragraf";
  } else {
    tombolTampilSembunyi.textContent = "Sembunyikan Paragraf";
  }
});
