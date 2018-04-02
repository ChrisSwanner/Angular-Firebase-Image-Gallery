// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: "AIzaSyDl5xfnh84EzVIlEEdP8Na7Aj64AWn0VYM",
    authDomain: "angular-gallery-8b6c9.firebaseapp.com",
    databaseURL: "https://angular-gallery-8b6c9.firebaseio.com",
    projectId: "angular-gallery-8b6c9",
    storageBucket: "angular-gallery-8b6c9.appspot.com",
    messagingSenderId: "723819953423"
  }
};
