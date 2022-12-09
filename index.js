const slideOne = document.getElementById("article-one");
const slideTwo = document.getElementById("article-two");
const slideThree = document.getElementById("article-three");
let overalIndex = 0;
const leftClick = () => {
  if (overalIndex == 0) {
    slideOne.setAttribute("data-status", "inactive");
    slideOne.style.transform = "translateX(100%)";

    slideThree.setAttribute("data-status", "active");
    slideThree.style.opacity = "1";
    slideThree.style.transition = "250ms";
    slideThree.style.transitionDelay = "50ms";
    slideThree.style.transform = "translateX(0)";

    slideTwo.style.opacity = "0";
    slideTwo.style.transition = "none";
    slideTwo.style.transform = "translateX(-100%)";
  } else if (overalIndex == 2) {
    slideThree.setAttribute("data-status", "inactive");
    slideThree.style.transform = "translateX(100%)";

    slideTwo.setAttribute("data-status", "active");
    slideTwo.style.opacity = "1";
    slideTwo.style.transition = "250ms";
    slideTwo.style.transitionDelay = "50ms";
    slideTwo.style.transform = "translateX(0)";

    slideOne.style.opacity = "0";
    slideOne.style.transition = "none";
    slideOne.style.transform = "translateX(-100%)";
  } else if (overalIndex == 1) {
    slideTwo.setAttribute("data-status", "inactive");
    slideTwo.style.transform = "translateX(100%)";

    slideOne.setAttribute("data-status", "active");
    slideOne.style.transition = "250ms";
    slideOne.style.transitionDelay = "50ms";
    slideOne.style.opacity = "1";
    slideOne.style.transform = "translateX(0)";

    slideThree.style.opacity = "0";
    slideThree.style.transition = "none";
    slideThree.style.transform = "translateX(-100%)";
  }
  if (overalIndex == 0) {
    overalIndex = 2;
  } else {
    overalIndex--;
  }
};

const rightClick = () => {
  if (overalIndex == 0) {
    slideOne.setAttribute("data-status", "inactive");
    slideOne.style.transform = "translateX(-100%)";

    slideTwo.setAttribute("data-status", "active");
    slideTwo.style.opacity = "1";
    slideTwo.style.transition = "250ms";
    slideTwo.style.transitionDelay = "50ms";
    slideTwo.style.transform = "translateX(0)";

    slideThree.style.opacity = "0";
    slideThree.style.transition = "none";
    slideThree.style.transform = "translateX(100%)";
  } else if (overalIndex == 1) {
    slideTwo.setAttribute("data-status", "inactive");
    slideTwo.style.transform = "translateX(-100%)";

    slideThree.setAttribute("data-status", "active");
    slideThree.style.opacity = "1";
    slideThree.style.transition = "250ms";
    slideThree.style.transitionDelay = "50ms";
    slideThree.style.transform = "translateX(0)";

    slideOne.style.opacity = "0";
    slideOne.style.transition = "none";
    slideOne.style.transform = "translateX(100%)";
  } else if (overalIndex == 2) {
    slideThree.setAttribute("data-status", "inactive");
    slideThree.style.transform = "translateX(-100%)";

    slideOne.setAttribute("data-status", "active");
    slideOne.style.transition = "250ms";
    slideOne.style.transitionDelay = "50ms";
    slideOne.style.opacity = "1";
    slideOne.style.transform = "translateX(0)";

    slideTwo.style.opacity = "0";
    slideTwo.style.transition = "none";
    slideTwo.style.transform = "translateX(100%)";
  }
  if (overalIndex == 2) {
    overalIndex = 0;
  } else {
    overalIndex++;
  }
};
