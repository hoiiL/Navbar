const list = document.querySelectorAll('li');
const toggleBar = document.querySelector('.toggle-bar');
const bar = document.querySelectorAll('.bar');
const navbar = document.querySelector('.navbar_container');


list.forEach(el => {
  el.addEventListener('click', () => {
    list.forEach(ele => {
      ele.classList.remove('active');
    });
    el.classList.add("active");
  });
})

toggleBar.addEventListener("click", () => {
  bar.forEach(el => {
    el.classList.toggle('toggle');
  });
  navbar.classList.toggle("show");
})