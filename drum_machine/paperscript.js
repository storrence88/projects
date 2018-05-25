var keyData = {
		q: {
			sound: new Howl({
	  		src: ['sounds/bubbles.mp3']
			}),
		},
		w: {
			sound: new Howl({
	  		src: ['sounds/clay.mp3']
			}),
		},
		e: {
			sound: new Howl({
	  		src: ['sounds/confetti.mp3']
			}),
		},
		r: {
			sound: new Howl({
	  		src: ['sounds/corona.mp3']
			}),
		},
		t: {
			sound: new Howl({
	  		src: ['sounds/dotted-spiral.mp3']
			}),
		},
		y: {
			sound: new Howl({
	  		src: ['sounds/flash-1.mp3']
			}),
		},
		u: {
			sound: new Howl({
	  		src: ['sounds/flash-2.mp3']
			}),
		},
		i: {
			sound: new Howl({
	  		src: ['sounds/flash-3.mp3']
			}),
		},
		o: {
			sound: new Howl({
				src: ['sounds/glimmer.mp3']
			}),
		},
		p: {
			sound: new Howl({
	  		src: ['sounds/moon.mp3']
			}),
		},
		a: {
			sound: new Howl({
	  		src: ['sounds/pinwheel.mp3']
			}),
		},
		s: {
			sound: new Howl({
	  		src: ['sounds/piston-1.mp3']
			}),
		},
		d: {
			sound: new Howl({
	  		src: ['sounds/piston-2.mp3']
			}),
		},
		f: {
			sound: new Howl({
	  		src: ['sounds/prism-1.mp3']
			}),
		},
		g: {
			sound: new Howl({
	  		src: ['sounds/prism-2.mp3']
			}),
		},
		h: {
			sound: new Howl({
	  		src: ['sounds/prism-3.mp3']
			}),
		},
		j: {
			sound: new Howl({
	  		src: ['sounds/splits.mp3']
			}),
		},
		k: {
			sound: new Howl({
	  		src: ['sounds/squiggle.mp3']
			}),
		},
		l: {
			sound: new Howl({
	  		src: ['sounds/strike.mp3']
			}),
		},
		z: {
			sound: new Howl({
	  		src: ['sounds/suspension.mp3']
			}),
		},
		x: {
			sound: new Howl({
	  		src: ['sounds/timer.mp3']
			}),
		},
		c: {
			sound: new Howl({
	  		src: ['sounds/ufo.mp3']
			}),
		},
		v: {
			sound: new Howl({
	  		src: ['sounds/veil.mp3']
			}),
		},
		b: {
			sound: new Howl({
	  		src: ['sounds/wipe.mp3']
			}),
		},
		n: {
			sound: new Howl({
				src: ['sounds/zig-zag.mp3']
			}),
		},
		m: {
			sound: new Howl({
	  		src: ['sounds/moon.mp3']
			}),
		}
	}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomNum() {
		var numbers = ''
		for (var i = 0; i < 1; i++){
			numbers += Math.floor(Math.random() * 6 + 2)
		}
		return numbers;
	}

var shapes = [];

function onKeyDown(event) {
    if(keyData[event.key]){
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	
	
	var randomShape = new Path.RegularPolygon(point, getRandomNum(), 300);
	randomShape.fillColor = getRandomColor();
	keyData[event.key].sound.play();
	

	shapes.push(randomShape);
	}
}

function onFrame(event) {
		for(var i = 0; i < shapes.length; i++){
			shapes[i].fillColor.hue += 3;
			shapes[i].scale(.9);
			if(shapes[i].area < 1){
				shapes[i].remove();
				shapes.splice(i, 1);
			}
		}
	}