<template>
    <div class="form-group" :class="{'has-error': showError }">
        <label class="control-label" :class="{'col-sm-2': !stacked}" v-if="label">{{ label }}: <span v-if="required">*</span></label>
        <div :class="{'col-sm-10': (!stacked && label)}">
            <div :class="{'input-group': usingAddons}">
                <div class="input-group-addon" v-if="slotExists('leftAddon')">
                    <slot name="leftAddon"></slot>
                </div>
                <div class="input-group-btn" v-if="slotExists('leftBtn')">
                    <slot name="leftBtn"></slot>
                </div>

                <input :type="type" v-on:input="updateValue($event.target.value)" class="form-control" v-on:keyup.enter="enterKeyPressed"
                       :name="name" :id="id" :readonly="readonly" :value="value" :placeholder="placeholder">

                <div class="input-group-addon" v-if="slotExists('rightAddon')">
                    <slot name="rightAddon"></slot>
                </div>
                <div class="input-group-btn" v-if="slotExists('rightBtn')">
                    <slot name="rightBtn"></slot>
                </div>
            </div>
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
            helper: String,
            showError: Boolean,
            placeholder: String,
            stacked: Boolean,
            value: [String, Number],
            type: {
                type: String,
                default: () => {
                    return 'text';
                }
            },
            required: Boolean,
            readonly: Boolean,
            id: String,
            errorMessage: String
        },

        computed: {
            usingAddons() {
               return ! (Object.keys(this.$slots).length === 0 && this.$slots.constructor === Object)
            }
        },

        methods: {
            enterKeyPressed() {
                this.$emit('enter');
            },

            updateValue(value) {
                this.$emit('input', value)
            },

            slotExists(name) {
                return (name in this.$slots);
            }
        }
    };
</script>
