import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./templates/select-list.html'),
    props: {
        label: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text',
            required: false
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
        disabled: {
            type: Boolean,
            default: false,
            required: false
        },
        small: {
            type: Boolean,
            default: false,
            required: false
        },
        large: {
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
        value: {
            type: [String, Number],
            required: false
        },
        options: {
            type: Array,
            default: () => { return []; },
            required: false
        },
        keyName: {
            type: String,
            default: 'id'
        },
        labelName: {
            type: String,
            default: 'label'
        }
    }
})
export default class SelectList extends Vue {
    /**
     * The classes for the input field
     * @return {string[]}
     */
     get inputClasses(): any[] {
         let initialArray = ['form-control'];

         if (this.$props.large && ! this.usingAddons) {
             initialArray.push('form-control-lg');
         }

         if (this.$props.small && ! this.usingAddons) {
             initialArray.push('form-control-sm');
         }

         if (this.$props.plainText) {
             initialArray[0] += '-plaintext';
         }

         if (this.$props.invalid) {
             initialArray.push('is-invalid');
         }

         return initialArray;
     }

     /**
      * Check if any add-ons are being used
      *
      * @return {boolean}
      */
      get usingAddons(): boolean {
          return ! (Object.keys(this.$slots).length === 0 && this.$slots.constructor === Object)
      }

     /**
      * Check to see if a slot exists
      * @param  {string}  name [description]
      * @return {boolean}      [description]
      */
      public slotExists(name: string): boolean {
          return (name in this.$slots);
      }

     /**
      * Emit an input event up to the parent
      * @param {[type]} value
      */
      public updateValue(value): void {
          this.$emit('input', value);
      }

      public optionIsSelected(option: any): boolean {
          return true;
      }
  }
