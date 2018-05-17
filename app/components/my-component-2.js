import { debounce } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['my-component-2'],

  init(...args) {
    this._super(...args);
    
    this.set('random', Math.random());
  },
  
  didInsertElement(...args) {
    this._super(...args);
    
    this.set('handleScroll', () => debounce(this, 'fireMe', 150));
    
    this.element.addEventListener('scroll', this.get('handleScroll'));
  },
  
  willDestroyElement(...args) {
    this._super(...args);
    
    this.element.removeEventListener('scroll', this.get('handleScroll'));
  },

  fireMe() {
    console.log(this.get('random'));
  }
});
