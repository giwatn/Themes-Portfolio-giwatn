const tabItems = document.querySelectorAll('.tab-item');
// Select tab Content item
function selectItem(e) {
    removeBorder();
    // Add border to current tab
    this.classList.add('tab-border');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));