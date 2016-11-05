window.addEventListener('load', function() {
	var target = document.getElementById('loading_screen_id');
	target.style.display = 'none';
});


function toggle (dom) {
	var target = document.getElementById(dom);

	if (target.style.display != 'block') {
		target.style.display = 'block';
	} else {
		target.style.display = 'none';
	}

}