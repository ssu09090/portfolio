//카카오톡큐알띄우는모달

const kakaoBtn = document.querySelector(".contact-link .kakao");
const dlg = document.getElementById("qr-dialog");

kakaoBtn.addEventListener("click", () => dlg.showModal());
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});
