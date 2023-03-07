/** Query string parameter name holding the current search */
const PagefindSearchKey = "pagefind-search";

function setupPagefindUI() {
  const pagefindUIInstance = new PagefindUI({ 
    element: "#search", 
    showImages: false
  });
  
  const searchInput = window.document.querySelector<HTMLInputElement>("#search .pagefind-ui__search-input");
  const pagefindSearchQString = (new URL(window.location.toString())).searchParams.get(PagefindSearchKey);
  
  if (pagefindSearchQString) {
    pagefindUIInstance.triggerSearch(pagefindSearchQString);
  }

  // Clear the query string if it is empty
  searchInput?.addEventListener("input", (e: Event) => {
    if (searchInput.value === "") {
      updateSearchQueryString("");
    }
  });
  
  // if the Enter key is clicked then append the search to the QueryString
  searchInput?.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      updateSearchQueryString(searchInput.value);
    }
  });
  
  // Clear the query string if clear button clicked
  window.document.querySelector<HTMLButtonElement>("#search .pagefind-ui__search-clear")?.addEventListener("click", () => {
    updateSearchQueryString("");
  });
  
  searchInput?.focus();

  function updateSearchQueryString(term: string) {
    const url = new URL(window.location.toString());
    if (term.trim() == "") {
      url.searchParams.delete(PagefindSearchKey);
    } else {
      url.searchParams.set(PagefindSearchKey, term);
    }
    history.pushState({}, "", url);
  }
}

setupPagefindUI();