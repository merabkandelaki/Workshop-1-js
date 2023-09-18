/* ====== Task 1_4 ======= */
const button4 = document.querySelector(".btn_fourth");
button4.addEventListener("click", function () {
  let number = Number(prompt("Enter a value: "));
  let value = number.toString();
  document.write(
    `<h3 style='font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; font-size:50px; text-align:center; padding-top:45px'>
    ${typeof number} ${number} is now of type ${typeof value} and it's meaning ${value}
      </h3>`
  );
});
