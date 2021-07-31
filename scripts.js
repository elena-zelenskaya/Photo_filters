var input = null;
var original_image = null;
var blur_image = null;
var rainbow_image = null;
var gray_image = null;
var red_image = null;
var orange_image = null;
var yellow_image = null;
var green_image = null;
var blue_image = null;
var violet_image = null;
var window_pane_image = null;
var canvas = null;
var first_red_filter;
var first_gray_filter;
var first_window_pane_filter;
var first_rainbow_filter;
var first_blur_filter;
var first_orange_filter;
var first_yellow_filter;
var first_green_filter;
var first_blue_filter;
var first_violet_filter;

function setImageSize(image) {
	var p = document.getElementById("image_size");
	p.innerHTML = image.getWidth() + " x " + image.getHeight();
}

function upload() {
	input = document.getElementById("finput");
	original_image = new SimpleImage(input);
	canvas = document.getElementById("canvas");
	setTimeout(function () {
		setImageSize(original_image);
		original_image.drawTo(canvas);
	}, 700);
	red_image = new SimpleImage(input);
	gray_image = new SimpleImage(input);
	rainbow_image = new SimpleImage(input);
	blur_image = new SimpleImage(input);
	window_pane_image = new SimpleImage(input);
	orange_image = new SimpleImage(input);
	yellow_image = new SimpleImage(input);
	green_image = new SimpleImage(input);
	blue_image = new SimpleImage(input);
	violet_image = new SimpleImage(input);
	first_red_filter = true;
	first_gray_filter = true;
	first_window_pane_filter = true;
	first_rainbow_filter = true;
	first_blur_filter = true;
	first_orange_filter = true;
	first_yellow_filter = true;
	first_green_filter = true;
	first_blue_filter = true;
	first_violet_filter = true;
}

function makeGray() {
	if (isLoaded(gray_image) && first_gray_filter) {
		filterGray();
		gray_image.drawTo(canvas);
	}
}

function makeRed() {
	if (isLoaded(red_image) && first_red_filter) {
		filterRed();
		red_image.drawTo(canvas);
	}
}

function makeOrange() {
	if (isLoaded(orange_image) && first_orange_filter) {
		filterOrange();
		orange_image.drawTo(canvas);
	}
}

function makeYellow() {
	if (isLoaded(yellow_image) && first_yellow_filter) {
		filterYellow();
		yellow_image.drawTo(canvas);
	}
}

function makeGreen() {
	if (isLoaded(green_image) && first_green_filter) {
		filterGreen();
		green_image.drawTo(canvas);
	}
}

function makeBlue() {
	if (isLoaded(blue_image) && first_blue_filter) {
		filterBlue();
		blue_image.drawTo(canvas);
	}
}


function makeViolet() {
	if (isLoaded(violet_image) && first_violet_filter) {
		filterViolet();
		violet_image.drawTo(canvas);
	}
}

function makePurple() {
	
}

function makeWindowPane() {
	if (isLoaded(window_pane_image) && first_window_pane_filter) {
		filterWindowPane();
		window_pane_image.drawTo(canvas);
	}
}

function makeRainbow() {
	if (isLoaded(rainbow_image) && first_rainbow_filter) {
		filterRainbow();
		rainbow_image.drawTo(canvas);
	}
}

function makeBlur() {
	if (isLoaded(blur_image) && first_blur_filter) {
		filterBlur();
		blur_image.drawTo(canvas);
	}
}

function filterGray() {
	for (var pixel of gray_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	first_gray_filter = false;
}

function filterRed() {
	for (var pixel of red_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(2 * avg);
			pixel.setGreen(0);
			pixel.setBlue(0);
		} else {
			pixel.setRed(255);
			pixel.setGreen(2 * avg - 255);
			pixel.setBlue(2 * avg - 255);
		}
	}
	first_red_filter = false;
}

function filterOrange() {
	for (var pixel of orange_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(2 * avg);
			pixel.setGreen(0.8 * avg);
			pixel.setBlue(0);
		} else {
			pixel.setRed(255);
			pixel.setGreen(1.2 * avg - 51);
			pixel.setBlue(2 * avg - 255);
		}
	}
	first_orange_filter = false;
}

function filterYellow() {
	for (var pixel of yellow_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(2 * avg);
			pixel.setGreen(2 * avg);
			pixel.setBlue(0);
		} else {
			pixel.setRed(255);
			pixel.setGreen(255);
			pixel.setBlue(2 * avg - 255);
		}
	}
	first_yellow_filter = false;
}

function filterGreen() {
	for (var pixel of green_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(0);
			pixel.setGreen(2 * avg);
			pixel.setBlue(0);
		} else {
			pixel.setRed(2 * avg - 255);
			pixel.setGreen(255);
			pixel.setBlue(2 * avg - 255);
		}
	}
	first_green_filter = false;
}

