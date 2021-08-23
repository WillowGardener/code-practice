cardArray = document.getElementsByClassName('card')
bioArray = document.getElementsByClassName('bio')


for (card of cardArray) {
    card.addEventListener('mouseover', function(){
        this.children[0].style.opacity = 1
        this.children[0].style.filter = 'contrast(100%)'
        this.children[1].classList.add('show')
        this.children[1].classList.remove('hide')
        
    })
    card.addEventListener('mouseout', function(){
        this.children[0].style.opacity = .3
        this.children[1].classList.add('hide')
        this.children[1].classList.remove('show')
    })
    card.addEventListener('click', function(){
        for (bio of bioArray) {
            bio.classList.add('hide')
            bio.classList.remove('show')
        }
        console.log(this.id)
        employeeName = this.id
        bio = document.getElementById(`${employeeName}-bio`)
        bio.classList.add('show')
        bio.classList.remove('hide')
    })
}