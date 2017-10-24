import { suite, test, slow, timeout } from "mocha-typescript";
import {mount} from "avoriaz";
import SelectList from "./../src/select-list.ts";
import expect from 'expect';
import {StandardSlot} from "./resources.ts";
import sinon from 'sinon';

suite("SelectList", () => {
    test("it can set the name", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title'
            }
        });

        expect(wrapper.first('select').hasAttribute('name')).toBe(true);
        expect(wrapper.first('select').getAttribute('name')).toBe('title');
    });

    test("the label gets output", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Input'
            }
        });

        expect(wrapper.first('label').text()).toBe('My Input');
    });

    test("if no label is specified it does not show it", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title'
            }
        });
        expect(wrapper.find('label').length).toBe(0);
    });

    test("if no placeholder is specified it does not show one", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title'
            }
        });
        expect(wrapper.find('option').length).toBe(0);
    });

    test("if a placeholder is specified it shows one", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                placeholder: 'My Placeholder',
                value: ''
            }
        });
        expect(wrapper.find('option').length).toBe(1);
        expect(wrapper.first('option').value()).toBe('My Placeholder');
    });

    test("if no helper is provided it does not show one", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
            }
        });
        expect(wrapper.find('small.form-text').length).toBe(0);
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(false);
    });

    test("if helper text is provided it does show it", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                helper: 'Please select a title'
            }
        });

        expect(wrapper.find('small.form-text').length).toBe(1);
        expect(wrapper.first('small.form-text').text()).toBe("Please select a title");
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(true);
    });

    test("if the field is not required it does not have the required attributes", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
            }
        });

        expect(wrapper.find('span.required').length).toBe(0);
        expect(wrapper.first('select').hasAttribute('required')).toBe(false);
    });

    test("if the field is required it have the required attributes", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'Your Email',
                required: true
            }
        });

        expect(wrapper.find('span.required').length).toBe(1);
        expect(wrapper.first('span.required').text()).toBe('*');
        expect(wrapper.first('select').hasAttribute('required')).toBe(true);
    });

    test("if the input is required but no label has been specified the input field has the required attribute", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                required: true
            }
        });

        expect(wrapper.first('select').hasAttribute('required')).toBe(true);
    });

    test("the input can have the disabled attribute", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                disabled: true,
            }
        });

        expect(wrapper.first('select').hasAttribute('disabled')).toBe(true);
    });

    test("by default the input does not have a disabled attribute", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title'
            }
        });

        expect(wrapper.first('select').hasAttribute('disabled')).toBe(false);
    });

    test("by default the class for the input is form-control", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title'
            }
        });

        expect(wrapper.first('select').hasClass('form-control')).toBe(true);
    });

    test("the form-control can be large", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                large: true
            }
        });

        expect(wrapper.first('select').hasClass('form-control')).toBe(true);
        expect(wrapper.first('select').hasClass('form-control-lg')).toBe(true);
    });

    test("the form-control can be small", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                small: true
            }
        });

        expect(wrapper.first('select').hasClass('form-control')).toBe(true);
        expect(wrapper.first('select').hasClass('form-control-sm')).toBe(true);
    });

    test("the input can be inline", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
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
                name: 'title',
                label: 'My Label',
            }
        });

        expect(wrapper.first('.form-group').hasClass('row')).toBe(false);
    });

    test("the field can be marked as invalid", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
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
                name: 'title',
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
                name: 'title',
                label: 'My Label',
                invalid: true
            }
        });

        expect(wrapper.first('.form-control').hasClass('is-invalid')).toBe(true);
        expect(wrapper.first('.invalid-feedback').contains('.invalid-feedback')).toBe(false);
    });

    test("if no slots are being used the usingAddons property is false", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
            }
        });

        expect(wrapper.vm.usingAddons).toBe(false);
        expect(wrapper.vm.slotExists('leftAddon')).toBe(false);
        expect(wrapper.vm.slotExists('rightAddon')).toBe(false);
    });

    test("if the left add-on slot is being used the using addons property is true", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
            },
            slots: {
                leftAddon: [StandardSlot]
            }
        });

        expect(wrapper.vm.usingAddons).toBe(true);
        expect(wrapper.vm.slotExists('leftAddon')).toBe(true);
        expect(wrapper.vm.slotExists('rightAddon')).toBe(false);
    });

    test("if the right add-on slot is being used the using addons property is true", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
            },
            slots: {
                rightAddon: [StandardSlot]
            }
        });

        expect(wrapper.vm.usingAddons).toBe(true);
        expect(wrapper.vm.slotExists('leftAddon')).toBe(false);
        expect(wrapper.vm.slotExists('rightAddon')).toBe(true);
    });

    test("if the left add-on slot is being used it outputs the addon", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
            },
            slots: {
                leftAddon: [StandardSlot]
            }
        });

        expect(wrapper.first('.form-group').contains('.input-group')).toBe(true);
        expect(wrapper.first('.input-group').contains('.input-group-addon')).toBe(true);
        expect(wrapper.first('.input-group').contains('.form-text')).toBe(false);
        expect(wrapper.first('.input-group').contains('.invalid-feedback')).toBe(false);
        expect(wrapper.first('.input-group-addon').text()).toBe('addon');
    });

    test("if the right add-on slot is being used it outputs the addon", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
            },
            slots: {
                rightAddon: [StandardSlot]
            }
        });

        expect(wrapper.first('.form-group').contains('.input-group')).toBe(true);
        expect(wrapper.first('.input-group').contains('.input-group-addon')).toBe(true);
        expect(wrapper.first('.input-group').contains('.form-text')).toBe(false);
        expect(wrapper.first('.input-group').contains('.invalid-feedback')).toBe(false);
        expect(wrapper.first('.input-group-addon').text()).toBe('addon');
    });

    test("if the field has input groups and is large it has the correct classes", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
                large: true
            },
            slots: {
                rightAddon: [StandardSlot]
            }
        });

        expect(wrapper.first('.form-group').contains('.input-group')).toBe(true);
        expect(wrapper.first('.input-group').hasClass('input-group-lg')).toBe(true);
        expect(wrapper.first('.input-group').contains('.form-text')).toBe(false);
        expect(wrapper.first('.input-group').contains('.invalid-feedback')).toBe(false);
        expect(wrapper.first('.form-control').hasClass('form-control-lg')).toBe(false);
    });

    test("if the field has input groups and is small it has the correct classes", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
                small: true
            },
            slots: {
                rightAddon: [StandardSlot]
            }
        });

        expect(wrapper.first('.form-group').contains('.input-group')).toBe(true);
        expect(wrapper.first('.input-group').hasClass('input-group-sm')).toBe(true);
        expect(wrapper.first('.input-group').contains('.form-text')).toBe(false);
        expect(wrapper.first('.input-group').contains('.invalid-feedback')).toBe(false);
        expect(wrapper.first('.form-control').hasClass('form-control-sm')).toBe(false);
    });

    test("if the left button slot is being used it outputs the button", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
            },
            slots: {
                leftButton: [StandardSlot]
            }
        });

        expect(wrapper.first('.form-group').contains('.input-group')).toBe(true);
        expect(wrapper.first('.input-group').contains('.input-group-btn')).toBe(true);
        expect(wrapper.first('.input-group').contains('.form-text')).toBe(false);
        expect(wrapper.first('.input-group').contains('.invalid-feedback')).toBe(false);
        expect(wrapper.first('.input-group-btn').text()).toBe('addon');
    });

    test("if the right button slot is being used it outputs the button", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
            },
            slots: {
                rightButton: [StandardSlot]
            }
        });

        expect(wrapper.first('.form-group').contains('.input-group')).toBe(true);
        expect(wrapper.first('.input-group').contains('.input-group-btn')).toBe(true);
        expect(wrapper.first('.input-group').contains('.form-text')).toBe(false);
        expect(wrapper.first('.input-group').contains('.invalid-feedback')).toBe(false);
        expect(wrapper.first('.input-group-btn').text()).toBe('addon');
    });

    test("the helper text can be placed under the label", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
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
                name: 'title',
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

    test("it emits an event on change", () => {
        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label'
            }
        });
        const spy = sinon.spy(wrapper.vm, '$emit');
        wrapper.first('.form-control').trigger("change");
        expect(spy.args[0][0]).toBe('input')
    });

    test("it can output the options for the list", () => {
        let options = [
            {
                id: '1',
                label: 'Mr'
            },
            {
                id: '2',
                label: 'Mrs'
            }
        ];

        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
                options: options
            }
        });
        let foundOptions = wrapper.find('option');

        expect(foundOptions.length).toBe(2);
        expect(foundOptions[0].getAttribute('value')).toBe('1');
        expect(foundOptions[1].getAttribute('value')).toBe('2');
        expect(foundOptions[0].text()).toBe('Mr');
        expect(foundOptions[1].text()).toBe('Mrs');
    });

    test("the key name can be changed for options", () => {
        let options = [
            {
                key: '1',
                label: 'Mr'
            },
            {
                key: '2',
                label: 'Mrs'
            }
        ];

        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
                options: options,
                keyName: 'key'
            }
        });
        let foundOptions = wrapper.find('option');

        expect(foundOptions.length).toBe(2);
        expect(foundOptions[0].getAttribute('value')).toBe('1');
        expect(foundOptions[1].getAttribute('value')).toBe('2');
        expect(foundOptions[0].text()).toBe('Mr');
        expect(foundOptions[1].text()).toBe('Mrs');
    });

    test("the label name can be changed for options", () => {
        let options = [
            {
                id: '1',
                value: 'Mr'
            },
            {
                id: '2',
                value: 'Mrs'
            }
        ];

        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
                options: options,
                labelName: 'value'
            }
        });
        let foundOptions = wrapper.find('option');

        expect(foundOptions.length).toBe(2);
        expect(foundOptions[0].getAttribute('value')).toBe('1');
        expect(foundOptions[1].getAttribute('value')).toBe('2');
        expect(foundOptions[0].text()).toBe('Mr');
        expect(foundOptions[1].text()).toBe('Mrs');
    });

    test("the value of the input can be set", () => {
        let options = [
            {
                id: '1',
                label: 'Mr'
            },
            {
                id: '2',
                label: 'Mrs'
            }
        ];

        let wrapper: any = mount(SelectList, {
            propsData: {
                name: 'title',
                label: 'My Label',
                options: options,
                value: '2'
            }
        });

        expect(wrapper.first('select').value()).toBe('2');
    });
});
