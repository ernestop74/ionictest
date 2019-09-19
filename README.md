# Ionic development test

The objective of this test, is to verify programmers' Ionic development skill level. It requires developing a simple app, and delivering code that can be compiled, tested and run without any modifications.

## Requirements

- You must Fork this repository.
- Create a basic Ionic app.
- Your app must have 3 views, as detailed below.
- It must run on Android and iOS.
- It must preserve user data. If the user does not log out, it must autologin.

## Views

- **Login**. You must ask for an email and password. The form must enforce a valid email address. There must be a Login button. When pressing that button, GET https://jsonplaceholder.typicode.com/users and validate that the user exists. Disregard the password.

- **Main view**. GET https://jsonplaceholder.typicode.com/posts and show a scrollable list with its element's title. If the user taps an item, open the Detail view. It must contain a Logout button, that logs out the current user and goes back to the Login view.

- **Detail view**. GET https://jsonplaceholder.typicode.com/posts/X, where X is the post's Id, provided from the Main view. Show all its details in a new view. It must have a Back button, to go back to the Main view.

## Deliverable

When your app is ready, upload it to GitHub as a public repo, and provide its URL. You must make sure that it runs on Android and iOS without any problems. If the app does not run, the test will automatically fail.
