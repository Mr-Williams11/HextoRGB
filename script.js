var hexInput = document.getElementById("hexInput");

hexInput.addEventListener("input", function() {
    convertHexToRgb();
});

function convertHexToRgb() {
    var hexValue = hexInput.value;

    hexValue = hexValue.replace(/^#/, '');

    if (!/^[0-9A-Fa-f]{6}$/.test(hexValue)) {
        document.getElementById("rgbOutput").innerHTML = "<div class='rgbOutputItem' style='background-color: #e74c3c;'>Invalid Hex Color</div>";
        return;
    }

    var r = parseInt(hexValue.substring(0, 2), 16);
    var g = parseInt(hexValue.substring(2, 4), 16);
    var b = parseInt(hexValue.substring(4, 6), 16);

    var rgbOutput = "<div class='rgbOutputItem' style='background-color: #3498db;'>RGB: " + r + ", " + g + ", " + b + "</div>";

    document.getElementById("rgbOutput").innerHTML = rgbOutput;
}
