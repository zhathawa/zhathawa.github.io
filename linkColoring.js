
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
