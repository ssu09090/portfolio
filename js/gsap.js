window.initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger);

  // cover - 순차적으로 커지고 작아지는 애니메이션
  gsap.set(".cover .cover-bg-img img", {
    scale: 1,
    transformOrigin: "50% 50%",
  });

  gsap.timeline({ repeat: -1, repeatDelay: 0 }).to(".cover .cover-bg-img img", {
    scale: 1.1,
    duration: 0.6,
    ease: "power1.inOut",
    yoyo: true,
    repeat: 1,
    stagger: { each: 0.3 },
  });

  // .about-me page2 - 스크롤 시 하나씩 올라오기
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
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  // .keywords page3- 스크롤 시 하나씩 올라오기
  gsap.set(
    ".keywords div h2, .keywords .keywords-wrap p, .keywords .intro-ment",
    {
      autoAlpha: 0,
      y: 30,
    }
  );

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
    duration: 0.2,
    ease: "power2.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".keywords .keywords-wrap",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".keywords .intro-ment", {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".keywords .intro-ment",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  //skills page4
  const mm = gsap.matchMedia();

  //그리드 - 올라오기
  mm.add("(max-width: 1439px)", () => {
    const grid = document.querySelector(".skills .skills-grid");
    if (!grid) return;

    const track = grid.querySelector(".skills-track");
    if (track) {
      track.querySelectorAll(".is-clone").forEach((el) => el.remove());
      [...track.children].forEach((li) => grid.appendChild(li));
      track.remove();
    }

    gsap.set(".skills h1, .skills .skills-grid li", { autoAlpha: 0, y: 30 });

    const tl1 = gsap.to(".skills h1", {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const tl2 = gsap.to(".skills .skills-grid li", {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".skills .skills-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tl1.kill();
      tl2.kill();
    };
  });

  //데스크톱 - 가로로 흐르기
  mm.add("(min-width: 1440px)", () => {
    const grid = document.querySelector(".skills .skills-grid");
    if (!grid) return;

    let track = grid.querySelector(".skills-track");
    if (!track) {
      track = document.createElement("div");
      track.className = "skills-track";
      const originals = [...grid.children];
      originals.forEach((li) => track.appendChild(li));
      grid.appendChild(track);
      originals.forEach((li) => {
        const clone = li.cloneNode(true);
        clone.classList.add("is-clone");
        track.appendChild(clone);
      });
    }
    gsap.set(".skills .skills-track > *", { autoAlpha: 1, y: 0 });

    const GAP = 24;
    const originalsCount = track.children.length / 2;
    const totalWidth = [...track.children]
      .slice(0, originalsCount)
      .reduce((sum, el) => sum + el.getBoundingClientRect().width + GAP, 0);

    const marquee = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 15,
        ease: "none",
        repeat: -1,
      }
    );
    return () => {
      marquee.kill();
    };
  });

  //projects page5
  // gsap.utils
  //   .toArray(".projects .project-list .project-item")
  //   .forEach((item) => {
  //     gsap.fromTo(
  //       item,
  //       { opacity: 0, x: 100 }, // 시작 상태
  //       {
  //         opacity: 1,
  //         x: 0,
  //         duration: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 80%", // 화면 80% 지점에서 시작
  //           toggleActions: "play none none reverse", // 스크롤 위로 가면 다시 사라짐
  //           markers: true,
  //         },
  //       }
  //     );
  //   });

  //about 영역을 가로로 스크롤 되게 처리
  const $projectWrap = document.querySelector(".projects .projects-list");
  const scrollWidth = $projectWrap.scrollWidth - window.innerWidth;
  const horizonScroll = gsap.to($projectWrap, {
    x: -scrollWidth,
    duration: 1,
    scrollTrigger: {
      trigger: ".projects",
      start: "top top",
      end: "+=" + scrollWidth,
      pin: true,
      scrub: true,
      markers: true,
    },
  });

  //이거 건들지 말기
  ScrollTrigger.refresh();
};
