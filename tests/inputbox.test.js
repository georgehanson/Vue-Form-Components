import Vue from 'vue'
import InputBoxComponent from '../src/Components/InputBox.vue';

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
});