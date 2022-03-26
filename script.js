const dateToday = function () {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.getElementById("counter").innerHTML = date;
};
dateToday();
