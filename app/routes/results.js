import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    var birthday = "";
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' + key + '&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      birthday = responseJSON.results[0].birthday;
      var returnArray = {'legislators': responseJSON.results, 'birthday': birthday};
      return returnArray;
   });
  }
});
