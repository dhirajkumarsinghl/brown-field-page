const nameEl = document.querySelector(".input-name");

const mailEl = document.querySelector(".input-mail");

const subjectEl = document.querySelector(".input-subject");

const messageEl = document.querySelector(".input-message");

const resetEl = document.querySelector(".reset");

resetEl.addEventListener("click", () => {
  nameEl.value = "";
  mailEl.value = "";
  subjectEl.value = "";
  messageEl.value = "";
});
