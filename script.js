document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle menu navigasi untuk mobile
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });

    // Tangani form pemesanan
    document.getElementById('jastip-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dikirim secara default

        // Ambil nilai dari setiap input
        const nama = document.querySelector('input[name="nama"]').value;
        const produk = document.querySelector('input[name="produk"]').value;
        const link = document.querySelector('input[name="link"]').value;
        const jumlah = document.querySelector('input[name="jumlah"]').value;
        const catatan = document.querySelector('textarea[name="catatan"]').value;

        // Buat pesan WhatsApp
        const message = `Halo JEJASTIP, saya ingin titip produk:%0A%0A*Nama:* ${nama}%0A*Produk:* ${produk}%0A*Jumlah:* ${jumlah}%0A*Link Produk:* ${link || 'Tidak ada link'}%0A*Catatan:* ${catatan || 'Tidak ada catatan'}`;

        // Ganti nomor telepon dengan nomor WhatsApp Anda (format internasional, tanpa tanda +)
        const phoneNumber = '6282287779321';

        // Buat URL WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Redirect ke WhatsApp
        window.open(whatsappUrl, '_blank');
    });
});
