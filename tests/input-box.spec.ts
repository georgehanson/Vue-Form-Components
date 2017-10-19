import { suite, test, slow, timeout } from "mocha-typescript";
import {mount} from "avoriaz";
import InputBox from "./../src/input-box.ts";
import expect from 'expect';

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
});
