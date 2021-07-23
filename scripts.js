var file_name = null;
var original_image = null;
var blur_image = null;
var rainbow_image = null;
var gray_image = null;
var red_image = null;
var canvas = null;

function upload() {
	file_name = document.getElementById("finput");
	original_image = new SimpleImage(file_name);
	red_image = new SimpleImage(file_name);
	gray_image = new SimpleImage(file_name);
	rainbow_image = new SimpleImage(file_name);
	blur_image = new SimpleImage(file_name);
	canvas = document.getElementById("canvas");
	original_image.drawTo(canvas);
}

function makeGray() {
	if (isLoaded(gray_image)) {
		filterGray();
		gray_image.drawTo(canvas);
	}
}

function makeRed() {
	if (isLoaded(red_image)) {
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
}

function filterRed() {
	for (var pixel of red_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		if (avg < 128) {
			pixel.setRed(2*avg);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		else {
			pixel.setRed(255);
			pixel.setGreen(2*avg-255);
			pixel.setBlue(2*avg-255);
		}
	}
}

function makeRainbow() {}

function makeBlur() {}

function isLoaded(image) {
	if (image != null && image.complete()) {
		return true;
	}
	alert("Image is not loaded");
	return false;
}

function reset() {
	if (isLoaded(original_image)) {
		original_image.drawTo(canvas);
		red_image = new SimpleImage(file_name);
		gray_image = new SimpleImage(file_name);
		rainbow_image = new SimpleImage(file_name);
		blur_image = new SimpleImage(file_name);
	}
}
