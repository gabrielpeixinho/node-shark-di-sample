# node-shark-di-sample


## Install

```bash
    $ git clone https://github.com/gabrielpeixinho/node-shark-di-sample.git
    $ cd node-shark-di-sample
    $ npm install
```
    
Run the sample application and check results.
```bash
    $ node index.js
    attack using sword: 2.5 damage
```

## Make a few changes and test again.

Edit the "index.js" file and change the weapon bind from sword to shuriken.

```javascript
    container.bind('weapon', shuriken); 
```

Run sample again
```bash
    $ node index.js
    attack using shuriken: 1 damage
```
