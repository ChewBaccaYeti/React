const scrollOnLoad = () => {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
};

export default scrollOnLoad;
