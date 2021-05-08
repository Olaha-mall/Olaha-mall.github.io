/*pic1*/
const openpic1Buttons = document.querySelectorAll('[data-pic1-target]')
const closepic1Buttons = document.querySelectorAll('[data-close-button]')
const overlay1 = document.getElementById('overlay')

openpic1Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic1 = document.querySelector(button.dataset.pic1Target)
    openpic1(pic1)
  })
})

overlay.addEventListener('click', () => {
  const pic1s = document.querySelectorAll('.pic1.active')
  pic1s.forEach(pic1 => {
    closepic1(pic1)
  })
})

closepic1Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic1 = button.closest('.pic1')
    closepic1(pic1)
  })
})

function openpic1(pic1) {
  if (pic1 == null) return
  pic1.classList.add('active')
  overlay.classList.add('active')
}

function closepic1(pic1) {
  if (pic1 == null) return
  pic1.classList.remove('active')
  overlay.classList.remove('active')
}

/*pic2*/
const openpic2Buttons = document.querySelectorAll('[data-pic2-target]')
const closepic2Buttons = document.querySelectorAll('[data-close-button]')
const overlay2 = document.getElementById('overlay')

openpic2Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic2 = document.querySelector(button.dataset.pic2Target)
    openpic2(pic2)
  })
})

overlay.addEventListener('click', () => {
  const pic2s = document.querySelectorAll('.pic2.active')
  pic2s.forEach(pic2 => {
    closepic2(pic2)
  })
})

closepic2Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic2 = button.closest('.pic2')
    closepic2(pic2)
  })
})

function openpic2(pic2) {
  if (pic2 == null) return
  pic2.classList.add('active')
  overlay.classList.add('active')
}

function closepic2(pic2) {
  if (pic2 == null) return
  pic2.classList.remove('active')
  overlay.classList.remove('active')
}
/*pic3*/
const openpic3Buttons = document.querySelectorAll('[data-pic3-target]')
const closepic3Buttons = document.querySelectorAll('[data-close-button]')
const overlay3 = document.getElementById('overlay')

openpic3Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic3 = document.querySelector(button.dataset.pic3Target)
    openpic3(pic3)
  })
})

overlay.addEventListener('click', () => {
  const pic3s = document.querySelectorAll('.pic3.active')
  pic3s.forEach(pic3 => {
    closepic3(pic3)
  })
})

closepic3Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic3 = button.closest('.pic3')
    closepic3(pic3)
  })
})

function openpic3(pic3) {
  if (pic3 == null) return
  pic3.classList.add('active')
  overlay.classList.add('active')
}

function closepic3(pic3) {
  if (pic3 == null) return
  pic3.classList.remove('active')
  overlay.classList.remove('active')
}

/*pic4*/
const openpic4Buttons = document.querySelectorAll('[data-pic4-target]')
const closepic4Buttons = document.querySelectorAll('[data-close-button]')
const overlay4 = document.getElementById('overlay')

openpic4Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic4 = document.querySelector(button.dataset.pic4Target)
    openpic4(pic4)
  })
})

overlay.addEventListener('click', () => {
  const pic4s = document.querySelectorAll('.pic4.active')
  pic4s.forEach(pic4 => {
    closepic4(pic4)
  })
})

closepic4Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pic4 = button.closest('.pic4')
    closepic4(pic4)
  })
})

function openpic4(pic4) {
  if (pic4 == null) return
  pic4.classList.add('active')
  overlay.classList.add('active')
}

function closepic4(pic4) {
  if (pic4 == null) return
  pic4.classList.remove('active')
  overlay.classList.remove('active')
}