Meteor Sydney User Group Site
-----------------------------

**Meteor Version:** v0.9.2.2

### Installation

Install by cloning the repository using `git clone https://github.com/aaronthorp/meteor-sydney.git`.

Each step is stored in its own branch. To checkout each stage, in the folder type `git checkout step1` and the folder will now be the `step1` branch commit.

To run this application, update the packages by typing `meteor update --packages-only`

And to ensure the application is running in the same version it was developed, run `meteor update --release 0.9.2.2`

To run simply type `meteor` in the folder and point your browser to [http://localhost:3000](http://localhost:3000) to view the application.

### Step 1 :: Update the Folder Structure

Meteor Document Reference: [http://docs.meteor.com/#structuringyourapp](http://docs.meteor.com/#structuringyourapp)

Formatting the folder structure is a great way to seperate the code from client and server and put it in a logical and easy to understand hierarchy.

```
.meteor
client
  └── subscriptions.js
  └── lib
    └── router
      └── router.js
    └── accounts
      └── accounts.js
  └── stylesheets
    └── style.css
  └── views
    └── landing
      ├── landing.html
      └── landing.js
    └── layout
      ├── index.html
      ├── header.html
      ├── footer.html
      ├── loading.html
      └── 404.html
collections
  └── collections.js
lib
  └── {empty}
public
  ├── fonts
  └── img
server
  └── publish
    └── publish-{collection}.js
  └── permissions
    └── permission-{collection}.js
  └── methods
```

### Step 2 :: Adding Authentication

Add and configure the authentication packages in the application.

Meteor Document Reference: [http://docs.meteor.com/#accounts_api](http://docs.meteor.com/#accounts_api)

#### Required Packages

  - Accounts (Base) :: `meteor add accounts-base`
  - Accounts (UI) :: `meteor add accounts-ui`
  - Accounts (GitHub) :: `meteor add accounts-github`
  - Accounts (Twitter) :: `meteor add accounts-twitter`
  - Accounts (MeetUp) :: `meteor add accounts-meetup`

The file `test.html` shows an example of how to use and configuration the login providers.

### Step 3 :: Iron Router and Routing Pages

Add Iron Router, routes and configure headers and footers for the application

#### Required Packages

  - [Iron Router](https://atmospherejs.com/iron/router) :: `meteor add iron:router`

### Step 4 :: Bootstrapping

Add Bootstrap package and modify layout template to reflect theme.

#### Required Packages
  - [Bootstrap 3](https://atmospherejs.com/pinglamb/bootstrap3) :: `meteor add pinglamb:bootstrap3`

### Step 5 :: Login Forms and Route Authentication

Use `git checkout step4` in the folder to move to this branch or [view the branch on GitHub](https://github.com/aaronthorp/meteor-sydney/tree/step4).
