window.onload = () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", function (event) {
		// il preventDefault sull'evento è fondamentale per evitare il refresh della pagina!!!
		event.preventDefault();
		// console.log("ciao");
		const memo = document.getElementById("inputMemo");
		const listaMemo = document.getElementById("listaMemo");
		const mioDiv = document.createElement("div");
		mioDiv.classList.add("memo");
		const mioSpan = document.createElement("span");
		mioSpan.classList.add(
			"d-flex",
			"align-items-center",
			"justify-content-between"
		);
		mioSpan.innerHTML = `${memo.value} <i class="bi bi-x-circle-fill text-danger fs-3 me-4"></i
        >`;
		memo.value = "";

		mioDiv.appendChild(mioSpan);
		listaMemo.appendChild(mioDiv);
	});
};

// const allIcons = document.getElementsByTagName(i);
// allIcons.forEach(element => {
//     element.addEventListener('click', elimina = (e) {

//     })
// });
