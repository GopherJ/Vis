# Vis
Visjs Vue Adapter, Fork from [alexcode/vue2vis](https://github.com/alexcode/vue2vis) and finished `Graph3d` and `Network`, But I can't send pull request.

## Installation
```javascript
npm i GopherJ/Vis -S
```

## Usage
`main.js`
```javascript
import Vue from 'vue';
import Vis from 'Vis';
import 'vis/dist/vis.min.css';

Vue.use(Vis);
```


## Lists
```
- Timeline
- Graph2d
- Graph3d
- Network
```


## Usage
```
<graph-2d :items="items" :groups="groups" :options="options"></graph-2d>
<graph-3d :items="items" :options="options"></graph-3d>
<net-work :nodes="nodes" :edges="edges"></net-work>
<time-line :items="items" :groups="groups" :options="options"></time-line>
```

## More Infos
[visjs](http://visjs.org/index.html)
