<p align="center">
  <svg with="180" height="180" version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 529.000000 529.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,529.000000) scale(0.100000,-0.100000)"
fill="#00c851" stroke="none">
<path d="M2460 5279 c-343 -23 -675 -113 -989 -270 -418 -207 -760 -507 -1022
-899 -422 -628 -550 -1410 -354 -2157 138 -524 460 -1021 885 -1365 211 -170
513 -341 764 -433 303 -111 631 -162 981 -152 278 8 490 43 734 122 412 133
744 337 1056 650 313 312 517 644 650 1056 79 244 114 456 122 734 10 350 -41
678 -152 981 -92 251 -263 553 -433 764 -287 354 -708 657 -1135 814 -221 82
-494 139 -744 156 -163 11 -195 11 -363 -1z m570 -84 c454 -71 888 -263 1245
-552 115 -93 303 -282 394 -397 624 -788 735 -1861 285 -2757 -249 -497 -656
-904 -1153 -1153 -744 -373 -1634 -364 -2361 26 -219 117 -408 257 -594 437
-344 336 -592 768 -705 1232 -55 227 -66 328 -66 614 0 296 11 390 75 641 112
441 347 852 675 1179 253 253 551 449 884 580 166 65 397 127 561 149 63 9
129 18 145 20 75 10 515 -3 615 -19z"/>
<path d="M2426 4725 c-637 -57 -1162 -107 -1166 -112 -4 -4 -235 -497 -514
-1096 l-506 -1087 681 -973 c375 -534 689 -980 698 -989 15 -15 94 -10 1211
89 657 58 1199 108 1203 112 12 11 1017 2172 1017 2185 -1 6 -310 452 -688
991 l-688 980 -45 2 c-24 1 -565 -45 -1203 -102z m419 -822 c187 -289 343
-530 346 -535 3 -5 290 -17 638 -27 347 -10 634 -21 637 -24 3 -3 -171 -223
-386 -489 -216 -266 -396 -488 -401 -493 -4 -6 70 -277 171 -620 98 -335 177
-612 175 -614 -3 -2 -269 98 -592 223 -324 124 -592 226 -598 226 -5 0 -246
-162 -535 -359 -288 -198 -525 -359 -526 -358 0 1 14 270 32 597 18 327 33
615 33 640 l1 45 -505 389 c-278 214 -504 391 -501 393 2 2 280 77 617 167
l614 163 215 602 c118 330 217 601 220 601 3 0 158 -237 345 -527z"/>
</g>
</svg>
</p>

<h1 align="center">Dart</h1>

Dart is use for quickly setup new web project for POC task.

Technical Stack:
- Typescript
- SCSS
- HTML
- Webpack
- browser-sync (live reload)

# How to use

### Create new project:
```bash
dart --new project_name
```

### Run project in watch mode:
```bash
cd project_name
npm run dev
```

#### Typescript usage

Dart create project with typescript as code base. Just edit typescript config `tsconfig.json` as you want:

```
{
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": true,
      "module": "es6",
      "target": "es6",
      "allowJs": true,
      "moduleResolution": "node"
    }
}
```
