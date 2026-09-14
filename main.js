


setInterval(() => {
	const t = "horse is ".repeat(100).split("").map(x => Math.random() > 0.3 ? x : x.toUpperCase()).join("")
	document.title = t
}, 10)