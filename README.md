# CSS bundling

### Source
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
            └── (necessary assets)
```

**Reference:**
```
dist/css/bundle.css
├──> url("../node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot")
├──> url("../img/ui.png")
└──> url("../img/index.png")
```
