import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    },
    save(params) {
      //debugger;
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    },
    update3(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('admin');
    },
    destroyPost(post) {
      //debugger;
      post.destroyRecord();
      this.transitionTo('admin');
    }
  },

});
