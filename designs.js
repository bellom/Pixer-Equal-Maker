// select colorPicker
const $colorPicker = document.getElementById("colorPicker");


// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");

        };
    };
    $(".grid").width(550/x);
    $(".grid").height(550/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("Enter Grid Width and Height Value");
    clearGrid();
    createGrid(z);
};

// create a 10x10 grid when the page loads
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(10);
    
        $(".grid").click(function() {
            this.style.background = $colorPicker.value;
        });
    
    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").click(function() {
            this.style.background = $colorPicker.value;
        });
    });
});