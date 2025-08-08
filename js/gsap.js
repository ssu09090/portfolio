// 기본 값 세팅
  gsap.set(".gsap1 .gsap-img img", { scale: 1, transformOrigin: "50% 50%" });

  // 순차적으로 1) 커지고 2) 다시 작아지는 애니메이션
  gsap.timeline({ repeat: -1, repeatDelay: 0 })
    .to(".gsap1 .gsap-img img", {
      scale: 1.12,              // 커지는 정도
      duration: 0.6,
      ease: "power1.inOut",
      yoyo: true,               // 돌아오기(작아지기)
      repeat: 1,                // 1번 더 반복 = 커졌다가(↑) 작아짐(↓)
      stagger: { each: 0.3 }    // 순차 딜레이
    });