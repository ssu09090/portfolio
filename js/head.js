//공통 head html 삽입

document.querySelectorAll("[data-include]").forEach(async (el) => {
  const url = el.getAttribute("data-include");
  const target = el.dataset.target || null;
  const html = await fetch(url).then((r) => r.text());

  if (target === "head") {
    document.head.insertAdjacentHTML("beforeend", html);
    el.remove();
  } else {
    el.outerHTML = html;
  }
});