function filterBlue() {
	for (var pixel of blue_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(2 * avg);
		} else {
			pixel.setRed(2 * avg - 255);
			pixel.setGreen(2 * avg - 255);
			pixel.setBlue(255);
		}
	}
	first_blue_filter = false;
}

function filterViolet() {
	for (var pixel of violet_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(0.8 * avg);
			pixel.setGreen(0);
			pixel.setBlue(2 * avg);
		} else {
			pixel.setRed(1.2 * avg - 51);
			pixel.setGreen(2 * avg - 255);
			pixel.setBlue(255);
		}
	}
	first_violet_filter = false;
}

function filterWindowPane() {
	for (var pixel of window_pane_image.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		if (
			y < 15 ||
			y > window_pane_image.getHeight() - 15 ||
			x < 15 ||
			x > window_pane_image.getWidth() - 15 ||
			(y > window_pane_image.getHeight() / 2 - 5 &&
				y < window_pane_image.getHeight() / 2 + 5) ||
			(x > window_pane_image.getWidth() / 4 - 5 &&
				x < window_pane_image.getWidth() / 4 + 5) ||
			(x > window_pane_image.getWidth() / 2 - 5 &&
				x < window_pane_image.getWidth() / 2 + 5) ||
			(x > (3 * window_pane_image.getWidth()) / 4 - 5 &&
				x < (3 * window_pane_image.getWidth()) / 4 + 5)
		) {
			pixel.setRed(106);
			pixel.setGreen(65);
			pixel.setBlue(14);
		}
	}
	first_window_pane_filter = false;
}

function filterRainbow() {
	var one_seventh = rainbow_image.getHeight() / 7;
	for (var pixel of rainbow_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		var y = pixel.getY();
		if (y < one_seventh) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (y >= one_seventh && y < 2 * one_seventh) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0.8 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(1.2 * avg - 51);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (y >= 2 * one_seventh && y < 3 * one_seventh) {
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (y >= 3 * one_seventh && y < 4 * one_seventh) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else {
				pixel.setRed(2 * avg - 255);
				pixel.setGreen(255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (y >= 4 * one_seventh && y < 5 * one_seventh) {
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else {
				pixel.setRed(2 * avg - 255);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(255);
			}
		} else if (y >= 5 * one_seventh && y < 6 * one_seventh) {
			if (avg < 128) {
				pixel.setRed(0.8 * avg);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else {
				pixel.setRed(1.2 * avg - 51);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(255);
			}
		} else {
			if (avg < 128) {
				pixel.setRed(1.6 * avg);
				pixel.setGreen(0);
				pixel.setBlue(1.6 * avg);
			} else {
				pixel.setRed(0.4 * avg + 153);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(0.4 * avg + 153);
			}
		}
	}
	first_rainbow_filter = false;
}

function filterBlur() {
	var blank_image = new SimpleImage(
		blur_image.getWidth(),
		blur_image.getHeight()
	);
	for (var pixel of blur_image.values()) {
		var random = Math.random();
		if (random < 0.5) {
			blank_image.setPixel(pixel.getX(), pixel.getY(), pixel);
		} else {
			blank_image.setPixel(
				pixel.getX(),
				pixel.getY(),
				nearbyPixel(blur_image, pixel)
			);
		}
	}
	blur_image = blank_image;
	first_blur_filter = false;
}

function nearbyPixel(image, pixel) {
	var x = pixel.getX();
	var y = pixel.getY();
	var random_x = Math.floor(Math.random() * 10) + 1;
	var random_y = Math.floor(Math.random() * 10) + 1;
	var random = Math.random();
	if (random < 0.5) {
		x += random_x;
		y -= random_y;
	} else {
		x -= random_x;
		y += random_y;
	}
	if (x < 0) {
		x = -1 * x;
	}
	if (y < 0) {
		y = -1 * y;
	}
	if (x >= image.getWidth()) {
		x = image.getWidth() - random_x;
	}
	if (y >= image.getHeight()) {
		y = image.getHeight() - random_y;
	}
	pixel = image.getPixel(x, y);
	return pixel;
}

function isLoaded(image) {
	if (image != null && image.complete()) {
		return true;
	} else {
		alert("Image is not loaded");
		return false;
	}
}

function reset() {
	if (isLoaded(original_image)) {
		original_image.drawTo(canvas);
		red_image = new SimpleImage(input);
		gray_image = new SimpleImage(input);
		blur_image = new SimpleImage(input);
		orange_image = new SimpleImage(input);
		yellow_image = new SimpleImage(input);
		green_image = new SimpleImage(input);
		blue_image = new SimpleImage(input);
		violet_image = new SimpleImage(input);
		rainbow_image = new SimpleImage(input);
		window_pane_image = new SimpleImage(input);
		first_red_filter = true;
		first_gray_filter = true;
		first_window_pane_filter = true;
		first_rainbow_filter = true;
		first_blur_filter = true;
		first_orange_filter = true;
		first_yellow_filter = true;
		first_green_filter = true;
		first_blue_filter = true;
		first_violet_filter = true;
	}
}
