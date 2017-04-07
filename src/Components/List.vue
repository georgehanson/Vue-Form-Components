<template>
    <div class="form-group" :class="{'has-error': showError }">
        <label class="control-label" :class="{'col-sm-2': !stacked}" v-if="label">{{ label }}: <span v-if="required">*</span></label>
        <div :class="{'col-sm-10': (!stacked && label)}">
            <select :name="name" :id="name" class="form-control" v-on:change="updateValue($event.target.value)">
                <option value="" disabled readonly v-text="placeholder" v-if="placeholder"></option>
                <option v-for="option in options" :value="option[keyName]" v-text="option[labelName]" :selected="option[keyName] == value"></option>
            </select>

            <p class="text-danger" v-if="showError" v-text="errorMessage"></p>
            <p class="help-block" v-text="helper" v-if="helper"></p>
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
            errorMessage: String
        },

        methods: {
            updateValue(value) {
                this.$emit('input', value)
            }
        },

        watch: {
            options(value) {
                if(value.length) {
                    let element = document.getElementById(this.name);

                    if(element.options[element.selectedIndex]) {
                        this.updateValue(element.options[element.selectedIndex].value);
                    }
                }
            }
        }
    };
</script>
