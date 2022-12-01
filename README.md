# SolidJS, Vite, PWA, CapacitorJS, Ionic web components

Typescript SolidJs, starter project including other tools like eslint, prettier, vitest.

## Usage

```bash
$ yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn dev` or `yarn ionic-serve`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `dist` folder.<br> It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is ready to be deployed!

### Build and run in android studio

```sh
$ yarn cap-build
$ yarn cap-open-android

# run the app in android studio
# debug in android studio, check logcat or in browser brave://inspect
```

### build and run in android directly

```sh
$ yarn cap-run-android
```

### Mobile development live reload

1. Connect your device in usb debug mode. Check with `adb devices`
2. run `yarn ionic-serve` This runs ionic cli, same as `ionic serve --external`. To use this in custom ionic project we provided "ionic:serve" npm command which finnally calls "yarn dev".
3. run `yarn ionic-live-reload` note: external ip should match ionic-serve

### test hardware device connection

```sh
$ adb device
$ native-run android --list
```

## Deployment

You can deploy the `dist` folder to any static host provider.

## Build release apk or playstore

- [generate release](https://ionicframework.com/docs/deployment/play-store)
- [sign release apk](https://developer.android.com/studio/publish/app-signing)

## references

- [SolidJS](https://www.solidjs.com/)
- [capacitor docs](https://capacitorjs.com/docs)
- [tutorial](https://ionicframework.com/docs/vue/your-first-app)
- [example app](https://framework7.io/)
- [solid integration](https://github.com/solidjs/solid/issues/59)
- [ionic packages](https://ionicframework.com/docs/intro/cdn)
- [ionic core](https://github.com/ionic-team/ionic-framework/blob/main/core/README.md)
- [SolidJS web components](https://giancarlobuomprisco.com/solid/building-widgets-solidjs-web-components)

## types issues

- [webcomponents in solidjs](https://stackoverflow.com/questions/72238932/how-to-use-a-web-component-in-a-solid-js-project)
- [declare web components in solid ts](https://github.com/solidjs/solid/issues/616#issuecomment-1144074821)
- [jsx intrinsicElements](https://github.com/ionic-team/stencil/issues/1090)
