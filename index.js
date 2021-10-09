const checkboxEl = document.querySelector('input[type="checkbox"]')

const bodyEl = document.body
const headerEl = document.querySelector('#header')
const totalFollowersHeadingEl = document.querySelector('#total-followers-heading')
const themeHeadingEl = document.querySelector('#theme-heading')
const mainCardsEls = Array.from(document.querySelectorAll('.main-card'))
const overviewHeadingEl = document.querySelector('#overview-heading')
const smallCardsEls = Array.from(document.querySelectorAll('.small-card'))

function setLightTheme() {
  bodyEl.classList.add('body-light-bg')
  bodyEl.classList.remove('body-dark-bg')

  headerEl.classList.add('header-light')
  headerEl.classList.remove('header-dark')

  totalFollowersHeadingEl.classList.add('total-followers-heading-light')
  totalFollowersHeadingEl.classList.remove('total-followers-heading-dark')

  themeHeadingEl.classList.add('theme-heading-light')
  themeHeadingEl.classList.remove('theme-heading-dark')
  themeHeadingEl.textContent = 'Light Mode'

  mainCardsEls.forEach(mainCard => {
    mainCard.classList.add('main-card-light')
    mainCard.classList.remove('main-card-dark')

    const headingH1El = mainCard.querySelector('h1')
    headingH1El.classList.add('main-card-heading-light')
    headingH1El.classList.remove('main-card-heading-dark')
  })

  overviewHeadingEl.classList.add('overview-heading-light')
  overviewHeadingEl.classList.remove('overview-heading-dark')

  smallCardsEls.forEach(smallCardEl => {
    smallCardEl.classList.add('small-card-light')
    smallCardEl.classList.remove('small-card-dark')

    const smallCardH1El = smallCardEl.querySelector('h1')
    smallCardH1El.classList.add('small-card-heading-light')
    smallCardH1El.classList.remove('small-card-heading-dark')
  })
}

function setDarkTheme() {
  bodyEl.classList.add('body-dark-bg')
  bodyEl.classList.remove('body-light-bg')

  headerEl.classList.add('header-dark')
  headerEl.classList.remove('header-light')

  totalFollowersHeadingEl.classList.add('total-followers-heading-dark')
  totalFollowersHeadingEl.classList.remove('total-followers-heading-light')

  themeHeadingEl.classList.add('theme-heading-dark')
  themeHeadingEl.classList.remove('theme-heading-light')
  themeHeadingEl.textContent = 'Dark Mode'

  mainCardsEls.forEach(mainCard => {
    mainCard.classList.add('main-card-dark')
    mainCard.classList.remove('main-card-light')

    const headingH1El = mainCard.querySelector('h1')
    headingH1El.classList.add('main-card-heading-dark')
    headingH1El.classList.remove('main-card-heading-light')
  })

  overviewHeadingEl.classList.add('overview-heading-dark')
  overviewHeadingEl.classList.remove('overview-heading-light')

  smallCardsEls.forEach(smallCardEl => {
    smallCardEl.classList.add('small-card-dark')
    smallCardEl.classList.remove('small-card-light')

    const smallCardH1El = smallCardEl.querySelector('h1')
    smallCardH1El.classList.add('small-card-heading-dark')
    smallCardH1El.classList.remove('small-card-heading-light')
  })
}

function toggleTheme () {
  if(checkboxEl.checked) {
    setLightTheme()
  } else {
    setDarkTheme()
  }
}

checkboxEl.addEventListener('click', toggleTheme)
