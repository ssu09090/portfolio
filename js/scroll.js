const header = document.querySelector('.header');
  const THRESHOLD = 10; // 몇 px 스크롤 시 적용할지
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > THRESHOLD);
  onScroll(); // 새로고침 직후 상태 반영
  window.addEventListener('scroll', onScroll, { passive: true });