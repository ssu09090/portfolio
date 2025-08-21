    const scrollTopBtn = document.querySelector(".scrolltop");
    const homeBtn = document.querySelector(".home-btn");
    const backBtn = document.querySelector(".back-btn");
    const cover = document.querySelector(".detail-cover");

    const OPEN_HOME_IN_NEW_TAB = false;
    const HOME_URL = "../index.html";

    const threshold = () => (cover ? cover.offsetHeight : 300);

    const toggleBtns = () => {
      const show = window.scrollY > threshold();
      [scrollTopBtn, homeBtn].forEach((btn) => {
        if (btn) btn.style.display = show ? "flex" : "none";
      });
    };

    window.addEventListener("load", toggleBtns);
    window.addEventListener("scroll", toggleBtns, { passive: true });

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (homeBtn) {
      homeBtn.addEventListener("click", () => {
        if (OPEN_HOME_IN_NEW_TAB) {
          window.open(HOME_URL, "noopener,noreferrer");
        } else {
          window.location.href = HOME_URL;
        }
      });
    }

    if (backBtn) {
      backBtn.addEventListener("click", () => {
        if (OPEN_HOME_IN_NEW_TAB) {
          window.open(HOME_URL, "noopener,noreferrer");
        } else {
          window.location.href = HOME_URL;
        }
      });
    }