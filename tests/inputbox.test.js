import Vue from 'vue'
import InputBoxComponent from '../src/Components/InputBox.vue';
import { shallow } from 'avoriaz';

describe('InputBoxComponent', () => {
    test("it generates the markup", () => {
        const renderer = require('vue-server-renderer').createRenderer();
        const vm = new Vue({
            el: document.createElement('div'),
            render: (createElement) => {
                return createElement(
                    InputBoxComponent,
                    {
                        props: {
                            name: 'name',
                            label: 'Name'
                        }
                    }
                )
            },
        });

        renderer.renderToString(vm, (err, str) => {
            expect(str).toMatchSnapshot();
        });
    });

    test("it fires the blur event", () => {
        const wrapper = shallow(InputBoxComponent, {
            props: {
                name: 'name',
                label: 'Name'
            }
        });
        wrapper.vm.loseFocus = jest.fn();
        let input = wrapper.first('input');
        input.trigger('blur');
        expect(wrapper.vm.loseFocus).toHaveBeenCalled();
    });
});
