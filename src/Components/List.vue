<template>
    <div class="form-group" :class="{'has-error': showError }">
        <div class="col-sm-4" :class="{'col-sm-4': !stacked}" v-if="label || showLabelSpace">
            <label class="control-label" v-if="label">{{ label }}: <span v-if="required">*</span></label>
            <p class="help-block" v-text="helper" v-if="helper"></p>
        </div>
        <div :class="{'col-sm-8': (!stacked && label)}">
            <div :class="{'input-group': usingAddons}">
                <div class="input-group-addon" v-if="slotExists('leftAddon')">
                    <slot name="leftAddon"></slot>
                </div>
                <div class="input-group-btn" v-if="slotExists('leftBtn')">
                    <slot name="leftBtn"></slot>
                </div>
                <select :name="name" :id="name" class="form-control" v-on:change="updateValue($event.target.value)">
                    <option value="" disabled readonly v-text="placeholder" v-if="placeholder"
                            :selected="value == null || value == ''"></option>
                    <option v-for="option in options" :value="option[keyName]" v-text="option[labelName]"
                            :selected="option[keyName] == value"></option>
                </select>
                <div class="input-group-addon" v-if="slotExists('rightAddon')">
                    <slot name="rightAddon"></slot>
                </div>
                <div class="input-group-btn" v-if="slotExists('rightBtn')">
                    <slot name="rightBtn"></slot>
                </div>
            </div>

            <p class="text-danger" v-if="showError" v-text="errorMessage"></p>
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            label: {
                type: String,
            },
            options: {
                type: Array,
                required: true,
            },
            keyName: {
                type: String,
                default: () => {
                    return 'id'
                }
            },
            labelName: {
                type: String,
                default: () => {
                    return 'label'
                }
            },
            helper: String,
            showError: Boolean,
            placeholder: String,
            stacked: Boolean,
            value: [String, Number],
            required: Boolean,
            errorMessage: String,
            showLabelSpace: Boolean
        },

        methods: {
            slotExists(name) {
                return (name in this.$slots);
            },

            updateValue(value) {
                this.$emit('input', value)
            }
        },

        computed: {
            usingAddons() {
                return ! (Object.keys(this.$slots).length === 0 && this.$slots.constructor === Object)
            }
        },

        updated() {
            if (this.options.length) {
                let element = document.getElementById(this.name);
                if (element.options[element.selectedIndex]) {
                    this.updateValue(element.options[element.selectedIndex].value);
                }
            }
        }
    };
</script>
