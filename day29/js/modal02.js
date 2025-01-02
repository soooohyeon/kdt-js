function openModal() {
  console.log(document.getElementsByClassName('modal-box')[0]);
  document.getElementsByClassName('modal-box')[0].style.display = "flex";
}

function closeModal() {
  document.getElementsByClassName('modal-box')[0].style.display = "none";
}