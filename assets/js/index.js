window.addEventListener("load", () => {
  const btn = document.querySelector("button");
  let isDays = false;

  if ("serviceWorker" in navigator) {
    try {
      navigator.serviceWorker.register("serviceWorker.js");
      console.log("Service Worker Registered");
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date("June 20, 2020 00:00:00").getTime(),
    x = setInterval(function() {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("weeks").innerText = Math.floor(
          distance / day / 7
        ));

      if (distance < 0) {
        clearInterval(x);
        document.querySelector("#countdown").style.display = "none";
        document.querySelector("#head").textContent = "Freedom!";
      }
    }, second);

  btn.dataset.toggle = "days";

  function toggle() {
    isDays = !isDays;
    document.querySelector("ul").style.setProperty("--isDays", isDays ? 1 : 0);
    btn.dataset.toggle = isDays ? "weeks" : "days";
  }

  btn.addEventListener("click", toggle);
});
