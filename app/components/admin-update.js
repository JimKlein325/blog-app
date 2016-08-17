import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
actions: {
  updatePostForm() {
    this.set('updatePostForm', true);
  },
  update1(post) {
    var params = {
      title: this.get('title'),
      date: this.get('date'),
      body: this.get('body'),
    };
    this.set('updatePostForm', false);
    this.sendAction('update1', post, params);
  }
}
});
