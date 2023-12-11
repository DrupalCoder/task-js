const expandBtn = document.getElementById('expand-btn');
expandBtn.onclick = (e) => {
  e.target.nextElementSibling.classList.toggle("active");
}