const modalPopup = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const bookForm = modalPopup.querySelector(".form");
const bookIn = bookForm.querySelector("[name=chek-in]");
const bookOut = bookForm.querySelector("[name=chek-out]");

modalPopup.classList.add("modal-hide");

modalButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalPopup.classList.toggle("modal-show");
	modalPopup.classList.toggle("modal-hide");
});

bookForm.addEventListener("submit", function (evt) {
	if (!bookIn.value || !bookOut.value) {
	evt.preventDefault();
	modalPopup.classList.remove("modal-error");
	modalPopup.offsetWidth = modalPopup.offsetWidth;
	modalPopup.classList.add("modal-error");
	} 
});