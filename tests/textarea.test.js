import Vue from 'vue'
import TextAreaComponent from '../src/Components/TextArea.vue';

describe('TextAreaComponent', () => {
    test("it generates the markup", () => {
        const renderer = require('vue-server-renderer').createRenderer();
        const vm = new Vue({
            el: document.createElement('div'),
            render: (createElement) => {
                return createElement(
                    TextAreaComponent,
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