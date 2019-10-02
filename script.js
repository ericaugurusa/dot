
document.onkeydown = action;

let dot = document.getElementById("dot");

let x = 0;
let px = x.toString() + 'px'

let y = 0;
let py = y.toString() + 'px'
let size = 100
let newsize = size.toString() + 'px'
function action(event){
	if (event.keyCode == "39"){
		x += 5;
		px = x.toString() + 'px'
		dot.style.marginLeft = `${px}`

		// right restriction
		if (x>(window.innerWidth - 30)){
			x -= 6;
		}
	}

	if (event.keyCode == "37"){
		x -= 5;
		px = x.toString() + 'px'
		dot.style.marginLeft = `${px}`

		// left restriction
		if (x<0){
			x += 6;
		}
	}

	if (event.keyCode == "38"){
		y -= 5;
		py = y.toString() + 'px'
		dot.style.marginTop = `${py}`

		// top restriction
		if (y<-70){
			y += 6;
		}
	}

	if (event.keyCode == "40"){
		y += 5;
		py = y.toString() + 'px'
		dot.style.marginTop = `${py}`
		console.log(y)
		console.log(window.innerHeight)
		if (y> (window.innerHeight - 10)){
			y -= 6;
		}
	}


	if (event.keyCode == '66'){
		// alter size
		size += 10;
		newsize = size.toString() + 'px'
		dot.style.fontSize = `${newsize}`

		// alter x
		x -= 1;
		px = x.toString() + 'px'
		dot.style.marginLeft = `${px}`

		// alter y
		y -= 10;
		py = y.toString() + 'px'
		dot.style.marginTop = `${py}`


	}

	if (event.keyCode == '83'){
		size -= 10;
		x += 10;
		y += 10;
		newsize = size.toString() + 'px'
		dot.style.fontSize = `${newsize}`

		// alter x
		x -= 10;
		px = x.toString() + 'px'
		dot.style.marginLeft = `${px}`

		// alter y
		y += 1;
		py = y.toString() + 'px'
		dot.style.marginTop = `${py}`

	}

	// change color
	if (event.keyCode == '13'){
		document.location.reload()
	}

	if (event.keyCode == '67'){
		dot.style.color = "#"+((1<<24)*Math.random()|0).toString(16)
	}
	
}