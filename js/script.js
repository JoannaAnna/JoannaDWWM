const downloadCv = document.querySelector('.downloadbtn');
const cvLink = "https://drive.google.com/uc?export=download&id=1ivacAJucBQL9EVNG_O5vcIi4Lf9gznUl"

downloadCv.addEventListener('click', () => {
    return location.href = cvLink;
});


let tabs = document.querySelectorAll('.tabBtn');
let tabContent = document.querySelectorAll('.content')

tabs.forEach((tab, index) => {
tab.addEventListener('click', () => {
    tabs.forEach(tab => {tab.classList.remove('active')});
    tab.classList.add('active');
            
    tabContent.forEach(content => {content.classList.remove('active')});
    tabContent[index].classList.add('active');
    })
})