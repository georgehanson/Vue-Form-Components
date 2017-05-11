<template>
    <div class="form-group switch-group">
        <label class="control-label" :class="labelColumnClass" v-if="label">{{ label }}</label>
        <div :class="inputColumnClass">
            <label class="switch-component">
                <input type="checkbox" :id="id" :name="name" :checked="checked" v-on:change="updateValue($event.target.checked)">
                <div class="slider round"></div>
            </label>
            <p class="help-block" v-if="helper">{{ helper }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        model: {
            prop: 'checked',
            event: 'change'
        },

        props: {
            name: {
                type: String,
                required: true
            },

            label: {
                type: String
            },

            stacked: {
                type: Boolean,
                default: false
            },

            helper: String,

            id: String,

            checked: Boolean,

            labelColumn: {
                type: String,
                default: 'col-sm-2'
            },

            inputColumn: {
                type: String,
                default: 'col-sm-10'
            }
        },

        computed: {
            labelColumnClass() {
                if(! this.stacked) {
                    return this.labelColumn;
                }
            },

            inputColumnClass() {
                if(! this.stacked && this.label) {
                    return this.inputColumn;
                }
            }
        },

        methods: {
            updateValue(value) {
                this.$emit('change', value)
            }
        }
    };
</script>

<style>
    /* The switch - the box around the slider */
    .switch-component {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch-component input {display:none;}

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #428bca;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #428bca;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>