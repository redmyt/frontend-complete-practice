(function initbouncingBlocktask() {

    // Save needed elements to the variables
    var bouncingBlock = document.querySelector('.bouncing-block'),
        creatingButton = document.querySelector('.creating-button'),
        sizeInputes = document.querySelectorAll('.size-input'),
        chooseStyleButtons = document.querySelectorAll('.choose-style-button'),
        coordinatesButton = document.querySelector('.coordinates-button');

    // Make bouncing-block visible
    creatingButton.onclick = function() {
        bouncingBlock.style.display = 'block';
    }

    // Change width and height of bouncing-block when user change one of the size inputes  
    sizeInputes.forEach(function(input) {
        input.onchange = function() {
            bouncingBlock.style[this.name] = this.value + 'px';       
        }
    });

    // Change style of created element with cliking on one of the choose-style-buttons
    chooseStyleButtons.forEach(function(chooseButton) {
        chooseButton.onclick = function() {
            bouncingBlock.style.border = getComputedStyle(this).border;   
            bouncingBlock.style.background = getComputedStyle(this).background;
        }
    });

})();