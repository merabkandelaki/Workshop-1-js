/* ====== Task 1_1 ======= */
const button2 = document.querySelector(".btn_second");
button2.addEventListener("click", function () {
  let userName = prompt("Enter a username: ");
  userName === "mariam"
    ? document.write(
        `<h3 style='font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:50px; text-align:center; padding-top:50px'>${true}</h3>`
      )
    : document.write(
        `<h3 style='font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:50px; text-align:center; padding-top:50px'>${false}</h3>`
      );
});
