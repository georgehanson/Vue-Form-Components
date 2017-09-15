<template>
    <div class="form-group switch-group">
        <div :class="{'col-sm-4': ! stacked}" v-if="label">
            <label class="control-label">{{ label }}</label>
            <p class="help-block" v-if="helper">{{ helper }}</p>
        </div>
        <div :class="{'col-sm-10': ! stacked  }">
            <label class="switch-component">
                <input type="checkbox" :id="id" :name="name" :checked="checked" v-on:change="updateValue($event.target.checked)">
                <div class="slider round">
                    <span class="yes-label" v-if="labels">Yes</span>
                    <span class="no-label" v-if="labels">No</span>
                </div>
            </label>
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

            labels: {
                type: Boolean,
                default: false
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
        display:flex;
        align-items: center;
        font-size: 11px;
        justify-content: space-between;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .slider.round .yes-label {
        padding-left: 5px;
        color: #FFF;
        text-transform: uppercase;
    }

    .slider.round .no-label {
        padding-right: 7px;
        text-transform: uppercase;
    }
</style>
