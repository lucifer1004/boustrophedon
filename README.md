# Udacity Feedreader Testing (code name: _boustrophedon_)

## Installation

1. Clone the repository

```sh
git clone git@github.com:lucifer1004/frontend-nanodegree-feedreader.git
cd frontend-nanodegree-feedreader
```

2. Run any http server (e.g., `http-server` which can be installed via `npm i -g http-server`) within the directory, then open the link it yields.

3. Or you can directly open the file `index.html` with any browser.

## Testing

### RSS Feeds

To make tests fail

- Delete all the content of the `allFeeds` array
- Delete its attributes, or set them to be empty
  
### The menu

To make tests fail

- Change the class of the body to anything other than 'menu-hidden'
- Change the following line in `app.js`

```js
    menuIcon.on('click', function() {
        $('body').toggleClass('menu-hidden');
    });
```

### New Feed Selection

To make tests fail

- Delete the content of the `allFeeds` array so that there is no more than one feed