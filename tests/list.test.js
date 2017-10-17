import Vue from 'vue';
import ListComponent from '../src/Components/List.vue';

describe('ListComponent', () => {
    test("it generates the markup", () => {
        const renderer = require('vue-server-renderer').createRenderer();
        const vm = new Vue({
            el: document.createElement('div'),
            render: (createElement) => {
                return createElement(
                    ListComponent,
                    {
                        props: {
                            name: 'choices',
                            label: 'Please select a choice',
                            options: [1, 2, 3]
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
