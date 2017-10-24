import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./templates/text-area.html'),
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
        readonly: {
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
        plainText: {
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
            type: String,
            default: null,
            required: false
        }
    }
})
export default class TextArea extends Vue {
    /**
     * The classes for the input field
     * @return {string[]}
     */
     get inputClasses(): any[] {
         let initialArray = ['form-control'];

         if (this.$props.large) {
             initialArray.push('form-control-lg');
         }

         if (this.$props.small) {
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
      * Emit an event that the enter key has been
      * pressed by the user
      */
     public enterKeyPressed(): void {
         this.$emit('enter');
     }

     /**
      * Emit an input event up to the parent
      * @param {[type]} value
      */
     public updateValue(value): void {
         this.$emit('input', value);
     }
 }
