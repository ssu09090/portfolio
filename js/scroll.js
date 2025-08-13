//메뉴바 이동시 블러처리
const header = document.querySelector('.header');
  const THRESHOLD = 10;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > THRESHOLD);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

// scrolltop 버튼 기능
const scrollTopBtn = document.querySelector('.scrolltop');

// 스크롤 감지해서 버튼 보이기/숨기기
window.addEventListener('scroll', () => {
  const coverHeight = document.querySelector('.cover').offsetHeight;
  if (window.scrollY > coverHeight) {
    scrollTopBtn.style.display = 'flex'; 
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// 버튼 클릭 시 맨 위로 부드럽게 이동
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});