var input = null;
var original_image = null;
var blur_image = null;
var rainbow_image = null;
var gray_image = null;
var red_image = null;
var window_pane_image = null;
var canvas = null;
var first_red_filter = true;
var first_gray_filter = true;
var first_window_pane_filter = true;
var first_rainbow_filter = true;
var first_blur_filter = true;

function upload() {
	input = document.getElementById("finput");
	original_image = new SimpleImage(input);
	red_image = new SimpleImage(input);
	gray_image = new SimpleImage(input);
	rainbow_image = new SimpleImage(input);
	blur_image = new SimpleImage(input);
	window_pane_image = new SimpleImage(input);
	canvas = document.getElementById("canvas");
	original_image.drawTo(canvas);
}

function makeGray() {
	if (isLoaded(gray_image) && first_gray_filter) {
		filterGray();
		gray_image.drawTo(canvas);
		return_to_original(gray_image);
	}
}

function makeRed() {
	if (isLoaded(red_image) && first_red_filter) {
		filterRed();
		red_image.drawTo(canvas);
	}
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

function makeBlur() {}

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

function filterWindowPane() {
	for (var pixel of window_pane_image.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		if (y < 15 || y > window_pane_image.getHeight() - 15 || x < 15 || x > window_pane_image.getWidth() -15 || (y > window_pane_image.getHeight()/2 - 5 && y < window_pane_image.getHeight()/2 + 5) || (x > window_pane_image.getWidth()/4 - 5 && x < window_pane_image.getWidth()/4 + 5) || (x > window_pane_image.getWidth()/2 - 5 && x < window_pane_image.getWidth()/2 + 5) || (x > 3 * window_pane_image.getWidth()/4 - 5 && x < 3 * window_pane_image.getWidth()/4 + 5)) {
			pixel.setRed(106);
			pixel.setGreen(65);
			pixel.setBlue(14);
		}
	}
	first_window_pane_filter = false;
}

function filterRainbow() {
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
	first_rainbow_filter = false;
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
		rainbow_image = new SimpleImage(input);
		window_pane_image = new SimpleImage(input);
		first_red_filter = true;
		first_gray_filter = true;
		first_window_pane_filter = true;
		first_rainbow_filter = true;
	}
}
