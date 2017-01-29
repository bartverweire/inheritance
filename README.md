# inheritance

This is a demo project to show that building an  ionic project with the --prod tag may break inheritance.

The project demonstrates this using the ngOnInit method.

Checkout the version with tag 'notworking' to get the problem : 

Building the app using any of 
```
ionic serve
ionic run browser
```
will result in the following messages in the console
```
base.ts:6BasePage - constructor
home.ts:15HomePage - constructor
base.ts:10BasePage - ngOnInit
```
However, building the app using
```
ionic build browser --prod
```

The result is 
```
main.js:87248BasePage - constructor
main.js:35210HomePage - constructor
```

The ngOnInit method is not called.

# Workaround

Version with tag 'workaround' contains a workaround, i.e. having the page HomePage explicitly implement the ngOnInit, ngOnDestroy methods.

```
  ngOnInit() {
    console.log("HomePage - ngOnInit");
    super.ngOnInit();
  }

  ngOnDestroy() {
    console.log("HomePage - ngOnDestroy");
    super.ngOnDestroy();
  }
```

Now, even when building the app using
```
ionic build browser --prod
```

The parent ngOnInit method is called when explicitly called.

```
main.js:87256BasePage - constructor
main.js:35210HomePage - constructor
main.js:35213HomePage - ngOnInit
main.js:87259BasePage - ngOnInit
```



