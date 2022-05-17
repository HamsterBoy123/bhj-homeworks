const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

function selectTab(event) {
	console.log(event.target);
	let target = event.target;

	document.querySelectorAll('.tab').forEach(elem => {
		elem.classList.remove('tab_active');
	});
	document.querySelectorAll('.tab__content').forEach(elem => {
		elem.classList.remove('tab__content_active');
	});

	target.classList.add('tab_active');

	let index = tabs.indexOf(document.querySelector('.tab_active'));
	console.log(index);

	tabsContent[index].classList.add('tab__content_active');
}

tabs.forEach(elem => {
	elem.addEventListener('click', selectTab);
})