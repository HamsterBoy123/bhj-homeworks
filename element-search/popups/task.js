const closeButtons = document.querySelectorAll('.modal__close_times');
const showSuccessButton = document.querySelector('.show-success');

const modalMainPopUp = document.getElementById('modal_main');
const modalSuccessPopUp = document.getElementById('modal_success');

showSuccessButton.onclick = function() {
	modalMainPopUp.classList.remove('modal_active');
	modalSuccessPopUp.classList.add('modal_active');
}

for (let i = 0; i < closeButtons.length; i++) {
	closeButtons[i].onclick = function() {
		let modalWindow = this.closest('.modal');
		console.log(modalWindow);
		modalWindow.classList.remove('modal_active');
	}
}