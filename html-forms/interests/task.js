const interestCheckBoxes = Array.from(document.querySelectorAll('.interest__check'));

let highestIterestCheckBoxes = [];

interestCheckBoxes.forEach(item => {
	if (!item.closest('.interests_active')) {
		highestIterestCheckBoxes.push(item);
	}
});

highestIterestCheckBoxes.forEach(item => {
	item.addEventListener('change', () => {

		const containerForCheckBoxesGroup = item.closest('.interest');
		const containerInterests = containerForCheckBoxesGroup.querySelector('ul');
		const innerCheckBoxes = Array.from(containerInterests.querySelectorAll('input'));

		innerCheckBoxes.forEach(elem => {
			if (!elem.checked) {
				elem.checked = true;
			} else {
				elem.checked = false;
			}
		})
	})
})