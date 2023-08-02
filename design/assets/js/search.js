/*-----------------------------
    Search - Interface manipulation
------------------------------- */

$('.search').on('click', function(e) {
    showSearch();
    e.preventDefault();
});

$('.SNSearch').on('click', function(e) {
    hideIfShownSearch();
});

$('.SNSearch-box').on('click', function(e) {
    e.stopPropagation();
});

function showSearch(e) {
    // Show the search view by running fade-in of the view
    $('.SNSearch').toggleClass('active');
    if ($('.SNSearch').is('.active')) {
        // Remove all results
        $('.SNSearch-input').val('');
        $('.SNSearch-input').focus();
        $('.SNSearch-results').html(
            `<p class="section-title empty">Start your search by typing your phrase</p>`
        );
    }
    e.preventDefault();
}

function hideOrClearSearch(e) {
    // Hide the search view by running fade-out of the view or clear input if not empty
    if ($('.SNSearch-input').val().length > 0) {
        $('.SNSearch-input').val('');
    } else {
        $('.SNSearch').removeClass('active');
    }
    e.preventDefault();
}

function hideIfShownSearch() {
    if ($('.SNSearch').is('.active')) {
        $('.SNSearch').removeClass('active');
    }
}

document.addEventListener('animationstart', function(e) {
    if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
    }
});

document.addEventListener('animationend', function(e) {
    if (e.animationName === 'fade-out') {
        e.target.classList.remove('did-fade-in');
    }
});

/*-----------------------------
    Search - Results and processing
------------------------------- */

let activeSearchResults = [];
let activeSearchIndex = 0;

$('.SNSearch-input').on('input', function(e) {
    let searchString = $(this).val();
    let resultObject = $('.SNSearch-results');

    // Don't search for small strings
    if (searchString.length < 2) {
        resultObject.html(
            `<p class="section-title empty">Start your search by typing your phrase</p>`
        );
        // No results
        return;
    }

    // Configure search. Note that this can be changed so the search returns fuzzy results
    // by changing the trashold, distance (see example > https://fusejs.io/demo.html)
    var options = {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        ignoreLocation: true,
        keys: ['text']
    };

    // Note: FuseSearchData is index created by the exporter, loaded from si.js
    const fuse = new Fuse(FuseSearchData, options);
    let searchResult = fuse.search(searchString);

    if (searchResult.length === 0) {
        // No result found
        resultObject.html(
            `<p class="section-title empty">No results found, change your search phrase</p>`
        );
        return;
    }

    // Reset search
    resultObject.html('');

    // Prepare data
    let contentResults = [];
    let sectionResults = [];
    let pageResults = [];

    for (let result of searchResult) {
        let item = result.item;
        item.startIndex = item.text
            .toLowerCase()
            .indexOf(searchString.toLowerCase());
        item.endIndex = item.startIndex + searchString.length;

        if (item.type === 'contentBlock') {
            contentResults.push(item);
        } else if (item.type === 'sectionHeader') {
            sectionResults.push(item);
        } else {
            pageResults.push(item);
        }
    }

    // Add pages
    if (pageResults.length > 0) {
        let results = pageResults;
        resultObject.append(
            `<p class="section-title">Pages & Categories (${results.length})</p>`
        );
        let count = 0;
        for (let result of results) {
            resultObject.append(`
		  <a href="${result.url}" class="sn-search-result-link">
		  <div class="result">
			<p class="section-result-header">${highlightRanges(
        result.text,
        result.startIndex,
        result.endIndex
      )}</p>
			<p class="section-result-text">${result.category}</p>
		  </div>
		  </a>`);
            // Allow up to 5 results to be shown
            if (++count > 5) {
                break;
            }
        }
    }

    // Add results matching titles first, then text block results
    if (sectionResults.length > 0) {
        resultObject.append(
            `<p class="section-title">Content sections (${sectionResults.length})</p>`
        );
        let count = 0;
        for (let result of sectionResults) {
            resultObject.append(`
		  <a href="${result.url}" class="sn-search-result-link">
		  <div class="result">
			<p class="section-result-header">${highlightRanges(
        result.text,
        result.startIndex,
        result.endIndex
      )}</p>
			<p class="section-result-text">On page ${result.category}</p>
		  </div>
		  </a>`);
            // Allow up to 5 results to be shown
            if (++count > 5) {
                break;
            }
        }
    }

    // Add text block results
    if (contentResults.length > 0) {
        resultObject.append(
            `<p class="section-title">Content (${contentResults.length})</p>`
        );
        let count = 0;
        for (let result of contentResults) {
            resultObject.append(`
		  <a href="${result.url}" class="sn-search-result-link">
		  <div class="result">
			<p class="section-result-header">${highlightRanges(
        result.text,
        result.startIndex,
        result.endIndex
      )}</p>
			<p class="section-result-text">On page ${result.category}</p>
		  </div>
		  </a>`);
            // Allow up to 20 results to be shown
            if (++count > 20) {
                break;
            }
        }
    }

    $('.sn-search-result-link').on('click', function(e) {
        hideIfShownSearch();
    });

    resetActiveSearchIndex();
    updateActiveSearchIndex();
});

