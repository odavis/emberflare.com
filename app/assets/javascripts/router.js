EmberFlare.Router.map(function() {
  this.route('signin');
  this.route('signup');
  this.resource("account");

  this.resource('entries', function() {
    this.route("new");
  });
});

EmberFlare.Router.reopen({
  location: "history",

  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});
