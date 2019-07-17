
document.addEventListener('DOMContentLoaded', main);

function main() {
	document.querySelectorAll('.nav-item').forEach(function(lnkItem) {
		lnkItem.onclick = function() {
			activate_link(document.querySelector('.active'), lnkItem);
		};
	});
}

function activate_link(oldLink, newLink) {
	oldLink.classList = 'nav-item';
	newLink.classList = 'nav-item active';
}

function timeline(){
	timelineDiv = document.querySelector('.timeline');
	/*
		1. Grab the timeline div
		2. Loop through each of the child containers
				*
	*/
}

function draw_image() {

}

function draw_line() {

}

function disp_info() {

}
