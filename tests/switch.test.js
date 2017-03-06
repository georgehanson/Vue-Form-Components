import Vue from 'vue';
import SwitchComponent from '../src/Components/Switch.vue';

describe('SwitchComponent', () => {
    test("it generates the markup", () => {
        const renderer = require('vue-server-renderer').createRenderer();
        const vm = new Vue({
            el: document.createElement('div'),
            render: (createElement) => {
                return createElement(
                    SwitchComponent,
                    {
                        props: {
                            name: 'marketing',
                            label: 'Would you like to receive marketing updates?'
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