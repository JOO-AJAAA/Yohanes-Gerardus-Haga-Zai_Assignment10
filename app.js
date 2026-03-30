const routes = {
  "/": () => `
    <div class="row g-4">
      <div class="col-12 col-lg-5">
        <div class="card page-card shadow-sm">
          <div class="card-body">
            <h2 class="h4 mb-2">Home</h2>
            <p class="mb-2">Builder Web</p>
            <p class="mb-0">Membantu membuat aplikasi yang cepat dan interaktif.</p>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-7">
        <div class="card page-card shadow-sm">
          <div class="card-body">
            <h3 class="h5 mb-3">Form Pemesanan Web</h3>

            <form class="row g-3">
              <div class="col-12">
                <label class="form-label">Nama Lengkap</label>
                <input class="form-control" type="text" placeholder="Masukkan nama lengkap" required>
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Email</label>
                <input class="form-control" type="email" placeholder="Masukkan email" required>
              </div>

              <div class="col-12 col-md-6">
                <label class="form-label">Nomor Telepon</label>
                <input class="form-control" type="tel" placeholder="Masukkan nomor telepon" required>
              </div>

              <div class="col-12">
                <label class="form-label">Jenis Website</label>
                <select class="form-select" required>
                  <option value="">-- Pilih Jenis Website --</option>
                  <option value="landing">Landing Page</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="blog">Blog/Website Berita</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="company">Company Profile</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label">Deskripsi Singkat</label>
                <textarea class="form-control" placeholder="Jelaskan kebutuhan website Anda" rows="5" required></textarea>
              </div>

              <div class="col-12 d-flex gap-2">
                <button class="btn btn-primary" type="submit">Pesan Sekarang</button>
                <button class="btn btn-outline-secondary" type="reset">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  "/about": () => `
    <div class="card page-card shadow-sm">
      <div class="card-body">
        <h2 class="h4 mb-2">About</h2>
        <p class="mb-4">Ini adalah halaman tentang website BEST.</p>

        <h3 class="h5 mb-3">Data Diri</h3>
        <div class="table-responsive">
          <table class="table table-bordered align-middle mb-0">
            <tbody>
              <tr>
                <td class="fw-semibold about-key">Nama</td>
                <td>Yohanes Zai</td>
              </tr>
              <tr>
                <td class="fw-semibold about-key">Tempat Lahir</td>
                <td>Marauke</td>
              </tr>
              <tr>
                <td class="fw-semibold about-key">Minat</td>
                <td>AI, Robotika, mikrokontroler, Backend dan sains</td>
              </tr>
              <tr>
                <td class="fw-semibold about-key">Kontak Person</td>
                <td>
                  <ul class="mb-0">
                    <li>WhatsApp: +62 821-9999-8888</li>
                    <li>Email: yohanes@example.com</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  "/map": () => `
    <div class="card page-card shadow-sm">
      <div class="card-body">
        <h2 class="h4 mb-2">Lokasi Kami</h2>
        <p class="mb-3">Silakan cek lokasi kami di Google Maps.</p>
        <div class="ratio ratio-16x9 map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.278214720292!2d98.70265677378096!3d3.6055232963686006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131760bd40af7%3A0x8a5cc4088dc960ab!2sKost%20Graha%20Jaya!5e1!3m2!1sid!2sid!4v1774820318432!5m2!1sid!2sid"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  `,
};

function setActiveNav(pathname) {
  document.querySelectorAll("[data-link]").forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    link.classList.toggle("active", linkPath === pathname);
    link.setAttribute("aria-current", linkPath === pathname ? "page" : "false");
  });
}

function router() {
  const path = window.location.pathname;
  const view = routes[path] || (() => `<h2>404</h2><p>Page not found</p>`);
  document.getElementById("app").innerHTML = view();
  setActiveNav(path);
}

// Navigasi tanpa reload
function navigateTo(url) {
  const nextPath = new URL(url).pathname;
  history.pushState(null, null, nextPath);
  router();
}

// Event klik navbar
document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

// Handle back/forward browser
window.addEventListener("popstate", router);

// Initial load
router();
