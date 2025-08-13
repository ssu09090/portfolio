//이미지 무한루프

const onReady = (fn) =>
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", fn, { once: true })
    : fn();

const initLooper = (selector, { step = 0.6, pause = 1.4 } = {}) => {
  const track = document.querySelector(selector); 
  if (!track) return () => {};

  const slides = Array.from(track.children);
  if (slides.length < 2) return () => {};

  let playing = true;

  const loopOnce = () => {
    if (!playing) return;
    gsap.to(track, {
      yPercent: -19, 
      duration: step,
      ease: "power2.inOut",
      onComplete: () => {
        track.appendChild(track.firstElementChild);
        gsap.set(track, { yPercent: 0 });
        if (playing) gsap.delayedCall(pause, loopOnce);
      },
    });
  };

  gsap.set(track, { yPercent: 0 });
  gsap.delayedCall(pause, loopOnce);

  return () => {
    playing = false;
    gsap.killTweensOf(track);
    gsap.set(track, { yPercent: 0 });
  };
};

onReady(() => {
  // 데스크탑 프레임
  const stopDesktop = initLooper(".desktop-pic .pic", { step: 1, pause: 2 });
  // 태블릿 프레임
  const stopTablet  = initLooper(".tablet-pic .pic",  { step: 1, pause: 2 });
  // 모바일 프레임
  const stopmobile  = initLooper(".mobile-pic .pic",  { step: 1, pause: 3 });

  // 필요하면 페이지 이동/파기 시 정리:
  window.addEventListener('beforeunload', () => { stopDesktop(); stopTablet(); stopmobile(); });
});