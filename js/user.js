/* ====== Task 1_2 ======= */
const button3 = document.querySelector(".btn_third");
button3.addEventListener("click", function () {
  let userName = prompt("Enter a username: ");
  switch (userName) {
    case "mariam":
      document.write(
        `<h3 style='font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:50px; text-align:center; padding-top:50px'>${true}</h3>`
      );
      break;
    default:
      document.write(
        `<h3 style='font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:50px; text-align:center; padding-top:50px'>${false}</h3>`
      );
      break;
  }
});
