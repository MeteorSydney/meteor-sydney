Meteor Sydney User Group Site
-----------------------------

### Installation

Install by cloning the repository using `git clone https://github.com/aaronthorp/meteor-sydney.git`.

Each step is stored in its own branch. To checkout each stage, in the folder type `git checkout -b step1` and the folder will now be the `step1` branch commit.

### Step 1 :: Updating the Folder Structure

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
