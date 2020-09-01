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
        x.style.transition = '0.2s'
    })
})


// 4 (Mouse Leave)
navItems.forEach( x => {
    x.addEventListener('mouseleave', () => {
        x.style.transform = 'scale(1)';
        x.style.transition = '0.2s'
    })
})

// 5 (Double Click)

document.addEventListener('dblclick', (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.transition = '0.2s'
})

// 6 (Mouse Out)

document.addEventListener('mouseout', (e) => {
    e.target.style.transform = 'scale(1)'
    e.target.style.transition = '0.2s'
})

// 7 (Key Down)
const signMe = document.querySelectorAll('.btn');

// signMe.forEach( x => {
//     x.addEventListener('keydown', () => {
//         x.style.color= 'scale(1.1)'
//         x.style.transition = '0.2s'
//         console.log(x)
//     })
// })

document.addEventListener('keydown', () => {
    signMe.forEach( x => {
        x.style.transform= 'scale(1.1)'
        x.style.transition = '0.2s'
    })
})

// 8 (Key Up)
document.addEventListener('keyup', () => {
    signMe.forEach( x => {
        x.style.transform= 'scale(1)'
        x.style.transition = '0.2s'
    })
})