function resetActiveSearchIndex() {
    activeSearchIndex = 0;
}

function updateActiveSearchIndex() {
    $('.sn-search-result-link').removeClass('selected');
    const activeResult = $(`.sn-search-result-link:eq(${activeSearchIndex})`);
    if (activeResult) {
        activeResult.addClass('selected');
        scrollIntoViewIfNeeded(activeResult[0], activeResult.parent()[0]);
    }
}

function previousSearchResult(event) {
    if (!$('.SNSearch').is('.active')) {
        return;
    }
    event.preventDefault();
    if (activeSearchIndex > 0) {
        activeSearchIndex--;
    }
    updateActiveSearchIndex();
}

function nextSearchResult(event) {
    if (!$('.SNSearch').is('.active')) {
        return;
    }
    event.preventDefault();
    if (activeSearchIndex < $('.sn-search-result-link').length - 1) {
        activeSearchIndex++;
    }
    updateActiveSearchIndex();
}

function activateCurrentSearchResult(event) {
    if (!$('.SNSearch').is('.active')) {
        return;
    }
    event.preventDefault();
    const link = $(`.sn-search-result-link:eq(${activeSearchIndex})`);
    if (link) {
        const href = link.attr('href');
        if (href) {
            window.location.href = href;
            hideIfShownSearch();
        }
    }
}

function highlightRanges(s, startIndex, endIndex) {
    if (startIndex === -1) {
        return s;
    }

    let beginning = s.substring(0, startIndex);
    let searchResult = s.substring(startIndex, endIndex);
    let end = s.substring(endIndex);

    return `${beginning}<span>${searchResult}</span>${end}`;
}

function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

function scrollIntoViewIfNeeded(target, parent) {
    let rectElem = target.getBoundingClientRect(),
        rectContainer = parent.getBoundingClientRect();
    if (rectElem.bottom > rectContainer.bottom) target.scrollIntoView(false);
    if (rectElem.top < rectContainer.top) target.scrollIntoView();
}

hotkeys.filter = function(event) {
    return true;
};

/*-----------------------------
    Hotkeys
------------------------------- */

hotkeys('cmd+k,ctrl+k,esc, up, down, enter, return', function(event, handler) {
    switch (handler.key) {
        case 'esc':
            hideOrClearSearch(event);
            break;
        case 'cmd+k':
        case 'ctrl+k':
            showSearch(event);
            break;
        case 'up':
            previousSearchResult(event);
            break;
        case 'down':
            nextSearchResult(event);
            break;
        case 'enter':
        case 'return':
            activateCurrentSearchResult(event);
    }
});