//html 속에 html 넣기

const includePartials = async () => {
  const hosts = document.querySelectorAll("[data-include]");
  await Promise.all(
    [...hosts].map(async (host) => {
      const url = host.getAttribute("data-include");
      const res = await fetch(url);
      host.innerHTML = await res.text();
    })
  );
};

window.addEventListener("DOMContentLoaded", async () => {
  await includePartials();
  if (window.initGSAP) window.initGSAP();
});
