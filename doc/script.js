// Hamburger Menu
const menuBar = document.getElementById('menu-bar');
const menuItems = document.getElementById('menu-items');
const header = document.getElementById('header');
const cancelMenuBar = document.getElementById('cancel-menu-bar');

menuBar.addEventListener('click', () => {
    menuItems.classList.add('duration-500');
    menuItems.classList.remove('-translate-y-80');
})
cancelMenuBar.addEventListener('click', () => {
  menuItems.classList.add('-translate-y-80')
})

// Quote Generator

const quote = document.getElementById('quote');
const person = document.getElementById('person');
const quoteList = [
  {
    quote: 'Hell is empty and all the devils are here!',
    person: '-William Shakespeare'
  },
  {
    quote: 'A little knowledge is a dangerous thing.',
    person: '-Alexander Pope'
  },
  {
    quote: 'All the world\'s a stage, and all the men and women merely players.',
    person: '-William Shakespeare'
  },
  {
    quote: 'Silence is the sleep that nourishes wisdom.',
    person: '-Francis Bacon'
  },
  {
    quote: 'Friends are thieves of time.',
    person: '-Francis Bacon'
  },
  {
    quote: 'Wise men make more opportunity than they find.',
    person: '-Francis Bacon'
  },
  {
    quote: 'Making mistake is the best practice!',
    person: '-Jamil Faruk'
  }
]
let quoteGenerator = () => {
  let randomQuote = Math.floor(Math.random() * quoteList.length)

  quote.innerText = quoteList[randomQuote].quote;
  person.innerText = quoteList[randomQuote].person;
}
quoteGenerator()
setInterval(quoteGenerator, 9000)


// expand and collapse

const seeAllPeriodBtn = document.getElementById('see-all-period');
const allPeriodDiv = document.getElementById('all-period');
const cancelAllPeriodBtn = document.getElementById('cancel-all-period');

seeAllPeriodBtn.addEventListener('click', () => {
  allPeriodDiv.classList.add('animate-seeAll-load')
  allPeriodDiv.classList.remove('hidden')
})
cancelAllPeriodBtn.addEventListener('click', () => {
  allPeriodDiv.classList.add('hidden')
})

const seeAllGenreBtn = document.getElementById('see-all-genre');
const allGenreDiv = document.getElementById('all-genre');
const cancelAllGenreBtn = document.getElementById('cancel-all-genre')

seeAllGenreBtn.addEventListener('click', () => {
  allGenreDiv.classList.add('animate-seeAll-load');
  allGenreDiv.classList.remove('hidden');
})
cancelAllGenreBtn.addEventListener('click',()=>{
  allGenreDiv.classList.add('hidden')
})

const seeAllAuthorBtn = document.getElementById('see-all-author');
const allAuthorDiv = document.getElementById('all-author');
const cancelAllAuthorBtn = document.getElementById('cancel-all-author')

seeAllAuthorBtn.addEventListener('click', () => {
  allAuthorDiv.classList.add('animate-seeAll-load');
  allAuthorDiv.classList.remove('hidden');
})
cancelAllAuthorBtn.addEventListener('click',()=>{
  allAuthorDiv.classList.add('hidden')
})


