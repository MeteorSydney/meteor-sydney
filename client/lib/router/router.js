// Configure the template pages for the router

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading',
  yieldTemplates: {
    headerBS: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});


// Configure an authentication mode for the Router

var loginRequired = {
  name: 'login',
  shouldRoute: false,
  layout: 'layout'
};

// Global router actions

Router.onBeforeAction('loading');

// Configure the routes for the router

Router.map(function() {

  this.route('landing', {
    template: 'landingBS',
    path: '/'
  });

  this.route('login', {
    template: 'login',
    path: '/login'
  });

  this.route('logout', {
    path: '/logout',
    onBeforeAction: function() {
      Meteor.logout(function() {
        Router.go('landing');
      });
    }
  });


  this.route('page2', {
    path: '/page2'
  });

  this.route('members', {
    path: '/members',
    loginRequired: loginRequired
  });

});
