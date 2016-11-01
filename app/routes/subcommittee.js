import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + params.committee_id + '&apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log('comm_id: '+params.committee_id);
      console.log('url_id: '+url);
      console.log('response: '+responseJSON.results);
      return responseJSON.results;
   });
 }
});
