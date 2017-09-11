<template>
    <div class="form-group" :class="{'has-error': showError, 'has-helper': helper, 'stacked': stacked }">
        <div class="col-sm-4" :class="{'col-sm-4': !stacked}" v-if="label">
            <label class="control-label">{{ label }}: <span v-if="required">*</span></label>
            <p class="help-block" v-text="helper" v-if="helper"></p>
        </div>
        <div :class="{'col-sm-8': !stacked}">
            <textarea :name="name" id="name" rows="5" v-on:input="updateValue($event.target.value)"
                      :value="value" class="form-control"></textarea>
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
                type: String
            },
            helper: String,
            showError: Boolean,
            stacked: Boolean,
            value: [String],
            required: Boolean,
            id: String,
            errorMessage: String
        },

        methods: {
            updateValue(value) {
                this.$emit('input', value)
            }
        }
    };
</script>
