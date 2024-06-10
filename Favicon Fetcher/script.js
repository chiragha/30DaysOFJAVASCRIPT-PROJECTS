const icon= document.getElementById("fav-img");
const url = document.getElementById("fav-text");


url.addEventListener('keypress', () => {
     const favicon = `https://www.google.com/s2/favicons?sz=32&domain_url=${url.value}`
     icon.src = favicon;
});