# Laravel + Vue + TypeScript Starter Project (MPA)

[![build status](https://travis-ci.org/chinloyal/lavuet.svg?branch=1.0.3)](https://travis-ci.org/chinloyal/lavuet)
[![total downloads](https://poser.pugx.org/chinloyal/lavuet/d/total.svg)](https://packagist.org/packages/chinloyal/lavuet)
[![latest stable version](https://poser.pugx.org/chinloyal/lavuet/v/stable.svg)](https://packagist.org/packages/chinloyal/lavuet)
[![license](https://poser.pugx.org/chinloyal/lavuet/license.svg)](https://packagist.org/packages/chinloyal/lavuet)

> Starter project template of full stack web development

## Demo

> Screenshots of a demo application that uses this template

The live demo can be found [here](http://addb-bakery.herokuapp.com).
The repo for the demo can be found [here](https://github.com/chinloyal/addb-bakery)

![Splash Page Screenshot](https://i.imgur.com/NLvWg5Y.png)
![Login Page Screenshot](https://i.imgur.com/o24XaE4.png)
![Login GIF](https://i.imgur.com/zARWtD4.png)

## Features

-   Laravel 6.x
-   Vue.js 2.5
-   TypeScript
-   Vuetify (Material Design)
-   Reusable dialog
-   NProgress on axios request
-   Hooks
-   Vuex (with secure storage)
-   Vuelidate

## Installation

> With composer

```bash
$ composer create-project --prefer-dist chinloyal/lavuet ProjectName
$ cd ProjectName
$ npm install
$ npm run dev
```

> From github

```bash
$ git clone https://github.com/chinloyal/lavuet.git ProjectName
$ cd ProjectName
$ composer install
$ npm install
$ npm run dev
$ cp .env.example .env
$ php artisan key:generate
```

## Usage

### Development

```bash
$ npm run watch # build and watch
$ npm run hot # serve with hot reload
```

### Production

```bash
$ npm run prod
```

### App Dialog

Firstly include the AppDialog component in your main layout blade file.
Now you can use the dialog from any component by accessing `$dialog` on your vue instance.

> Example

```ts
// Snippet of code
deleteItem() {
    this.$dialog.show({
        title: 'Confirm Delete',
        message: 'Are you sure you want to delete this item?',
        showCancelBtn: true,
        onConfirm() {
            // Delete item
        }
    })
}
```

Available Options on the app dialog

```
showCancelBtn?: boolean;
cancelBtnText?: string;
okBtnText?: string;
title: string;
message: string;
visible?: boolean;
dialogType?: string;
onConfirm?: Function;
```

'?' Means optional

### Secure Storage

If you have need to store data in local storage simply use the utility provided in the utils folder.

```ts
import { SecureStorage } from '@/utils/secure-storage';
const storage = SecureStorage.getInstance();

storage.set('key', 'value');
```

It uses localStorage but encrypts the data stored so it cannot be accessed from the console.

> NB: In your .env file for laravel set `MIX_APP_SECRET=my-secret-key` with a strong key.

### Hooks

Hooks allow you to enforce rules before you push, commit or even install a package.
There are a few hooks prebuilt you can use in the `.hooks` folder. For example you can enforce the use of `npm` over `yarn` and vice versa in the configure.js file. Next simply run the hook from your package.json preinstall script by adding `"preinstall": "node .hooks/frontend/configure.js"`.

Other things that can be enforced are branch names, how up to date the branch is with another branch and even linting.

## Note

-   This is not an SPA.
-   You can use vuetify components in blade files
