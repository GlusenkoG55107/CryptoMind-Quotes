async function loadQuotes() {
  const res = await fetch('quotes.json');
  return await res.json();
}

function showRandomQuote(quotes) {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = `"${random}"`;
}

document.addEventListener('DOMContentLoaded', async () => {
  const quotes = await loadQuotes();
  showRandomQuote(quotes);
  document.getElementById('new-quote').addEventListener('click', () => showRandomQuote(quotes));
});
