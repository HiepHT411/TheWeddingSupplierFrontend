	function showRecoverPasswordForm() {
	document.getElementById('recover-password').style.display = 'block';
	document.getElementById('login').style.display='none';
	}

	function hideRecoverPasswordForm() {
	document.getElementById('recover-password').style.display = 'none';
	document.getElementById('login').style.display = 'block';
	}

	if (window.location.hash == '#recover') { showRecoverPasswordForm() }
