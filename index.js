setInterval(() => {
  const date = new Date();
  const hour = document.getElementById("hour");
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  hour.innerHTML = (date.getHours() < 10 ? "0": "") + date.getHours();
  min.innerHTML = (date.getMinutes() < 10 ? "0": "") + date.getMinutes();
  sec.innerHTML = (date.getSeconds() < 10 ? "0": "") + date.getSeconds();
}, 1000);
