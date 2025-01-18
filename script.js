// script.js
// Saat tombol "Kirim Pesan" ditekan
function showMessage() {
  alert('Terima kasih telah menghubungi saya!');
}
// Ambil tombol toggle
const toggleButton = document.getElementById('darkModeToggle');

// Tambahkan event listener untuk tombol
toggleButton.addEventListener('click', () => {
  // Toggle class 'dark-mode' di elemen body
  document.body.classList.toggle('dark-mode');

  // Ubah teks tombol sesuai mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
});
