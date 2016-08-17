import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //debugger;
    var posts = this.store.findAll('post');
    //debugger;
    return this.store.findAll('post');
  },
});
