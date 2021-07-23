var input = null;
var original_image = null;
var blur_image = null;
var rainbow_image = null;
var gray_image = null;
var red_image = null;
var canvas = null;
var first_red_filter = true;
var first_gray_filter = true;

function upload() {
	input = document.getElementById("finput");
	original_image = new SimpleImage(input);
	red_image = new SimpleImage(input);
	gray_image = new SimpleImage(input);
	rainbow_image = new SimpleImage(input);
	blur_image = new SimpleImage(input);
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

function makeRainbow() {}

function makeBlur() {}

function isLoaded(image) {
	if (image != null && image.complete()) {
		return true;
	} else {
		alert("Image is not loaded");
		return false;
	}
}

function return_to_original(image) {
	if (isLoaded(image)) {
		image = new SimpleImage(input);
	}
}

function reset() {
	if (isLoaded(original_image)) {
		original_image.drawTo(canvas);
		red_image = new SimpleImage(input);
		gray_image = new SimpleImage(input);
		blur_image = new SimpleImage(input);
		rainbow_image = new SimpleImage(input);
		first_red_filter = true;
		first_gray_filter = true;
	}
}
