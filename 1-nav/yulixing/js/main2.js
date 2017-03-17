const btn = document.getElementsByTagName('button')[0],
 	  toggle = document.getElementsByClassName('nav-toggle')[0],
 	  collaps = document.getElementsByClassName('nav-collaps')[0],
 	  pages = document.getElementsByClassName('page');

btn.onclick = function (e) {

	if (collaps.style.display === 'block') {
		collaps.style.display = 'none';
	} else {
		collaps.style.display = 'block';
	}
	e.stopPropagation();

}

collaps.onclick = function (e) {
	e.stopPropagation();
}


document.onclick = function () {

	if (window.getComputedStyle(toggle).display === 'block') {
		collaps.style.display = 'none';
	}

}

window.onresize = function () {

	if (document.body.clientWidth >= 800) {
		collaps.style.display = 'block';
	}
	
}