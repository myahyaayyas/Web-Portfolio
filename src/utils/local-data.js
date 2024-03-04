let project = [
  {
    id: "project-1",
    title: "ReportIn",
    body: `Proyek "ReportIn" merespon eskalasi perjudian online di Indonesia, dengan partisipasi sekitar 2,7 juta orang. Aplikasi ini bertujuan melibatkan masyarakat untuk memberantas perjudian online, menggabungkan penelitian mendalam dan analisis proyek serupa dengan bahasa pemrograman HTML, CSS, dan JavaScript. Desain UI disempurnakan berdasarkan masukan dari mentor dan tim. Learning path mencakup penggunaan alat pengembangan seperti Visual Studio Code, GitHub, dan PostMan. Proyek berhasil meluncurkan aplikasi yang meningkatkan literasi masyarakat, memperkuat keamanan data dan memberikan kontribusi positif dalam masyarakat. Library dan API seperti Prisma, CORS, dotEnv, esLint, nodemon, multer, http-errors, uuid dan JWT`,
    url: "https://silver-licorice-4655b5.netlify.app/",
    image: "../../images/ReportIn.svg",
  },
  {
    id: "project-2",
    title: "Restaurant",
    body: `Proyek PWA Katalog Restoran: Katalog Restoran PWA yang telah dioptimalkan dengan pengujian, termasuk integrasi dan end-to-end, serta optimisasi gambar dan bundel. Pengujian melibatkan tes integrasi dan skenario end-to-end untuk fungsi menyukai dan membatalkan menyukai restoran. Optimalisasi gambar mencakup kompresi gambar, teknik image responsive, dan lazy loading pada gambar daftar restoran. Bundel aplikasi dioptimalkan dengan bundle analyzer dan teknik Code Splitting. JavaScript bersih, Application Shell, Web Manifest, Service Worker, Cache API, IndexedDB, WebSocket, dan Notification. Meningkatkan performa, responsivitas, dan pengalaman pengguna web. Keahlian: Application Programming Interfaces (API) · Deployment · ESLint · Webpack · Responsive Web Design · Web Development · GitHub · Git · JavaScript`,
    url: "https://658948e05778f90008df1700--courageous-dango-5fb828.netlify.app/#/daftar-restaurant",
    image: "../../images/Restaurant.svg",
  },
  {
    id: "project-3",
    title: "Edu Speak",
    body: `Project tim berupa website pelatihan bahasa inggris yang interaktif dengan layanan modul, video, dan quiz. Pembuatan desain prototype, pembuatan website dengan bahasa pemrograman HTML, CSS, dan Javascript, React dan deploy.`,
    url: "https://main--lucky-halva-45f71f.netlify.app/",
    image: "../../images/Eduspeak.svg",
  },
  {
    id: "project-4",
    title: "Personal notes app",
    body: `Membangun note apps yang menggunakan API RESTful, Context, dan Hooks dalam pengembangannya. Aplikasi ini memiliki fitur registrasi, autentikasi, dan manajemen catatan yang memanfaatkan API. Selain itu, aplikasi juga memiliki fitur ubah tema, mengimplementasikan penggunaan Hooks. Terdapat juga kriteria opsional seperti fitur ubah bahasa.`,
    url: "https://main--velvety-moonbeam-24d520.netlify.app/",
    image: "../../images/Personal-notes-app.svg",
  },
  {
    id: "project-4",
    title: "Covid-19 Web",
    body: `Membuat halaman web yang memenuhi kriteria dengan menggunakan konsep semantic HTML dan layout flexbox. Halaman ini memiliki elemen-elemen header, footer, main, article, dan aside. Artikel terkait tema yang dipilih dikelompokkan dalam article, sementara foto dan biodata penulis ditampilkan dalam aside.`,
    url: "https://65d860d3614a40c679bbcfaa--vermillion-maamoul-cc2662.netlify.app/",
    image: "../../images/Site corona.svg",
  },
];

function getAllProject() {
  return project;
}

export { getAllProject };
