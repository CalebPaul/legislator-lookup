import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('senate');
  this.route('subcommittee', {path: '/subcommittee/:committee_id'});
  this.route('house');
  this.route('committee-members', {path: '/committee-members/:committee_id'});
});

export default Router;
