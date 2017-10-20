import { suite, test, slow, timeout } from "mocha-typescript";
import {mount} from "avoriaz";
import InputBox from "./../src/input-box.ts";
import expect from 'expect';
import {StandardSlot} from "./resources.ts";
import sinon from 'sinon';

suite("InputBox", () => {
    test("it can set the name", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username'
            }
        });

        expect(wrapper.first('input').hasAttribute('name')).toBe(true);
        expect(wrapper.first('input').getAttribute('name')).toBe('username');
    });

    test("if no type is specified it defaults to text", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username'
            }
        });

        expect(wrapper.first('input').getAttribute('type')).toBe('text');
    });

    test("the type can be overwritten", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                type: 'email'
            }
        });

        expect(wrapper.first('input').getAttribute('type')).toBe('email');
    });

    test("the label gets output", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Input'
            }
        });

        expect(wrapper.first('label').text()).toBe('My Input');
    });

    test("if no label is specified it does not show it", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username'
            }
        });
        expect(wrapper.find('label').length).toBe(0);
    });

    test("if no placeholder is specified it does not show one", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username'
            }
        });
        expect(wrapper.first('input').hasAttribute('placeholder')).toBe(false);
    });

    test("if a placeholder is specified it shows one", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                placeholder: 'My Placeholder'
            }
        });
        expect(wrapper.first('input').hasAttribute('placeholder')).toBe(true);
        expect(wrapper.first('input').getAttribute('placeholder')).toBe('My Placeholder');
    });

    test("if no helper is provided it does not show one", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
            }
        });
        expect(wrapper.find('small.form-text').length).toBe(0);
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(false);
    });

    test("if helper text is provided it does show it", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                helper: 'Please enter your email address'
            }
        });

        expect(wrapper.find('small.form-text').length).toBe(1);
        expect(wrapper.first('small.form-text').text()).toBe("Please enter your email address");
        expect(wrapper.first('.form-group').hasClass('has-helper')).toBe(true);
    });

    test("if the input is not required it does not have the required attributes", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
            }
        });

        expect(wrapper.find('span.required').length).toBe(0);
        expect(wrapper.first('input').hasAttribute('required')).toBe(false);
    });

    test("if the input is required it have the required attributes", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'Your Email',
                required: true
            }
        });

        expect(wrapper.find('span.required').length).toBe(1);
        expect(wrapper.first('span.required').text()).toBe('*');
        expect(wrapper.first('input').hasAttribute('required')).toBe(true);
    });

    test("if the input is required but no label has been specified the input field has the required attribute", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                required: true
            }
        });

        expect(wrapper.first('input').hasAttribute('required')).toBe(true);
    });

    test("the input can have the readonly attribute", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                readonly: true,
            }
        });

        expect(wrapper.first('input').hasAttribute('readonly')).toBe(true);
    });

    test("by default the input does not have a read only attribute", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username'
            }
        });

        expect(wrapper.first('input').hasAttribute('readonly')).toBe(false);
    });

    test("by default the class for the input is form-control", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username'
            }
        });

        expect(wrapper.first('input').hasClass('form-control')).toBe(true);
    });

    test("the form-control can be large", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                large: true
            }
        });

        expect(wrapper.first('input').hasClass('form-control')).toBe(true);
        expect(wrapper.first('input').hasClass('form-control-lg')).toBe(true);
    });

    test("the form-control can be small", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                small: true
            }
        });

        expect(wrapper.first('input').hasClass('form-control')).toBe(true);
        expect(wrapper.first('input').hasClass('form-control-sm')).toBe(true);
    });

    test("the form-control can be plain text mode", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                plainText: true
            }
        });

        expect(wrapper.first('input').hasClass('form-control')).toBe(false);
        expect(wrapper.first('input').hasClass('form-control-plaintext')).toBe(true);
    });

    test("the input box can be inline", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Label',
            }
        });

        expect(wrapper.first('.form-group').hasClass('row')).toBe(false);
    });

    test("the field can be marked as invalid", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Label',
                errorMessage: "There was an error"
            }
        });

        expect(wrapper.first('.form-control').hasClass('is-invalid')).toBe(false);
        expect(wrapper.first('.form-group').contains('.invalid-feedback')).toBe(false);
    });

    test("the field does not show invalid feedback if no message has been passed", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Label',
                invalid: true
            }
        });

        expect(wrapper.first('.form-control').hasClass('is-invalid')).toBe(true);
        expect(wrapper.first('.invalid-feedback').contains('.invalid-feedback')).toBe(false);
    });

    test("if no slots are being used the usingAddons property is false", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Label',
            }
        });

        expect(wrapper.vm.usingAddons).toBe(false);
        expect(wrapper.vm.slotExists('leftAddon')).toBe(false);
        expect(wrapper.vm.slotExists('rightAddon')).toBe(false);
    });

    test("if the left add-on slot is being used the using addons property is true", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
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

    test("when the enter key is pressed it emits an event", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Label'
            }
        });
        const spy = sinon.spy(wrapper.vm, '$emit');
        wrapper.first('.form-control').trigger("keyup.enter");
        expect(spy.args[0][0]).toBe('enter')
    });

    test("it emits an event on input", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Label'
            }
        });
        const spy = sinon.spy(wrapper.vm, '$emit');
        wrapper.first('.form-control').trigger("input");
        expect(spy.args[0][0]).toBe('input')
    });

    test("the value of the input can be set", () => {
        let wrapper: any = mount(InputBox, {
            propsData: {
                name: 'username',
                label: 'My Label',
                value: 'test'
            }
        });

        expect(wrapper.first('.form-control').value()).toBe('test');
    });
});
