import Ember from 'ember';

export default Ember.Component.extend({
  isInEditMode: false,
  actions: {
    delete1() {
      this.sendAction('delete1', this.get('comment'));
    },
      updateCommentForm() {
        this.set('isInEditMode', true);
      },
      update1(comment) {
        var params = {
          name: this.get('name'),
          date: this.get('date'),
          body: this.get('body')
        };
        this.set('isInEditMode', false);
        this.sendAction('update1', comment, params);
      }
    },


});
