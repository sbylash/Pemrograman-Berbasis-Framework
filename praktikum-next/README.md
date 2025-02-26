# Pertemuan 3 - Pengenalan Next.js
### Nama: Shasia Sasa Salsabyla
### NIM: 2241720029
### No. Absen: 18
### Kelas: TI 3D

## A. Persiapan Lingkungan
1. Pastikan Node.js dan npm sudah terinstal di komputer Anda. 
2. Buat direktori baru untuk proyek Next.js Anda.
3. Inisialisasi proyek Next.js.Perhatikan bahwa App Router belum digunakan
4. Jalankan aplikasi Next.js. Aplikasi akan terbuka di browser pada alamat http://localhost:3000.

## B. Membuat Halaman dengan Server-Side Rendering (SSR)
1. Buka file pages/index.tsx di text editor Anda.
2. Ganti kode di dalamnya untuk membuat halaman sederhana.
3. Simpan file dan lihat perubahan di browser. Anda akan melihat halaman utama dengan teks "Selamat Datang di Website Saya!".
    <img src="screenshot\1.png">

## C. Menggunakan Static Site Generation (SSG)
1. Buat file baru di direktori pages dengan nama blog.js.
2. Tambahkan kode untuk membuat halaman blog dengan SSG.
3. Simpan file dan buka http://localhost:3000/blog di browser. Anda akan melihat daftar post yang diambil dari API eksternal.
    <img src="screenshot\2.png">

## D. Menggunakan Dynamic Routes
1. Buat direktori baru di pages dengan nama blog.
2. Buat file di dalam direktori blog dengan nama [slug].js.
3. Tambahkan kode untuk membuat halaman dinamis berdasarkan slug.
4. Simpan file dan buka http://localhost:3000/blog/contoh-post di browser. Anda akan melihat halaman yang menampilkan slug dari URL.
    <img src="screenshot\3.png">

## E. Menggunakan API Routes
1. Pastikan terdapat direktori di pages dengan nama api.
2. Buat file di dalam direktori api dengan nama products.js.
3. Tambahkan kode untuk membuat API route yang mengembalikan daftar produk.
4. Buat file baru di pages dengan nama products.js untuk menampilkan daftar produk.
5. Simpan file dan buka http://localhost:3000/products di browser. Anda akan melihat daftar produk yang diambil dari API route.
    <img src="screenshot\4.png">

## F. Menggunakan Link Component
1. Buka file pages/index.tsx dan tambahkan modif untuk membuat link ke halaman lain.
2. Buat file baru di pages dengan nama about.js untuk halaman "Tentang Kami".
3. Simpan file dan buka http://localhost:3000 di browser. Klik link "Tentang Kami" untuk navigasi ke halaman tentang.
    <img src="screenshot\5.png">
    <img src="screenshot\6.png">
## Tugas
1. Buat halaman baru dengan menggunakan Static Site Generation (SSG) yang menampilkan daftar pengguna dari API https://jsonplaceholder.typicode.com/users.
    <img src="screenshot\7.png">

2. Implementasikan Dynamic Routes untuk menampilkan detail pengguna berdasarkan ID.
    <img src="screenshot\8.png">

3. Buat API route yang mengembalikan data cuaca dari API eksternal (misalnya, OpenWeatherMap) dan tampilkan data tersebut di halaman front-end.
    <img src="screenshot\9.png">