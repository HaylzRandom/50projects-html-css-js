const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

updateBigCup();

smallCups.forEach((cup, index) => {
	cup.addEventListener('click', () => {
		console.log(index);
		highlightCups(index);
	});
});

function highlightCups(index) {
	if (
		smallCups[index].classList.contains('full') &&
		!smallCups[index].nextElementSibling.classList.contains('full')
	) {
		index--;
	}

	smallCups.forEach((cup, cupIndex) => {
		if (cupIndex <= index) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});

	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups == totalCups) {
		remaining.style.visibility = 'hidden';
		remaining.style.height = 0;
	} else {
		remaining.style.visibility = 'visible';
		litres.innerText = `${2 - (250 * fullCups) / 1000}l`;
	}
}