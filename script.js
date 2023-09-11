const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');




const changeColor = () => {
    const colorsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    const randomColor = [0, 0, 0, 0, 0, 0];
    
    
    
    for (let i = 0; i < randomColor.length; i++) {
        const randomIndex = Math.floor(Math.random() * colorsArr.length)
        randomColor[i] = colorsArr[randomIndex]
    } 
    
    body.style.backgroundColor = `#${randomColor.join('')}`
    color.textContent = `#${randomColor.join('')}`
    btn.style.backgroundColor = `#${randomColor.join('')}`
}


btn.addEventListener('click', changeColor)