# CSS bundling

### Source
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
    ├── bootstrap/
    │   └── (package contents)
    └── ...
```

### Output
```
project/
└── dist/
    ├── css/
    │   └── bundle.css
    ├── img/
    │   ├── index.png
    │   └── ui.png
    └── node_modules/
       ├── bootstrap/
       │   └── (necessary assets)
       └── ...
```
