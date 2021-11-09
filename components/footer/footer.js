function footerComponent(el) {
  const footerEl = document.createElement("div");

  footerEl.innerHTML = `
    <footer class="footer">
      <div class="footer__logo-container">
        <a href="./index.html" class="footer__link-home">
          <img src="./images/LOGOPN.png" alt="Logo" class="footer__logo" />
        </a>
      </div>
      <div class="footer__contact-social-media">
        <div class="footer__social-media-section">
          <img src="./images/instagram.svg" alt="" class="footer__instagram-img" />
          <span class="footer__social-media-name">Instagram</span>
        </div>
        <div class="footer__social-media-section">
          <img src="./images/linkedin.png" alt="" class="footer__linkedin-img" />
          <span class="footer__social-media-name">Linkedin</span>
        </div>
        <div class="footer__social-media-section">
          <a href="https://github.com/Leoalvarez82" target="_blank" class="footer__github-link">
            <img src="./images/github.png" alt="" class="footer__github-img" />
            <span class="footer__social-media-name">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
    `;

  el.appendChild(footerEl);
}
