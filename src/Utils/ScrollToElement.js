function scrollToElement(id) {
  const projectsSection = document.getElementById(id);
  if (projectsSection) {
    const targetPosition = projectsSection.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Adjust the duration to control the scroll speed
    let startTime;

    const animation = (currentTime) => {
      if (startTime === undefined) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration
      );
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }
};

export default scrollToElement;