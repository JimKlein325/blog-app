import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        body: this.get('body'),
        post: this.get('post'),
      };
      this.set('name', "");
      this.set('date', "");
      this.set('body', "");
      this.sendAction('save1', params);
    }
  }
});
