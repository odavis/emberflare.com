Ember.Application.initializer({
  name: 'authentication',
  initialize: function(container, application) {
    Ember.SimpleAuth.setup(container, application, {
      routeAfterLogin: "entries.index",
      serverTokenRoute: "session"
    });
  }
});