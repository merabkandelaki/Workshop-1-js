/* ====== Task 1 ======= */
const button1 = document.querySelector(".btn_first");
button1.addEventListener("click", function () {
  let num = Number(prompt("Enter a number: "));
  num < 50
    ? document.write(
        `<h3 style='font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:50px; text-align:center; padding-top:50px'>${num} is Less than 50</h3>`
      )
    : num > 20
    ? document.write(
        `<h3 style='font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:50px; text-align:center; padding-top:50px'>${num} is more than 20</h3>`
      )
    : document.write("Error");
});
