const init = () => {

  // Main button that needs to be accessed, so bookSearch function can be triggered.
  const button = document.getElementById('button')
  let search
  let result

  // We are working with LOTR API. Some end-points can be accessed only by providing token inside headers.
  const token = 'nUUclHPTzfS3m5YGQEC_'
  const searchURL = 'https://the-one-api.dev/v2/book/'
  const headers = {
    headers: { 'Authorization': 'Bearer ' + token }
  }

  // Error handling
  const handleError = (msg) => {
    result.innerHTML = `<p class='error-display'>${msg}</p>`
  }

  // Loading handling
  const handleLoading = () => {
    result.innerHTML = '<p class="error-display">Searching...</p>'
  }

  // bookSearch is triggered only if button is clicked.
  const bookSearch = () => {

    // Saving whatever is typed inside "search" id. Result is going to be displayed inside result id.
    search = document.getElementById('search').value.toLowerCase()
    result = document.getElementById('result')

    // Using async function to access all books in API. Search term then needs to be converted to _id number!
    const getAllBooksAsync = async() => {
      handleLoading()
      try {
        const req = await fetch(searchURL, headers)
        let allBooks = await req.json()
        if (search === '') {
          return
        } else {
          return allBooks = allBooks.docs.filter(item => {
            if (item.name.toLowerCase() === search) {
              return item._id
            } 
          }) 
        }
      } catch {
        handleError('Oops! Something has gone wrong.')                    // If API is not working, display a message.
      }
    }

    // Using async function to get a particular book
    let oneBook
    const getParticularBook = async() => {
      try {
        const result = await getAllBooksAsync()
        const id = result.map(item => item._id)                           // Mapping through result (because it comes back as an array) and storing the _id.
        const req = await fetch(searchURL + id, headers)                  // We then concatenate id with url.
        oneBook = await req.json()                                        // req is then stored as json.                                   

        displayParticularBook()

      } catch {
        // If there is no match, a message is displayed.
        handleError('Oops! I could not find any book under this name. Please, try again!')
      }
    }

    // Displaying a particular book
    const displayParticularBook = () => {
      const particularBookArray = oneBook.docs.map(item => {
        let changedName = item.name
        
        // Using regex to replace empty spaces with -. It was done for images saved inside images folder
        changedName = changedName.replace(/\s+/g, '-').toLowerCase()

        // Removing searchBar when getting the result
        const searchBar = document.querySelector('.search-bar')
        searchBar.remove()

        // Adding style
        const borderMain = document.querySelector('main')
        borderMain.classList.add('border')

        // Dynamically created homeButton
        const header = document.querySelector('header')
        const homeButton = document.createElement('h4')
        homeButton.setAttribute('id', 'home')
        const text = document.createTextNode('⬅ Home')
        homeButton.appendChild(text)
        header.appendChild(homeButton)

        document.getElementById('home').addEventListener('click', () => {
          // Reloading page after hitting back button
          location.reload()
        })

        // Another way to dynamically creating DOM elements with `` aka template literals.
        return (
          `<div class="book-result">
            <h3>${item.name}</h3>
            <div class="book-result_inner">
              <img src="/images/${changedName}.gif" alt="${item.name}" class="book-cover" />
              <div class="chapter-positioning">
                <h4>Chapters:</h4>
              </div>
            </div>
          </div>`
        )
      })
      result.innerHTML = particularBookArray.join('')
    }

    


    // Showing chapters
    let chapters = []

    // Get all chapters with async function
    const getChapters = async() => {
      try {
        const result = await getAllBooksAsync()
        const id = result.map(item => item._id)
        const req = await fetch(searchURL + id + '/chapter', headers)
        chapters = await req.json()
        displayChapter()
      } catch {
        handleError('Oops! Something has gone wrong!')
      }
    }

    // Creating a div and setAttribute
    const container = document.createElement('div')
    container.setAttribute('class', 'chapter-container')

    // Had to put it out of map otherwise it would create an ol on each iteration.
    const list = document.createElement('ol')

    // Display chapter with dynamically created DOM elements
    const displayChapter = () => {
      const particularChapterArray = chapters.docs.map(item => {
        const chapterResult = document.querySelector('.chapter-positioning')
        const tag = document.createElement('li')
        const text = document.createTextNode(`${item.chapterName}`)
        tag.appendChild(text)
        list.appendChild(tag)
        container.appendChild(list)
        chapterResult.appendChild(container)
      })
      return particularChapterArray
    }


    getParticularBook()
    getChapters()


  }


  // Listening to button if clicked. If yes, bookSearch function is triggered.
  button.addEventListener('click', bookSearch)
}



window.addEventListener('DOMContentLoaded', init)