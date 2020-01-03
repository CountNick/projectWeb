/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var openZoekBalk = document.getElementById('zoekknop');

var nav = document.querySelector('nav');

openZoekBalk.addEventListener('click', function () {

	nav.classList.toggle('dropdown');

});


/*-------------------*/
/*Start Sorteerknop*/
/*-------------------*/


var openSorteerBtn = document.querySelectorAll('button')[3];

var div = document.querySelector('div');

var sorteerForm = document.querySelectorAll('form')[2];

openSorteerBtn.addEventListener('click', function () {

	sorteerForm.classList.toggle('sort');
	sorteerForm.classList.toggle('fadeIn');
	div.classList.toggle('dropdown');


});

/*-------------------*/
/*Einde Sorteerknop*/
/*-------------------*/

/*-------------------*/
/*Start Filterknop*/
/*-------------------*/


var openFilterBtn = document.querySelectorAll('button')[2];

var main = document.querySelector('main');

openFilterBtn.addEventListener('click', function () {

	main.classList.toggle('dropdown');

});

/*-------------------*/
/*Einde Filterknop*/
/*-------------------*/



/*-------------------*/
/*Start Likeknoppen*/
/*-------------------*/

var harten = document.querySelectorAll('article>img:nth-of-type(1)');



harten.forEach(function (like) {
	like.addEventListener('click', function () {

		if (!like.classList.contains('filled')) {
			like.src = "img/icon/likeFilled.png";
			like.classList.add('filled');
		} else {
			like.src = "img/icon/likeOL.png";
			like.classList.remove('filled');
		}
		console.log(like.src);
	});
});

/*-------------------*/
/*Einde Filterknop*/
/*-------------------*/

//https://stackoverflow.com/questions/36924796/change-image-using-event-listener
