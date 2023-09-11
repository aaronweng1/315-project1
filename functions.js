var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    a=document.getElementById("mainStyleSheet")

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    
    // 1 (c) Determine new stylesheet file name
    if (a.getAttribute("href") == "style1.css") {

        a.setAttribute("href", "style2.css");
    } else {

        a.setAttribute("href", "style1.css");
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)

    localStorage.setItem("currentCSS", a.getAttribute("href"));

}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    // 2 (b) get html style element by ID
    b = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    b.setAttribute("href", localStorage.getItem("currentCSS"));
}


