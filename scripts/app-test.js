const init = () => {

  // console.log('I am JavaScript and I am printing this message in your browser')

  // // ? DOM elements
  // const button = document.getElementById('button-search')                 // ? Accessing the search button
  // const searchInput = document.getElementById('search-input')             // ? Accessing the area where text is being
  // const searchResult = document.querySelector('.searchResult')            // ? Accessing the area where result is going to be displayed


  // // ? Define an empty array for books
  // let listBooks = []


  // // ? Authorization

  const token = 'nUUclHPTzfS3m5YGQEC_'

  const headers = {
    headers: { 'Authorization': 'Bearer ' + token }
  }

  // const showBookResult = () => {
  //   // console.log('I was clicked.')
  // }

  // // Creating an asynchronius function getCountries where we fetch json document and attach it to the empty array.
  // async function getBooks() {
  //   handleLoading()
  //   try {
  //     const req = await fetch('https://the-one-api.dev/v2/book', headers)
  //     listBooks = await req.json()
  //     // console.log('listBooks >>>', listBooks)
  //     displayBooks()
  //   } catch (err){
  //     handleError(`Oops! Something went wrong - ${err}`)
  //   }
  // }

  // // Function display countries on screen
  // const displayBooks = () => {
  //   // Use map method to extract the name, nativeName and image of each country object in our array, and return a <li> with the relevant info
  //   // We are using map because we want to get back all countries inside.
  //   const htmlArray = listBooks.docs.map(item => {
  //     return `<div>
  //               <h1>${item._id}</h1>
  //               <p>${item.name}</p>
  //               <button>Read More</button>
  //             </div>`
  //   })
  //   // Join our array and update our .countriesList class inner HTML
  //   searchResult.innerHTML = htmlArray.join('')
  // }

  // const searchURL = 'https://the-one-api.dev/v2/book/'

  // async function getParticularBook(text) {
  //   handleLoading()
  //   try {
  //     const req = await fetch('https://the-one-api.dev/v2/book', headers)
  //     listBooks = await req.json()
  //     const url = searchURL + text
  //     const response = await fetch(url, headers)
  //     listBooks = await response.json()
  //     displayParticularBook()
  //   } catch {
  //     handleError('Oops! I could not find any book under this name. Please, try again!')
  //   }
  // }


  // // * Display particular book
  // const displayParticularBook = () => {
  //   const particularBookArray = listBooks.docs.map(item => {
  //     return `<div>
  //               <h1>${item._id}</h1>
  //               <p>${item.name}</p>
  //             </div>`
  //   })
  //   searchResult.innerHTML = particularBookArray.join('')
  // }

  // // ! Function for potential handling error
  // function handleError(msg){
  //   searchResult.innerHTML = `<p style='color: red'>${msg}</p>`
  // }

  // // ! Function that adds a loading message while we await our request response
  // function handleLoading(){
  //   searchResult.innerHTML = '<li>Loading individual countries...</li>'
  // }

  // // ? Event listener for searchInput
  // searchInput.addEventListener('input', e => {
  //   const text = (e.target.value).toLowerCase()
  //   console.log('I search for >>>>', text)
  //   if (text === '') {
  //     getBooks()
  //   } else {
  //     searchResult.textContent = getParticularBook(`${text}`)
  //   }
  // })

  

  // // ? Event listeners for keys.
  // button.addEventListener('click', showBookResult)


  // ! Search book

  // ? DOM elements
  const button = document.getElementById('button-search')                 // ? Accessing the search button
  const searchInput = document.getElementById('search-input')             // ? Accessing the area where text is being
  const searchResult = document.querySelector('.searchResult')            // ? Accessing the area where result is going to be displayed

  let listBooks = []

  const search = (searchInput.value).toLowerCase()
  
  // const showBooks = () => {

  //   function handleError(msg){
  //     listBooks.innerHTML = `<p style='color: black'>${msg}</p>`
  //   }

  //   const searchURL = 'https://the-one-api.dev/v2/book/' + search
  
  //   async function getParticularBook() {
  //     try {
  //       const request = await fetch(searchURL, headers)
  //       listBooks = await request.json()
  //       displayParticularBook()
  //     } catch {
  //       handleError('Oops! I could not find any book under this name. Please, try again!')
  //     }
  //   }

  //   const displayParticularBook = () => {
  //     const particularBookArray = listBooks.docs.map(item => {
  //       return `<div>
  //               <h1>${item._id}</h1>
  //               <p>${item.name}</p>
  //             </div>`
  //     })
  //     searchResult.innerHTML = particularBookArray.join('')
  //   }
  // }

  const showBooks = () => {
    console.log('I am clicked >>>>', showBooks)
  }

  button.addEventListener('click', showBooks)


  showBooks()

}

window.addEventListener('DOMContentLoaded', init)