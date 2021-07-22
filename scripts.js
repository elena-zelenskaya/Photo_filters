var image;
var gray_image;

function upload() {
	var file_name = document.getElementById("finput");
	image = new SimpleImage(file_name);
	var canvas = document.getElementById("canvas")
	image.drawTo(canvas);
}

function makeGray() {
	gray_image = image;
	for (var pixel of gray_image.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	var canvas = document.getElementById("canvas")
	gray_image.drawTo(canvas);
}