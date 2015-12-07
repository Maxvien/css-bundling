# CSS bundling
> Bundle CSS and its assets using PostCSS.

## Overview
This is a practice for bundling CSS and its assets: images, fonts, etc.  
It's troublesome to bundle CSS files to a single CSS, because CSS can refer external assets and they are often written with relative paths.
So, we have issues:

- How to resolve relative paths when bundled
- How to copy proper assets from packages installed by npm (or Bower)

[PostCSS](https://github.com/postcss/postcss) is a tool for transforming styles and it has many useful plugins to handle codes and assets.  
Once we set up the bundle task using PostCSS, we can code CSS as usual.

```css
@import "bootstrap";            /* "bootstrap.css" installed by npm will be bundled automatically! */
@import "components/ui.css";    /* Local CSS is also bundled! */
/* And all assets used in "bootstrap" and "ui.css" will automatically be copied to proper directory! */

.index {
  background-image: url(../img/index.png);    /* Don't be afraid to use relative path! */
}
```

## Structure
### Source
`src/css/index.css` is the main CSS file, and it imports sub compoents and npm packages.  
Each CSS file refers external assets using relative path.

**Directory:**
```
project/
├── src/
│   ├── css/
│   │   ├── index.css
│   │   └── components/
│   │       └── ui.css
│   └── img/
│       ├── index.png
│       └── ui.png
└── node_modules/
    └── bootstrap/
        └── (package contents)
```

**Reference:**
```
src/css/index.css
├──> @import "bootstrap"
│    └──> url("../fonts/glyphicons-halflings-regular.eot")
├──> @import "components/ui.css"
│    └──> url("../../img/ui.png")
└──> url("../img/index.png")
```

### Output
CSS files are bundled to `dist/css/bundle.css`.  
It refers a number of external assets and relative paths are resolved automatically.  
Of course every necessary asset is copied to proper directory in `dist`.

**Directory:**
```
project/
└── dist/
    ├── css/
    │   └── bundle.css
    ├── img/
    │   ├── index.png
    │   └── ui.png
    └── node_modules/
        └── bootstrap/
            └── (necessary assets ONLY)
```

**Reference:**
```
dist/css/bundle.css
├──> url("../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot")
├──> url("../img/ui.png")
└──> url("../img/index.png")
```
