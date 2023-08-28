
// Add event listeners to all "Add Image" buttons
document.addEventListener("DOMContentLoaded", function() {
    const addImageButtons = document.querySelectorAll('.add-image-button');
    addImageButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const parentDiv = event.target.parentElement;
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.click();
            
            input.addEventListener('change', function() {
                const file = input.files[0];
                const reader = new FileReader();
                
                reader.addEventListener('load', function() {
                    const img = document.createElement('img');
                    img.src = reader.result;
                    img.className = 'uploaded-image';
                    
                    // Remove existing image if any
                    const existingImage = parentDiv.querySelector('.uploaded-image');
                    if (existingImage) {
                        parentDiv.removeChild(existingImage);
                    }
                    
                    // Add new image and remove the button
                    parentDiv.appendChild(img);
                    parentDiv.removeChild(event.target);
                });
                
                reader.readAsDataURL(file);
            });
        });
    });
    
    // Add event listener for the print button
    const printButton = document.getElementById('print-button');
    printButton.addEventListener('click', function(event) {
        window.print();
    });
});
