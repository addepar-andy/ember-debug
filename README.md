# ember-debug
Some utilities for debugging ember

## Installation

1. Clone the repo.
2. In Chrome, go to `chrome://extensions`.
3. Enable Developer moe in the upper right.
4. Click on `Load unpacked extension...`.
5. Find the directory you cloned this repo into.
6. Wowow.

## Usage

In the chrome inspector javascript console, you can now use these functions:

### `emv`
Short for EMber View. Its equivalent to typing `Ember.View.Views[thing]`.
You can also omit the annoying 'ember' and just type the id (string and number both work)

```javascript
emv('ember2344')
//> Class {_outlets: Object, currentState: Object, _state: "inDOM", _isVisible: true, _childViews: Array[3]…}
```

### `emkeys`
Get the actual properties on an ember object.

```javascript
emkeys($E)
//> ['target', 'namespace', 'store', 'credential', 'location', 'prefilledUsername', 'username',...]
```

### `emshow`
Like `emkeys`, but also returns the values. Produces a sane javascript object that you can look at.

```javascript
emshow($E)
//> {'target': Class, 'location': '/url', 'prefilledUsername': 'Bob@gmail.com', ...}
```
