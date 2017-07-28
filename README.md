# validation-messages - Angular 2 module for displaying validation messages on template driven forms

[![npm version](https://badge.fury.io/js/validation-messages.svg)](https://badge.fury.io/js/validation-messages)
[![Build Status](https://travis-ci.org/rahulbhooteshwar/validation-messages.svg?branch=master)](https://travis-ci.org/rahulbhooteshwar/validation-messages)
[![Coverage Status](https://coveralls.io/repos/github/rahulbhooteshwar/validation-messages/badge.svg?branch=master)](https://coveralls.io/github/rahulbhooteshwar/validation-messages?branch=master)
[![dependency Status](https://david-dm.org/rahulbhooteshwar/validation-messages/status.svg)](https://david-dm.org/rahulbhooteshwar/validation-messages)
[![devDependency Status](https://david-dm.org/rahulbhooteshwar/validation-messages/dev-status.svg?branch=master)](https://david-dm.org/rahulbhooteshwar/validation-messages#info=devDependencies)

## Demo

View all the directives in action at https://rahulbhooteshwar.github.io/validation-messages

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `validation-messages` via:
```shell
npm install --save validation-messages
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `validation-messages`:
```js
map: {
  'validation-messages': 'node_modules/validation-messages/bundles/validation-messages.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'validation-messages';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'validation-messages';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'validation-messages';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Rahul Bhooteshwar. Licensed under the MIT License (MIT)

