import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component({
  template: require('./templates/input-box.html')
})
export default class InputBox extends Vue {
    @Prop([String])
    label: string;

    @Prop([String])
    placeholder: string;

    @Prop({type: String, required: true})
    name: string;

    @Prop({type: String, default: 'text'})
    type: string;

    @Prop({type: String})
    helper: string;

    @Prop({type: Boolean, default: false})
    required: boolean;

    @Prop({type: Boolean, default: false})
    readonly: boolean;

    @Prop({type: Boolean, default: false})
    small: false;

    @Prop({type: Boolean, default: false})
    large: false;

    /**
     * The classes for the input field
     * @return {string[]}
     */
    get inputClasses(): any[] {
        return [
            'form-control'
        ];
    }

    public test(): void {
        let default = '';
    }
}
