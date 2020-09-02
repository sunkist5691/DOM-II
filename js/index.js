// Your code goes here

// 1 (Mouse Move)
const title = document.querySelector('.logo-heading')
document.addEventListener('mousemove', (e) => {
    title.style.color = `rgb(40 , ${e.clientY}, ${e.clientX})`
})

// 2 (Click)
const h2Tag = document.querySelectorAll('h2')
const h4Tag = document.querySelectorAll('h4')

document.addEventListener('click', () => {
    h2Tag.forEach( x => {
        x.style.color = `rgb(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1})`
    })
    h4Tag.forEach( x => {
        x.style.color = `rgb(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1})`
    })
})

// 3 (Mouse Enter)
const navItems = document.querySelectorAll('.nav-link')

navItems.forEach( x => {
    x.addEventListener('mouseenter', () => {
        x.style.transform = 'scale(1.1)';
        x.style.transition = '0.3s'
        x.style.color = 'white'
    })
})


// 4 (Mouse Leave)
navItems.forEach( x => {
    x.addEventListener('mouseleave', () => {
        x.style.transform = 'scale(1)';
        x.style.transition = '0.2s'
        x.style.color = 'black'
    })
})

// 5 (Double Click)

document.addEventListener('dblclick', e => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.transition = '0.2s'
})

// 6 (Mouse Out)

document.addEventListener('mouseout', e => {
    e.target.style.transform = 'scale(1)'
    e.target.style.transition = '0.2s'
})

// 7 (Key Down)
const signMe = document.querySelectorAll('.btn');
document.addEventListener('keydown', () => {
    signMe.forEach( x => {
        x.style.transform= 'scale(1.1)'
        x.style.transition = '0.2s'
    })
})

// 8 (Key Up)
window.addEventListener('keyup', () => {
    signMe.forEach( x => {
        x.style.transform= 'scale(1)'
        x.style.transition = '0.2s'
    })
})

// 9 (Scroll)
const paragraph = document.querySelectorAll('p')
window.addEventListener('scroll', () => {
    paragraph.forEach( x => {
        x.style.color = `rgb(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1})`
    })
})

//10 (Resize)
const imgs = document.querySelectorAll('img');
window.addEventListener('resize', () => {
   imgs.forEach( x => {
       if(x.style.opacity === '0.5'){
           x.style.opacity = '1';
       } else {
           x.style.opacity = '0.5';
       }
    })
})

// footer
const foot = document.querySelector('.footer');

// Create Mom and Kid box
const box = document.createElement('div');
const boxTwo = document.createElement('div');

// Mom box CSS
foot.style.display = 'flex';
foot.style.justifyContent = 'space-around'
box.textContent = 'Mom'
box.style.border = 'solid 2px blue';
box.style.padding = '2%'
box.style.width = '15%'
box.style.border = 'solid 2px blue';
box.style.display = 'flex'
box.style.justifyContent = 'center'

// Kid box CSS
boxTwo.textContent = 'Kid'
boxTwo.style.border = 'solid 2px red';
boxTwo.style.padding = '2%'
boxTwo.style.textAlign = 'center'
boxTwo.style.width = '50%'

//appending two elements (Mom and Kid)
foot.appendChild(box)
box.appendChild(boxTwo)

// Prevent Propagation
foot.addEventListener('click', e => {
    e.stopPropagation();
    foot.style.backgroundColor = 'lightblue'
})

box.addEventListener('click', e => {
    e.stopPropagation();
    box.style.backgroundColor = 'green'
})

boxTwo.addEventListener('click', e => {
    e.stopPropagation();
    boxTwo.style.backgroundColor = 'orange'
})

// preventDefault() at navigation Items from default 'click' events;
navItems.forEach( eachItems => {
    eachItems.addEventListener('click', e => {
        e.preventDefault();
    })
})
