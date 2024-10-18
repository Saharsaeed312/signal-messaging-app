function check() {
    // Get the selected radio button
    const selectedColor = document.querySelector('input[name="color"]:checked');
    const result = document.getElementById('result');

    // Check if a radio button is selected
    if (selectedColor) {
        // Display messages based on selected color
        switch (selectedColor.value) {
            case 'red':
                result.textContent = 'Stop her.';
                break;
            case 'yellow':
                result.textContent = 'Ready to move.';
                break;
            case 'green':
                result.textContent = 'Move now.';
                break;
        }
    } else {
        // Inform the user if no color is selected
        result.textContent = 'Please select a color.';
    }
}

