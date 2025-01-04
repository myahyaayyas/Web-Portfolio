let project = [
  {
    id: "project-1",
    title: "ReportIn",
    category: "Back-End",
    body: `ReportIn adalah website pelaporan situs - situs berbahaya yang dapat digunakan oleh siapapun, dalam pembuatan website ini saya berperan sebagai Back-End Dev dengan menggunakan Node JS dan PostgrsSQL untuk databasenya. fitur utama dari website ini adalah form pelaporan situs yang akan menyimpan link situs berbahaya, keterangan dari pelapor, bukti berupa image dan username pelapor.`,
    url: "https://silver-licorice-4655b5.netlify.app/",
    image: "../../images/ReportIn.svg",
  },
  {
    id: "project-2",
    title: "Restaurant",
    category: "Front-End",
    body: `Restauran adalah website Front End dengan menggunakan JavaScript dan tailwind serta menggunakan konsep Progressive Web App (PWA) yang responsive, fitur utama website ini adalah katalog rumah makan yang tersimpan pada database yang akan ditampilkan pada halaman utama website dan dapat dilihat secara detail informasi rumah makan tersebut.`,
    url: "https://658948e05778f90008df1700--courageous-dango-5fb828.netlify.app/#/daftar-restaurant",
    image: "../../images/Restaurant.svg",
  },
  {
    id: "project-3",
    title: "Edu Speak",
    category: "Front-End",
    body: `Project tim berupa website pelatihan bahasa inggris yang interaktif dengan layanan modul, video, dan quiz. Pembuatan desain prototype, pembuatan website dengan bahasa pemrograman HTML, CSS, Javascript dan React.`,
    url: "https://main--lucky-halva-45f71f.netlify.app/",
    image: "../../images/Eduspeak.svg",
  },
  {
    id: "project-4",
    title: "Personal notes app",
    category: "Back-End",
    body: `Membangun note apps yang menggunakan API RESTful, Context, dan Hooks dalam pengembangannya. Aplikasi ini memiliki fitur registrasi, autentikasi, dan manajemen catatan yang memanfaatkan API. Selain itu, aplikasi juga memiliki fitur ubah tema, mengimplementasikan penggunaan Hooks. Terdapat juga kriteria opsional seperti fitur ubah bahasa.`,
    url: "https://main--velvety-moonbeam-24d520.netlify.app/",
    image: "../../images/Personal-notes-app.svg",
  },
  {
    id: "project-4",
    title: "Covid-19 Web",
    category: "Front-End",
    body: `Membuat halaman web yang memenuhi kriteria dengan menggunakan konsep semantic HTML dan layout flexbox. Halaman ini memiliki elemen-elemen header, footer, main, article, dan aside. Artikel terkait tema yang dipilih dikelompokkan dalam article, sementara foto dan biodata penulis ditampilkan dalam aside.`,
    url: "https://65d860d3614a40c679bbcfaa--vermillion-maamoul-cc2662.netlify.app/",
    image: "../../images/Site corona.svg",
  },
  {
    id: "project-5",
    title: "Bank Jangkau",
    category: "Back-End",
    body: `Saya berperan sebagai backend developer dalam proyek Jangkau by BCA, sebuah platform perbankan digital berbasis website dan Android yang dirancang untuk meningkatkan aksesibilitas layanan perbankan, terutama bagi penyandang disabilitas seperti mitra netra. Tanggung jawab saya meliputi pengembangan dan integrasi fitur utama, seperti autentikasi pengguna, transaksi perbankan (transfer antar rekening BCA, pembayaran QR Code), serta manajemen mutasi rekening. Saya juga terlibat dalam pengaturan performa sistem agar dapat menangani transaksi secara real-time dengan tingkat keamanan yang tinggi sesuai standar perbankan.
          Teknologi utama yang digunakan: Java Spring Boot, PostgreSQL, dan RESTful API.`,
    url: "https://github.com/myahyaayyas/jangkau",
    image: "../../images/Jangkau.png",
  },
];

function getAllProject() {
  return project;
}

export { getAllProject };
