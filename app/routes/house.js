import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?per_page=all&chamber=house&subcommittee=false&apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON.results;
   });
 },
 actions: {
   getMembers(committee_id) {
     var key = config.myApiKey;
     var url = 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + committee_id + '&fields=members&apikey=' + key;
     var members =  Ember.$.getJSON(url).then(function(responseJSON) {
       return responseJSON.results[0].members;
    });
    this.set('committeeMembers', members);
    },
  }
});
