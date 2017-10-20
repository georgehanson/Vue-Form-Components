import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component({
    template: require('./templates/input-box.html')
})
export default class InputBox extends Vue {
    @Prop([String])
    public label: string;

    @Prop([String])
    public placeholder: string;

    @Prop({type: String, required: true})
    public name: string;

    @Prop({type: String, default: 'text'})
    public type: string;

    @Prop({type: String})
    public helper: string;

    @Prop({type: Boolean, default: false})
    public required: boolean;

    @Prop({type: Boolean, default: false})
    public readonly: boolean;

    @Prop({type: Boolean, default: false})
    public small: boolean;

    @Prop({type: Boolean, default: false})
    public large: boolean;

    @Prop({type: Boolean, default: false})
    public plainText: boolean;

    @Prop({type: Boolean, default: false})
    public inline: boolean;

    @Prop({type: Boolean, default: false})
    public invalid: boolean;

    @Prop({type: String, default: null})
    public errorMessage: string;

    @Prop({type: Boolean, default: false})
    public metaUnderLabel: boolean;

    @Prop({type: String, default: null})
    public value: string;

    /**
     * The classes for the input field
     * @return {string[]}
     */
     get inputClasses(): any[] {
         let initialArray = ['form-control'];

         if (this.large && ! this.usingAddons) {
             initialArray.push('form-control-lg');
         }

         if (this.small && ! this.usingAddons) {
             initialArray.push('form-control-sm');
         }

         if (this.plainText) {
             initialArray[0] += '-plaintext';
         }

         if (this.invalid) {
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
