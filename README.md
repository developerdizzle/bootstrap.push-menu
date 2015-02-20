# bootstrap.push-menu
Enables push menu functionality with Bootstrap-compliant classes.  Only takes effect at mobile resolution.

[Check out the demo here](http://developerdizzle.github.io/bootstrap.push-menu/demo.html)

![demo](http://i.imgur.com/zxkGuqp.gif)

## Installation

You can use Bower to install bootstrap.push-menu:

```console
$ bower install bootstrap.push-menu
```

## Configuration

Add the CSS file:

```html
<link rel="stylesheet" href="/bower_components/bootstrap.push-menu/dist/css/push-menu.css" />
```

and JS file:

```html
<script src="/bower_components/bootstrap.push-menu/dist/js/push-menu.js" />
```

Then minimally add the `data-toggle="push"` and `data-target` attributes to your `navbar-toggle` button:

```html
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle visible-xs" data-toggle="push" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              ...
```

For standard Bootstrap setups, `data-toggle="push"` replaces `data-toggle="collapse"` and `data-target` remains the same.  You will also want to replace the `collapsed` class from the `navbar-toggle` button with `visible-xs`, as well as the `navbar-collapse` and `collapse` classes from the target `#navbar`, because we are essentially replacing the collapse functionality with push.

The javascript will automatically add a few classes to your navigation elements.

## Options

These options can be placed on the button that toggles the push:

`data-target` is the selector for the navigation bar.  Defaults to `#navbar`.

`data-canvas` is the selector for the element that will be pushed.  This defaults to `body` and is almost always what you want.

`data-direction` is the direction that the canvas element and menu will slide.  Defaults to `left`.  **Note:** `right` does not work in standard Bootstrap navbar, as the navbar-toggle button will be on the right (and pushing it further right will place it off-screen).
