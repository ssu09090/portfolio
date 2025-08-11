gsap.registerPlugin(ScrollTrigger);

gsap.set(".gsap1 .gsap-img img", { scale: 1, transformOrigin: "50% 50%" });

// cover - 순차적으로 커지고 작아지는 애니메이션
gsap.timeline({ repeat: -1, repeatDelay: 0 }).to(".gsap1 .gsap-img img", {
  scale: 1.1,
  duration: 0.6,
  ease: "power1.inOut",
  yoyo: true,
  repeat: 1,
  stagger: { each: 0.3 },
});

// page 1 - 스크롤 시 하나씩 올라오기
gsap.set(".about-me h1, .about-me .profile, .about-me .resume", {
  autoAlpha: 0,
  y: 30,
});

gsap.to(".about-me h1", {
  autoAlpha: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-me",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".about-me .profile", {
  autoAlpha: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-me .profile",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".about-me .resume", {
  autoAlpha: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-me .profile",
    start: "top 50%",
    toggleActions: "play none none reverse",
  },
});

// page 2 - 스크롤 시 하나씩 올라오기
gsap.set(".keywords div h2, .keywords .keywords-wrap p, .keywords .introduction", {
  autoAlpha: 0,
  y: 30,
});

gsap.to(".keywords div h2", {
  autoAlpha: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".keywords div h2",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".keywords .keywords-wrap p", {
  autoAlpha: 1,
  y: 0,
  duration: 0.45,
  ease: "power2.out",
  stagger: 0.12,
  scrollTrigger: {
    trigger: ".keywords .keywords-wrap",
    start: "top 80%",
    toggleActions: "play none none reverse",
  }
});

gsap.to(".keywords .introduction", {
  autoAlpha: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".keywords .introduction",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});
