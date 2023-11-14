const textTransform = document.querySelector('.text-transform');
const textIncrease = document.querySelector('.text-increase');
const increaseContent = document.querySelector('.increase-content');
const dailyContainers = document.querySelectorAll('.increase-content .daily-container');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        textTransform.classList.add('in-view');
        textIncrease.classList.add('in-view');
        increaseContent.classList.add('in-view');
        dailyContainers.forEach((container) => container.classList.add('in-view'));
      } else {
        textTransform.classList.remove('in-view');
        textIncrease.classList.remove('in-view');
        increaseContent.classList.remove('in-view');
        dailyContainers.forEach((container) => container.classList.remove('in-view'));
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(textTransform);
observer.observe(textIncrease);
observer.observe(increaseContent);
