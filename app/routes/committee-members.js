import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + params.committee_id + '&fields=members&apikey=' + key;
    console.log(url);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results[0].members);
      return responseJSON.results[0].members;
   });
 }
});
