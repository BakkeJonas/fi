let transactions = []; // Array to store transactions (max 6 entries)

function generateTransaction() {
const chars = "abcdefABCDEF1234567890";
const address1 = Array.from({ length: 5 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
const address2 = Array.from({ length: 5 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join("");
const amount = (Math.random() * (20 - 0.01) + 0.01).toFixed(4);
return 0x${address1}...${address2} just claimed ${amount} $rfETH;
}

function updateFeed() {
const newTransaction = generateTransaction();
transactions.push(newTransaction); // Add new entry at the end

// Maintain a maximum of 6 entries
if (transactions.length > 6) {
transactions.shift(); // Remove the oldest entry if exceeding limit
}

const scrollableArea = document.getElementById("scrollableArea");
scrollableArea.innerHTML = ""; // Clear existing entries

for (const transaction of transactions) {
const entry = document.createElement("div");
entry.textContent = transaction;
scrollableArea.appendChild(entry);
}
}

// Initial update
updateFeed();

// Update feed every 1.5 seconds
setInterval(updateFeed, 2000);