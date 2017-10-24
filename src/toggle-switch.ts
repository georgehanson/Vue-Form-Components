import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./templates/toggle-switch.html'),
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        label: {
            type: String,
            required: false
        },
        labels: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        },
        helper: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            default: false,
            required: false
        },
        inline: {
            type: Boolean,
            default: false,
            required: false
        },
        invalid: {
            type: Boolean,
            default: false,
            required: false
        },
        errorMessage: {
            type: String,
            required: false,
            default: null
        },
        metaUnderLabel: {
            type: Boolean,
            default: false,
            required: false
        },
        checked: {
            type: Boolean,
            default: false
        }
    }
})
export default class ToggleSwitch extends Vue {
     /**
      * Emit a change event up to the parent
      * @param {[type]} value
      */
      public updateValue(value): void {
          this.$emit('change', value);
      }
  }
