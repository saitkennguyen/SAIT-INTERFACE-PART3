var xhr;

function week1() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "monday.html", true);
    xhr.send();
}

function week2() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "tuesday.html", true);
    xhr.send();
}

function week3() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "wednesday.html", true);
    xhr.send();
}

function week4() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "thursday.html", true);
    xhr.send();
}

function week5() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "firday.html", true);
    xhr.send();
}

function week6() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "saturday.html", true);
    xhr.send();
}

function week7() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("show").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "sunday.html", true);
    xhr.send();
}