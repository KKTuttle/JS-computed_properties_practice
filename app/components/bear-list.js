import Ember from 'ember';

export default Ember.Component.extend({
  totalBears: Ember.computed('model.[]', function() {
    return this.get('model.length');
  }),
  bears: Ember.computed('model.[]', 'page', function() {
    var page = this.get('page');
    return this.get('model.[]', 'page').slice(page, page + 5);
  }),
  page: 0,
  actions: {
    showMore: function() {
      this.incrementProperty('page', 5);
    }
  }

});
