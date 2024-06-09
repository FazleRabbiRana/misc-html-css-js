/* -------------------------
 * Common
------------------------- */

// back button
function goBackHome() {
	window.location.href = 'index.html';
}

const backButtonMarkup = `
<div id="back_button_wrapper">
	<button onclick="goBackHome()">
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g class="nc-icon-wrapper"><path d="M13.75 6.019a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.5 0v2.519a.75.75 0 0 1-.75.75Z" data-color="color-2"/><path d="M15.792 5.848 9.446 1.147a.752.752 0 0 0-.893 0L2.208 5.848A1.756 1.756 0 0 0 1.5 7.254v6.496a2.752 2.752 0 0 0 2.75 2.75H5v-5a1.5 1.5 0 0 1 3 0v5h5.75a2.752 2.752 0 0 0 2.75-2.75V7.254c0-.552-.265-1.078-.708-1.406ZM12.25 10.5h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5Z"/></g></svg>
		<span>Home</span>
	</button>
</div>
`;

document.querySelector('body').insertAdjacentHTML('beforeend', backButtonMarkup);

