<template>
    <div class="form-group" :class="{'has-error': showError }">
        <label class="control-label" :class="{'col-sm-2': !stacked}">{{ label }}: <span v-if="required">*</span></label>
        <div :class="{'col-sm-10': !stacked}">
            <textarea :name="name" id="name" rows="5" v-on:input="updateValue($event.target.value)"
                      :value="value" class="form-control"></textarea>
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
                required: true
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