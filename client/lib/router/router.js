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

// Global router actions 

Router.onBeforeAction('loading');

// Configure the routes for the router

Router.map(function() {

  this.route('landing', {
    template: 'landingBS',
    path: '/'
  });

  this.route('page2', {
    path: '/page2'
  });
});
