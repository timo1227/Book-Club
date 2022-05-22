
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const searchInput = document.querySelector("[word-search]");
// On the click of the menu button, toggle the menu
menuButton.onclick = () => {
    menu.classList.toggle('active');
};
// On the click of any menu option (or exit button), toggle the menu
document.querySelectorAll('.menu a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('active');
    }
});


// searchInput.oninput = () => {
//     const value = searchInput.value.toLowerCase();
//     const paragraphs = document.querySelectorAll(".events p")
//     // Used Mark to find the word in the paragraph
//     paragraphs.forEach(paragraph => {

//     });
// }