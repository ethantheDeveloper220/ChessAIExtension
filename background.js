// Background script (service worker) for handling background processes
chrome.runtime.onInstalled.addListener(() => {
  console.log("Chess AI Extension installed!");
});

document.getElementById('testMove').addEventListener('click', function() {
  alert('Testing your chess move... 🤖');
});
