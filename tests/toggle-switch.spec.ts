import { suite, test, slow, timeout } from "mocha-typescript";
import {mount} from "avoriaz";
import ToggleSwitch from "./../src/toggle-switch.ts";
import expect from 'expect';
import {StandardSlot} from "./resources.ts";
import sinon from 'sinon';

suite("ToggleSwitch", () => {
    test("it can set the name", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active'
            }
        });

        expect(wrapper.first('input').hasAttribute('name')).toBe(true);
        expect(wrapper.first('input').getAttribute('name')).toBe('active');
    });

    test("the label gets output", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'My Input'
            }
        });

        expect(wrapper.first('label').text()).toBe('My Input');
    });

    test("if no label is specified it does not show it", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active'
            }
        });
        expect(wrapper.find('.col-form-label').length).toBe(0);
    });

    test("if no helper is provided it does not show one", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
            }
        });
        expect(wrapper.find('small.form-text').length).toBe(0);
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(false);
    });

    test("if helper text is provided it does show it", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                helper: 'Please select a active'
            }
        });

        expect(wrapper.find('small.form-text').length).toBe(1);
        expect(wrapper.first('small.form-text').text()).toBe("Please select a active");
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(true);
    });

    test("if the field is not required it does not have the required attributes", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
            }
        });

        expect(wrapper.find('span.required').length).toBe(0);
    });

    test("if the field is required it have the required attributes", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'Your Email',
                required: true
            }
        });

        expect(wrapper.find('span.required').length).toBe(1);
        expect(wrapper.first('span.required').text()).toBe('*');
    });

    test("the input can be inline", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
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
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'My Label',
            }
        });

        expect(wrapper.first('.form-group').hasClass('row')).toBe(false);
    });

    test("the field can be marked as invalid", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'My Label',
                invalid: true,
                errorMessage: "There was an error"
            }
        });

        expect(wrapper.first('.form-group').contains('.invalid-feedback')).toBe(true);
        expect(wrapper.first('.invalid-feedback').text()).toBe("There was an error");
    });

    test("the field does not show invalid feedback if it has not been marked as invalid", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'My Label',
                errorMessage: "There was an error"
            }
        });

        expect(wrapper.first('.form-group').contains('.invalid-feedback')).toBe(false);
    });

    test("the field does not show invalid feedback if no active has been passed", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'My Label',
                invalid: true
            }
        });

        expect(wrapper.first('.invalid-feedback').contains('.invalid-feedback')).toBe(false);
    });

    test("the helper text can be placed under the label", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
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
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'My Label',
                helper: 'This is helper text',
                inline: true,
                metaUnderLabel: true,
                invalid: true,
                erroractive: 'There was an error'
            }
        });

        expect(wrapper.first('.col-sm-4').contains('.invalid-feedback')).toBe(true);
        expect(wrapper.first('.col-sm-8').contains('.invalid-feedback')).toBe(false);
    });

    test("it emits an event on change", () => {
        let wrapper: any = mount(ToggleSwitch, {
            propsData: {
                name: 'active',
                label: 'My Label'
            }
        });
        const spy = sinon.spy(wrapper.vm, '$emit');
        wrapper.first('input').trigger("change");
        expect(spy.args[0][0]).toBe('change')
    });
});
