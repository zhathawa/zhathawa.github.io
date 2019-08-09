/* Timeline JS */
'use strict';

/* Timeline Widget */
const timeline = (function() {
  let title = document.querySelector(".custom-heading");
  let timelineItems = document.querySelectorAll(".timelineItem");

  (function() {
    function checkVisibility(item) {
      let itemInfo = item.getBoundingClientRect();
      if (itemInfo.y + 50 <= window.innerHeight) {
        item.classList.add('fadeIn');
        return;
      }
      // item.style.visibility = 'hidden';
    }

    checkVisibility(title);
    timelineItems.forEach((item, index) => {
      checkVisibility(item);
      index % 2 == 0 ? item.classList.add("left") : item.classList.add("right");
    });
  })();

  return {
    title: title,
    items: timelineItems,
    fadeIn: function(item) {
      // where are we on the page
      let itemInfo = item.getBoundingClientRect();

      // if we're within 200px of the bottom, make us visible
      // if (itemInfo.y + 50 <= window.innerHeight && item.style.visibility != 'visible') {
      if (itemInfo.y + 50 <= window.innerHeight) {
        // item.style.visibility = 'visible';
        item.classList.add("fadeIn");
        item.classList.remove("fadeOut");
      }
    },
    fadeOut: function(item) {
      // where are we on the page
      let itemInfo = item.getBoundingClientRect();

      // if we're within 200px of the bottom, make us visible
      // if (itemInfo.y <= 200 && item.style.visibility == 'visible') {
      if (itemInfo.y <= 100) {
        item.classList.add("fadeOut");
        item.classList.remove("fadeIn");
        // setTimeout(() => item.style.visibility = 'hidden', 10);
      }
    },
    printItems: function() {
      console.dir(timelineItems);
    }
  };
})();

/* Loaded */
document.addEventListener('DOMContentLoaded', () => {

  /* Check when we're on screen */
  document.addEventListener('scroll', () => timeline.fadeIn(timeline.title), false);
  timeline.items.forEach(item => {
    document.addEventListener('scroll', () => timeline.fadeIn(item), false);

    /* Remove fadeOut until more content is on the page */
    // document.addEventListener('scroll', () => timeline.fadeOut(item), false);
  });
});
