const orderBtn = document.querySelector(".btn-primary");
orderBtn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Ordering Feature coming soon!");
});

const date = document.getElementById("year");

function setDate() {
  let text = new Temporal.PlainYearMonth();
}