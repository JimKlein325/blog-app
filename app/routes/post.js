import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    save2(params) {
      var newComment = this.store.createRecord('comment', params);

      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', params.city);
    },

    update2(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
      this.transitionTo('post');
    },
    delete2(comment) {
      comment.destroyRecord();
      debugger;
      var comment_id = comment.id.toString();
      debugger;
      var commentToDelete = this.store.findRecord(comment_id);
      commentToDelete.destroyRecord();
      this.transitionTo('post');
      debugger;
      //comment.post.get('comments').deleteObject(params.comment);
    }
  }
});
