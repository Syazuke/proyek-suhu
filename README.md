cara install web nya

yang dibutuhkan
1. node js (install aja di internet)
2. git (ini juga ada di internet)

set up aplikasi
1. git clone https://github.com/Syazuke/proyek-suhu.git
2. cd tugas-lkm
3. npm install
4. npm run dev
5. buka http://localhost:3000/ di browser

sekarang cara push atau pull github 

push = masukin program yang udah di coding ke repository

pull = masukin program terbaru dari repository github ke file yang di coding

pertama-tama

masuk dlu ke direktori di cmd atau terminal dengan perintah --> cd proyek-suhu

contoh : dari awalnya misal 

C:\Users\ASUS> harus jadi C:\Users\ASUS\proyek-suhu>

nah itu tuh pake perintah cd proyek-suhu

 terus untuk konfigurasi awal itu
 1. git config --global user.email emailkalianyangdipakebuatdaftargithub
 2. git config --global user.name usernamegithubkalian

sekarang untuk cara pull (di terminal atau cmd)
1. git pull origin main

sekarang untuk push (di terminal atau cmd)
1. git add .
2. git commit -m "nama commit"
3. git push -u origin main
