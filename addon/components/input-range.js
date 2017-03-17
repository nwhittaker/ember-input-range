import Ember from 'ember';
import layout from '../templates/components/input-range';
const { Component, computed } = Ember;

function noOp(){}

export default Component.extend({
  layout,
  disabled: false,

  attributeBindings: ['low', 'high'],
  min: 0, // spec default
  max: 100, // spec default
  step: 1, // spec default

  /**
    "10,50"
  */
  values: '0,0',

  // events
  oninput: null,
  onlowinput: null,
  onhighinput: null,
  onchange: noOp,
  onlowchange: noOp,
  onhighchange: noOp,
  low: computed('values', function() {
    const values = this.get('values').split(',');
    return values[0];
  }),
  high: computed('values', function() {
    const values = this.get('values').split(',');
    return values[1];
  }),
  lowPercent: computed('low', 'min', 'max', function(){
    const { low, min, max } = this.getProperties('low', 'min', 'max');
    return 100 * ((low - min) / (max - min)) - 1;
  }),
  highPercent: computed('high', 'min', 'max', function(){
    const { high, min, max } = this.getProperties('high', 'min', 'max')
    return 100 * ((high - min) / (max - min)) - 1;
  }),
  color: 'transparent',
  classNames: ['-input-range'],
  actions: {
    onInput(property, event){
      const { oninput, onhighinput, onlowinput } = this;
      const value = event.target.value;
      const values = `${this.get('low')},${this.get('high')}`;

      this.set(property, value);

      if (oninput) {
        this.oninput(values, event);
      }

      if (property === 'high' && onhighinput) {
        this.onhighinput(value, event);
      }

      if (property === 'low' && onlowinput) {
        this.onlowinput(value, event);
      }
    },
    onChange(property, event){
      const value = event.target.value;
      const { low, high } = this.getProperties('low', 'high');

      const values = `${low},${high}`;

      this.set(property, value);

      this[`on${property}change`](value, event);
      this.onchange(values, event);
    }
  }
});
