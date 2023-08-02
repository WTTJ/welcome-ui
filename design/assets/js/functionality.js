/*------------------------
   Content menu tracking
-------------------------- */

$(window).on('load', function() {
    let sections = [];

    // Store and restore menu scroll offset
    const scroll = localStorage.getItem('menu.scroll.position.top');
    if (scroll) {
        $('.sidebar-navigation').scrollTop(scroll);
    }

    document.querySelectorAll('.sidebar-navigation').forEach(section => {
        section.addEventListener(
            'scroll',
            function() {
                localStorage.setItem('menu.scroll.position.top', section.scrollTop);
            },
            false
        );
    });

    // Create intersection observer for all sections
    const observer = new IntersectionObserver(_entries => {
        // Highlight headers in viewport
        let isAnythingSelected = false;
        for (let section of sections) {
            let id = section.getAttribute('id');
            if (isElementInViewport(section)) {
                document
                    .querySelector(`nav li a[href="#${id}"]`)
                    .parentElement.classList.add('active');
                isAnythingSelected = true;
            } else {
                document
                    .querySelector(`nav li a[href="#${id}"]`)
                    .parentElement.classList.remove('active');
            }
        }

        // If there are no headers in the viewport, then highlight the one which is closest to the viewport currently.
        if (!isAnythingSelected) {
            let minDistance = 9999999;
            let currentSection = undefined;
            for (let section of sections) {
                let distance = closestDistanceToViewportEdge(section);
                if (distance < minDistance) {
                    minDistance = distance;
                    currentSection = section;
                }
            }
            if (currentSection) {
                let id = currentSection.getAttribute('id');
                document
                    .querySelector(`nav li a[href="#${id}"]`)
                    .parentElement.classList.add('active');
            }
        }
    });

    // Track all headers that have an `id` applied
    document.querySelectorAll('h1[id]').forEach(section => {
        observer.observe(section);
        sections.push(section);
    });
    document.querySelectorAll('h2[id]').forEach(section => {
        observer.observe(section);
        sections.push(section);
    });
    document.querySelectorAll('h3[id]').forEach(section => {
        observer.observe(section);
        sections.push(section);
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function closestDistanceToViewportEdge(el) {
    var rect = el.getBoundingClientRect();
    return Math.min(Math.abs(rect.top), Math.abs(rect.bottom));
}

/*-----------------------------
    Versions
------------------------------- */

function loadVersions(url) {
    // Disable versions before they are loaded
    let button = $('#version-container button');
    button.css('pointer-events', 'none');

    // Download JSON with version definitions for this particular design system (there is always one version file per design system at domain/version.json)
    $.getJSON(url, function(data) {
        // Get versions
        let versions = data.versions;

        // Load versions into the container and set active version
        let menu = $('#version-container .dropdown-menu');

        menu.html('');
        for (let v of versions) {
            // Make the version that fits the current deploy target URL to be the selected one
            let currentVersion = window.location.href.indexOf(v.url) !== -1;
            menu.append(
                `<a class="dropdown-item ${
          currentVersion ? 'checked' : ''
        }" href="https:${v.url}">${v.name}</a>`
            );
            if (currentVersion) {
                button.html(`${v.name}`);
            }
        }

        // Enable interaction with the menu
        button.css('pointer-events', '');
    }).fail(function() {
        // If we for some reason fail to download the versions or if the versions don't exist yet, just hide the button, so it doesn't confuse users
        button.hidden = true;
    });
}

/*-----------------------------
    Live sandbox manipulation
------------------------------- */

// Add listeners for actions
window.sandboxEngine.listener = function(message) {
    // Remove sandbox loaders when loaded correctly
    if (message.status === 'done' || message.status === 'error') {
        $(`.sandbox-loader-container[data-target="${message.sandboxId}"]`).remove();
    }
};

let trackedEditors = new Map();

// Load sandboxes that are present on the page
function loadSandboxes(url) {
    const asyncLoader = new Promise(resolve => {
        const engine = window.sandboxEngine;
        let targets = engine.getSandboxTargetsStartingWith('sandbox');
        if (targets && targets.length > 0) {
            // Build sandboxes
            engine.buildSandboxesSessionAuthorized(targets, url).then(() => {
                // Configure code mirror for all code targets on the page
                for (let target of targets) {
                    const code = window.sandboxEngine.getCodeForSandboxId(target);
                    const editorTarget = document.getElementById(
                        `codepreview-editable-${target}`
                    );
                    // In some cases, editor target might not exist, for example if user used no code mode
                    if (editorTarget) {
                        const editor = CodeMirror.fromTextArea(editorTarget, {
                            value: code,
                            lineNumbers: true,
                            mode: 'text/jsx',
                            theme: 'supernova',
                            styleActiveLine: { nonEmpty: true }
                        });
                        editor.getDoc().setValue(code);
                        editor.setOption('theme', 'supernova');
                        editor.on('change', editor => {
                            let code = editor.doc.getValue();
                            window.sandboxEngine.updateSandboxCode(target, code);
                        });
                        trackedEditors.set(target, editor);
                    }
                }
            });
        }
    });
}

/*-----------------------------
    Tooltips
------------------------------- */

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-tooltip="tooltip"]').tooltip();
});

/*-----------------------------
    Search in lists
------------------------------- */
function searchInList(target, list) {
    
    var value = $(target).val().toLowerCase().split(" ");
    // search for for multi-words search
    $("#"+ list + " .grid > .tile-item").each(function () {
        matchWords($(this).attr("data-keywords").toLowerCase(), value) ? $(this).removeClass("hidden") : $(this).addClass("hidden")
    });

    if ( $("#"+ list + " .grid > .tile-item:not(.hidden)").length === 0 )  {
        $("#"+ list + " .grid").hide();
        $("#"+ list + " .empty-state").show();
    } else {
        $("#"+ list + " .grid").show();
        $("#"+ list + " .empty-state").hide();
    }
}

function matchWords(subject, words) {
    const hasText = words.every((word) => subject.includes(word));

    return hasText;
}

/*-----------------------------
    Sandbox helpers
------------------------------- */

$('[data-toggle="copy-from-sandbox"]').click(function(event) {
    // Get code of the sandbox
    event.preventDefault();
    const sandboxId = $(this).attr('data-target');
    const code = window.sandboxEngine.getCodeForSandboxId(sandboxId);
    const cb = navigator.clipboard;
    cb.writeText(code);

    // Notify user
    $.toast({
        title: 'Component code copied to clipboard',
        position: 'bottom'
    });
});

$('[data-toggle="open-in-sandbox"]').click(async function(event) {
    // Get code of the sandbox
    event.preventDefault();
    const sandboxId = $(this).attr('data-target');
    await window.sandboxEngine.openInSandbox(sandboxId);
});

$('[data-toggle="reset-sandbox"]').click(async function(event) {
    // Reset sandbox code
    event.preventDefault();
    const sandboxId = $(this).attr('data-target');
    await window.sandboxEngine.resetSandboxToInitial(sandboxId);
    const code = window.sandboxEngine.getCodeForSandboxId(sandboxId);
    const editor = trackedEditors.get(sandboxId);
    if (editor) {
        editor.getDoc().setValue(code);
    }
});

/*-----------------------------
    Copy a link to heading
------------------------------- */

$('[data-copy-url="true"]').click(function(event) {
    // Get code of the sandbox
    event.preventDefault();
    const text = $(this).attr('href');
    const cb = navigator.clipboard;
    const pageURL = document.location.href.match(/(^[^#]*)/);
    const finalURL = pageURL[0] + text;
    cb.writeText(finalURL);

    // Notify user
    $.toast({
        title: 'URL to heading copied',
        position: 'bottom'
    });
});

/*-----------------------------
    Theme switching & mode preservation
------------------------------- */

$('.switch-theme').on('click', function(e) {
    // Toggle the dark / light mode when clicking the mode selector
    $('body').toggleClass('dark');
    e.preventDefault();

    // Store selection
    if ($('body').is('.dark')) {
        localStorage.setItem('sn.default.theme', 'dark');
    } else {
        localStorage.setItem('sn.default.theme', 'light');
    }
});

/*-----------------------------
    Storybook handling
------------------------------- */

$(document).ready(function() {
    // Ping storybook for each frame embedding it and check if it is reachable, if so, show the content,
    // otherwise show formatted error message
    document.querySelectorAll('iframe.storybook').forEach(iframe => {
        let src = iframe.getAttribute('src');
        fetch(src, {
                method: 'GET',
                cache: 'no-cache',
                mode: 'no-cors'
            })
            .then(_ => {
                // Do nothing for the correct response, as we can't detect whether
                // the page was truly reachable and contains storybook due to CORS protection
            })
            .catch(_ => {
                // Show error for the specific frame
                // [iframe] > storybook-container > storybook-state-wrapper > storybook-error.visible
                iframe.parentElement.parentElement.lastElementChild.style.visibility =
                    'visible';
                iframe.parentElement.parentElement.firstElementChild.style.visibility =
                    'hidden';
            });
    });
});

/*-----------------------------
    Read cookie
------------------------------- */
const getCookieValue = (name) => (
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
  )

/*-----------------------------
    Sidebar menu for mobile
------------------------------- */

$('#sidebarCollapse').on('click', function(e) {
    $('#side-navigation').toggleClass('nav-open');
    e.preventDefault();
});

$(document).on('click', '.nav-open .bg-sidebar', function(e) {
    $('#side-navigation').toggleClass('nav-open');
    e.preventDefault();
});

$('#mobile-menu-selector').on('click', function(e) {
    $('#side-navigation').removeClass('nav-open');
    e.preventDefault();
});

$('#versions-selector').on('click', function(e) {
    $('#side-navigation').removeClass('nav-open');
    e.preventDefault();
});


/*------------------------
   Component health status overlay
-------------------------- */

$(document).ready(function() {
    $('.content-block--component-health').on('click', function(e) {
        const blockId = $(this).data('block-id');
        // Toggle the overlay
        $('#overlay-' + blockId).toggleClass('d-none');
        e.preventDefault();
    });

    $('.health-overlay').on('click', function(e) {
        // Toggle the overlay
        $(this).toggleClass('d-none');
        e.preventDefault();
    });

    $('.health-overlay-content').on('click', function(e) {
        // Prevent closing the window
        e.stopPropagation();
    });
});
