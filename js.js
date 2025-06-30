document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan modal dan tombol
    const modal = document.getElementById('exampleModal');
    const btn = document.querySelector('button[data-bs-toggle="modal"]');
    const closeBtn = modal.querySelector('.btn-close');

    // Ketika tombol diklik, buka modal
    btn.onclick = function () {
        modal.style.display = 'block';
        modal.classList.add('show');
    }

    // Ketika tombol close diklik, tutup modal
    closeBtn.onclick = function () {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
        }
    }
});