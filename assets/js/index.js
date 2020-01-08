window.addEventListener("load", () => {
  const pWrap = document.querySelector(".progresswrapper");
  const pBar = document.querySelector("progress");
  const pBarP = document.querySelector(".value");

  const start = new Date("August 1 2019"),
    end = new Date("June 23 2020"),
    //today = new Date();

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = end.getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        distance = countDown - now;

      const q = Math.abs(now - start);
      const d = Math.abs(end - start);

      pBar.value = Math.round((q / d) * 100);
      pBarP.innerText = `${((q / d) * 100).toFixed(2)}%`;
      pWrap.style.setProperty("--value", Math.round((q / d) * 100));

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown ul").style.display = "none";
        document.querySelector("h1").textContent = "Freedom!";
      }
    }, second);
});
