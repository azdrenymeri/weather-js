
const searchContainer = document.createElement('form');
searchContainer.classList.add('search-container');
searchContainer.setAttribute('id', 'search-form');
searchContainer.innerHTML = `
  <input type="text" id="search-bar" placeholder="Press enter to search">
  <button class="search-icon submit-btn" type="submit">
  <a href="#"><img id="search-ic" class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></a>
  </button>
`;

export default { searchContainer };