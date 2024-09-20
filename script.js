document.getElementById('yesBtn').addEventListener('mouseover', function() {
    // Get the viewport size
    const container = document.querySelector('.options');
    const containerRect = container.getBoundingClientRect();

    // Get the "No" button's size and position
    const noBtn = document.getElementById('noBtn');
    const noBtnRect = noBtn.getBoundingClientRect();

    // Define a margin around the "No" button to avoid overlap
    const margin = 20;

    // Generate random positions for the "Yes" button within the container, avoiding the "No" button
    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * (containerRect.width - this.offsetWidth));
        randomY = Math.floor(Math.random() * (containerRect.height - this.offsetHeight));
    } while (
        randomX + this.offsetWidth > noBtnRect.left - containerRect.left - margin &&
        randomX < noBtnRect.right - containerRect.left + margin &&
        randomY + this.offsetHeight > noBtnRect.top - containerRect.top - margin &&
        randomY < noBtnRect.bottom - containerRect.top + margin
    );

    // Apply the random positions to move the button
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});

document.getElementById('noBtn').addEventListener('click', function() {
    // When the 'No' button is clicked, display the message
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('message').innerText = "Yes, you are right. Take rest!";
});
