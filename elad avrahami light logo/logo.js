gsap.registerPlugin(ScrambleTextPlugin);

const count = 50;
const blurCount = 10;
const stage = document.querySelector(".stage");

for (let i = 0; i < count; i++) {
  setTimeout(() => makeBokeh(i), 50 * i);
}

function makeBokeh(elem) {
  let span = document.createElement("span");
  if (elem < blurCount) {
    span.classList.add("blur");
  }
  stage.appendChild(span);

  gsap.set(span, {
    left: gsap.utils.random(0, stage.offsetWidth),
    top: gsap.utils.random(0, stage.offsetHeight),
    scale: gsap.utils.random(0.6, 1, 0.2),
    opacity: 0
  });

  let tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      span.remove();
      makeBokeh(elem);
    }
  });

  if (elem < blurCount) {
    tl.to(span, {
      opacity: gsap.utils.random(0.1, 0.2),
      duration: 0.3
    });
    tl.to(
      span,
      {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        duration: gsap.utils.random(5, 7, 0.2),
        ease: Power0.easeNone
      },
      -0.3
    );
    tl.to(
      span,
      {
        opacity: 0,
        duration: 0.3
      },
      ">-.3"
    );
  } else {
    tl.to(span, {
      opacity: gsap.utils.random(0.5, 0.7),
      duration: 0.3
    });
    tl.to(
      span,
      {
        x: gsap.utils.random(-40, 40),
        y: gsap.utils.random(-40, 40),
        duration: gsap.utils.random(5, 7, 0.2),
        ease: Power0.easeNone
      },
      -0.3
    );
    tl.to(
      span,
      {
        opacity: 0,
        duration: 0.3
      },
      ">-.3"
    );
  }

  tl.play();
}

gsap.to("#text", 6, {
  delay: 3,
  scrambleText: {
    text: "Elad Avrahami",
    chars: "uppercase"
  }
});
