
        document.getElementById('search-btn').addEventListener('click', function() {
            const searchBar = document.getElementById('search-bar');
            searchBar.classList.toggle('hidden');
            
            // Focus on the search bar when it becomes visible
            if (!searchBar.classList.contains('hidden')) {
                searchBar.focus();
            }
        });

        // Add event listener for input in the search bar
        document.getElementById('search-bar').addEventListener('input', function() {
            const searchQuery = this.value.trim();
            const resultsElement = document.getElementById('search-results');
            
            if (searchQuery) {
                // Display the search query
                resultsElement.innerHTML = `You searched for: <strong>"${searchQuery}"</strong>`;
                resultsElement.classList.remove('placeholder-text');
                
                // Add to search history
                addToSearchHistory(searchQuery);
            } else {
                // Show placeholder text if search bar is empty
                resultsElement.innerHTML = 'Your search results will appear here...';
                resultsElement.classList.add('placeholder-text');
            }
        });

        // Add event listener for Enter key in the search bar
        document.getElementById('search-bar').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchQuery = this.value.trim();
                if (searchQuery) {

                    performSearch(searchQuery);
                }
            }
        });

        // Array to store search history
        let searchHistory = [];

        function addToSearchHistory(query) {
            // Avoid duplicates
            if (!searchHistory.includes(query)) {
                searchHistory.unshift(query); // Add to beginning of array
                
                // Keep only the last 5 searches
                if (searchHistory.length > 5) {
                    searchHistory.pop();
                }
                
                updateSearchHistoryDisplay();
            }
        }

        function updateSearchHistoryDisplay() {
            const historyList = document.getElementById('history-list');
            historyList.innerHTML = '';
            
            searchHistory.forEach(query => {
                const listItem = document.createElement('li');
                listItem.textContent = query;
                historyList.appendChild(listItem);
            });
        }

        function performSearch(query) {
    
            const resultsElement = document.getElementById('search-results');
            resultsElement.innerHTML = `
                <p>You searched for: <strong>"${query}"</strong></p>
                <p style="margin-top: 10px;">In a real application, this would display actual search results from a database or API.</p>
            `;
        }


    // Discover More Button Functionality
    const discoverBtn = document.getElementById('discover-btn');
    const discoverPopup = document.getElementById('discover-popup');
    const closeDiscover = document.getElementById('close-discover');
    
    // Open the discover popup
    discoverBtn.addEventListener('click', function() {
      discoverPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close the discover popup
    closeDiscover.addEventListener('click', function() {
      discoverPopup.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close popup when clicking outside the content
    discoverPopup.addEventListener('click', function(event) {
      if (event.target === discoverPopup) {
        discoverPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && discoverPopup.style.display === 'flex') {
        discoverPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });