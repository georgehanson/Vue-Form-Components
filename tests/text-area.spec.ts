import { suite, test, slow, timeout } from "mocha-typescript";
import {mount} from "avoriaz";
import SelectList from "./../src/text-area.ts";
import expect from 'expect';
import {StandardSlot} from "./resources.ts";
import sinon from 'sinon';

suite("TextArea", () => {
    test("it can set the name", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message'
            }
        });

        expect(wrapper.first('textarea').hasAttribute('name')).toBe(true);
        expect(wrapper.first('textarea').getAttribute('name')).toBe('message');
    });

    test("the label gets output", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Input'
            }
        });

        expect(wrapper.first('label').text()).toBe('My Input');
    });

    test("if no label is specified it does not show it", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message'
            }
        });
        expect(wrapper.find('label').length).toBe(0);
    });

    test("if no placeholder is specified it does not show one", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message'
            }
        });
        expect(wrapper.find('option').length).toBe(0);
    });

    test("if a placeholder is specified it shows one", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                placeholder: 'My Placeholder'
            }
        });

        expect(wrapper.first('textarea').hasAttribute('placeholder')).toBe(true);
        expect(wrapper.first('textarea').getAttribute('placeholder')).toBe('My Placeholder');
    });

    test("if no helper is provided it does not show one", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
            }
        });
        expect(wrapper.find('small.form-text').length).toBe(0);
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(false);
    });

    test("if helper text is provided it does show it", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                helper: 'Please select a message'
            }
        });

        expect(wrapper.find('small.form-text').length).toBe(1);
        expect(wrapper.first('small.form-text').text()).toBe("Please select a message");
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(true);
    });

    test("if the field is not required it does not have the required attributes", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
            }
        });

        expect(wrapper.find('span.required').length).toBe(0);
        expect(wrapper.first('textarea').hasAttribute('required')).toBe(false);
    });

    test("if the field is required it have the required attributes", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'Your Email',
                required: true
            }
        });

        expect(wrapper.find('span.required').length).toBe(1);
        expect(wrapper.first('span.required').text()).toBe('*');
        expect(wrapper.first('textarea').hasAttribute('required')).toBe(true);
    });

    test("if the input is required but no label has been specified the input field has the required attribute", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                required: true
            }
        });

        expect(wrapper.first('textarea').hasAttribute('required')).toBe(true);
    });

    test("the input can have the readonly attribute", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                readonly: true,
            }
        });

        expect(wrapper.first('textarea').hasAttribute('readonly')).toBe(true);
    });

    test("by default the input does not have a readonly attribute", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message'
            }
        });

        expect(wrapper.first('textarea').hasAttribute('readonly')).toBe(false);
    });

    test("by default the class for the input is form-control", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message'
            }
        });

        expect(wrapper.first('textarea').hasClass('form-control')).toBe(true);
    });

    test("the form-control can be large", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                large: true
            }
        });

        expect(wrapper.first('textarea').hasClass('form-control')).toBe(true);
        expect(wrapper.first('textarea').hasClass('form-control-lg')).toBe(true);
    });

    test("the form-control can be small", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                small: true
            }
        });

        expect(wrapper.first('textarea').hasClass('form-control')).toBe(true);
        expect(wrapper.first('textarea').hasClass('form-control-sm')).toBe(true);
    });

    test("the input can be inline", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
                inline: true
            }
        });

        expect(wrapper.find('.col-sm-4').length).toBe(1);
        expect(wrapper.first('.form-group').hasClass('row')).toBe(true);
        expect(wrapper.first('.col-sm-4').contains('label')).toBe(true);
        expect(wrapper.first('label').hasClass('col-form-label')).toBe(true);
        expect(wrapper.find('.col-sm-8').length).toBe(1);
    });

    test("if the input is not inline, it does not have the row class", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
            }
        });

        expect(wrapper.first('.form-group').hasClass('row')).toBe(false);
    });

    test("the field can be marked as invalid", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
                invalid: true,
                errorMessage: "There was an error"
            }
        });

        expect(wrapper.first('.form-control').hasClass('is-invalid')).toBe(true);
        expect(wrapper.first('.form-group').contains('.invalid-feedback')).toBe(true);
        expect(wrapper.first('.invalid-feedback').text()).toBe("There was an error");
    });

    test("the field does not show invalid feedback if it has not been marked as invalid", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
                errorMessage: "There was an error"
            }
        });

        expect(wrapper.first('.form-control').hasClass('is-invalid')).toBe(false);
        expect(wrapper.first('.form-group').contains('.invalid-feedback')).toBe(false);
    });

    test("the field does not show invalid feedback if no message has been passed", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
                invalid: true
            }
        });

        expect(wrapper.first('.form-control').hasClass('is-invalid')).toBe(true);
        expect(wrapper.first('.invalid-feedback').contains('.invalid-feedback')).toBe(false);
    });

    test("the helper text can be placed under the label", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
                helper: 'This is helper text',
                inline: true,
                metaUnderLabel: true
            }
        });

        expect(wrapper.first('.col-sm-4').contains('.form-text')).toBe(true);
        expect(wrapper.first('.col-sm-8').contains('.form-text')).toBe(false);
    });

    test("the error text can be placed under the label", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
                helper: 'This is helper text',
                inline: true,
                metaUnderLabel: true,
                invalid: true,
                errorMessage: 'There was an error'
            }
        });

        expect(wrapper.first('.col-sm-4').contains('.invalid-feedback')).toBe(true);
        expect(wrapper.first('.col-sm-8').contains('.invalid-feedback')).toBe(false);
    });

    test("it emits an event on input", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label'
            }
        });
        const spy = sinon.spy(wrapper.vm, '$emit');
        wrapper.first('.form-control').trigger("input");
        expect(spy.args[0][0]).toBe('input')
    });

    test("it emits an event on enter key", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label'
            }
        });
        const spy = sinon.spy(wrapper.vm, '$emit');
        wrapper.first('.form-control').trigger("keyup.enter");
        expect(spy.args[0][0]).toBe('enter')
    });

    test("the value of the textarea can be set", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'message',
                label: 'My Label',
                value: 'This is the content of the textarea'
            }
        });

        expect(wrapper.first('textarea').value()).toBe('This is the content of the textarea');
    });
});
