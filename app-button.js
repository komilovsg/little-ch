const showFormBtn = document.querySelector("#showForm");
const showAndHideDiv = document.querySelector("#showAndHide");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const sendMessageBtn = document.querySelector("#sendMessage");
const newEdd = document.querySelector(".Edd");

// sendMessageBtn.onclick = () => {
//   alert ('Спасибо за оставленный отзыв!\nПосле проверки модератором, отзыв\nбудет внесен в список комментариев.\nЭто может занять некоторое время.')
// }





showFormBtn.addEventListener("click", showFrom);


function showFrom() {
  showAndHideDiv.classList.toggle("hidden");
}

sendMessageBtn.addEventListener("click", sendMessage);

function sendMessage() {
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}
