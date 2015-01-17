mux
===========
Mobile webapp data model build with flux.
<br />
![logo](http://switer.qiniudn.com/mux-verti.png?imageView/2/w/100)

## browser support
![browser support](https://ci.testling.com/switer/muxjs.png)

## Installation
**browser**
```html
<script src="mux.js"></script>
```
**node.js**
```bash
npm install muxjs --save
```
## Usage
```js
var Comment = Mux.extend({
    props: function () {
        return {
            title: 'states model',
            author: 'switer',
            content: 'Mobile webapp data model build with flux.',
            replys: [{
                autor: 'guankaishe',
                id: 'xxxxxxxx',
                content: 'awesome !'
            }]
        }
    },
    computed: {

    }
})

var comment = new Comment()
comment.watch('content', function (next, pre) {
    console.log(next) // --> update !
    console.log(pre) // --> states model
})
comment.set('content', 'update !')
console.log(comment.content) // update !
```

## API

## Example