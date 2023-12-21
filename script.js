const values = document.querySelectorAll('.value')
const btn = document.querySelector('.spinBtn')
const wheel = document.querySelector('.wheel')
const updateBtn = document.getElementById('updateBtn')

btn.addEventListener('click', () => {
    let number = Math.ceil(Math.random() * 3600)
    wheel.style.transform = 'rotate(' + number + 'deg)'
    number += Math.ceil(Math.random() * 3600)
})

updateBtn.addEventListener('click', () => {
    let newValues = document.getElementById('newValues').value.split(',')

    values.forEach((value, index) => {

        if(newValues[index]) {
            value.textContent = newValues[index].trim()
        }
        
    });

})



