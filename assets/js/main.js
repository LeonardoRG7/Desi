// CARROUSEL
const buttonPrev = document.getElementById("button-prev");
const buttonNext = document.getElementById("button-next");
const track = document.getElementById("track");
const slickList = document.getElementById("slick-list");
const slick = document.querySelectorAll(".slick");

const slickwidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left = ""
    ? (leftPosition = track.style.left = 0)
    : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1));

  if (leftPosition < trackWidth - listWidth && value == 2) {
    track.style.left = `${-1 * (leftPosition + slickwidth)}px`;
  } else if (leftPosition > 0 && value == 1) {
    track.style.left = `${-1 * (leftPosition - slickwidth)}px`;
  }
}

// Portfolio
const filter_btns = document.querySelectorAll(".filter-btn");

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});
