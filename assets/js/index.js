window.addEventListener("load", () => {
  const pWrap = document.querySelector(".progresswrapper");
  const pBar = document.querySelector("progress");
  const pBarP = document.querySelector(".value");

  const start = new Date(2019, 8, 20),
    end = new Date(2020, 6, 20),
    today = new Date();

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = end.getTime(),
    x = setInterval(function() {
      const q = Math.abs(today - start);
      const d = Math.abs(end - start);

      pBar.value = Math.round((q / d) * 100);
      pBarP.innerText = `${Math.round((q / d) * 100)}%`;
      pWrap.style.setProperty("--value", Math.round((q / d) * 100));

      let now = new Date().getTime(),
        distance = countDown - now;

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
