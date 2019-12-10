let bgColor, frColor;
let faktumFont;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	bgColor = color(0, 255, 162);
	frColor = color(32, 56, 52, 100);
	textSize(72);
	smooth();
}

function draw() {
	background(bgColor);
	rotateX(frameCount * 0.001);
	rotateY(frameCount * 0.001);

	// function receives radius, hanf width, segments and mode (dots, lines or planes) 
	mobius(400, 200, 100, 'lines');
	//noLoop();
}

function mobius(r, w, segments, mode) {

	let incrementAngle = TWO_PI / segments;

	if (mode == 'dots') {
		for (t = 0; t < TWO_PI; t += incrementAngle) {
			for (s = -w; s <= w; s += w / 20) {
				let xPos = (r + s * cos(t * 0.5)) * cos(t);
				let yPos = (r + s * cos(t * 0.5)) * sin(t);
				let zPos = s * sin(t * 0.5);
				push();
				translate(xPos, yPos, zPos);
				fill(frColor);
				noStroke();
				sphere(1);
				pop();
			}
		}
	}

	if (mode == 'lines') {
		for (t = 0; t < TWO_PI; t += incrementAngle) {
			s = -w;
			let x1Pos = (r + s * cos(t * 0.5)) * cos(t);
			let y1Pos = (r + s * cos(t * 0.5)) * sin(t);
			let z1Pos = s * sin(t * 0.5);
			s = w;
			let x2Pos = (r + s * cos(t * 0.5)) * cos(t);
			let y2Pos = (r + s * cos(t * 0.5)) * sin(t);
			let z2Pos = s * sin(t * 0.5);

			push();
			noFill();
			stroke(frColor);
			strokeWeight(1);
			line(x1Pos, y1Pos, z1Pos, x2Pos, y2Pos, z2Pos);
			pop();

		}
	}

	if (mode == 'planes') {

		push();
		fill(frColor);
		stroke(bgColor);
		// noStroke();
		// strokeWeight(2);


		for (t = 0; t < TWO_PI; t += incrementAngle) {
			let tt = t + incrementAngle;
			beginShape();
			// get points 1 and 2
			s = -w;
			let x1 = (r + s * cos(t * 0.5)) * cos(t);
			let y1 = (r + s * cos(t * 0.5)) * sin(t);
			let z1 = s * sin(t * 0.5);

			let x2 = (r + s * cos(tt * 0.5)) * cos(tt);
			let y2 = (r + s * cos(tt * 0.5)) * sin(tt);
			let z2 = s * sin(tt * 0.5);

			// get points 3 and 4
			s = w;
			let x3 = (r + s * cos(tt * 0.5)) * cos(tt);
			let y3 = (r + s * cos(tt * 0.5)) * sin(tt);
			let z3 = s * sin(tt * 0.5);

			let x4 = (r + s * cos(t * 0.5)) * cos(t);
			let y4 = (r + s * cos(t * 0.5)) * sin(t);
			let z4 = s * sin(t * 0.5);

			vertex(x1, y1, z1);
			vertex(x2, y2, z2);
			vertex(x3, y3, z3);
			vertex(x4, y4, z4);
			endShape();
		}
		pop();
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function keyTyped() {
	if (key === 'd') {
		saveCanvas('canvas-screenshot', 'png');
	}
}