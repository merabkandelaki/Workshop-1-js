/* ====== Task 1_3 ======= */
const button5 = document.querySelector(".btn_fifth");
button5.addEventListener("click", function () {
  let el = document.querySelector(".content");
  let elTextContent = el.value;
  let a = isNaN(elTextContent);

  !a
    ? console.log(typeof Number(elTextContent))
    : console.log(typeof elTextContent);
});
