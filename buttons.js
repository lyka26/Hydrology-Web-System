// Action buttons to track
const actions = ["pre-warning", "red-alert", "all-clear", "disaster-warning"];

// Initializing current status of all actions to 0 (false)
let currentStatus = {
    "pre-warning": 0,
    "red-alert": 0,
    "all-clear": 0,
    "disaster-warning": 0
};

// Function to send boolean values to backend
function sendToPLC() {
    console.log('Sending to PLC:', currentStatus);
}

// Event listeners to all action buttons
document.querySelectorAll('.circle-btn').forEach(button => {
    button.addEventListener('click', () => {
        for (let action of actions) {
            if (button.classList.contains(action)) {
            if (action === "all-clear") {
                // Reset all to 0
                actions.forEach(a => currentStatus[a] = 0);
            } else {
                // Toggle the clicked action
                currentStatus[action] = currentStatus[action] === 0 ? 1 : 0;
            }
            sendToPLC();
            break;
            }
        }
    });
});