# Vue Form Components

[![npm version](https://badge.fury.io/js/vue-form-components.svg)](https://badge.fury.io/js/vue-form-components)

This package provides easy form wrappers for Vue2, based upon the Bootstrap CSS Framework.

The following components which are supported are:

- Standard Input Box (Including input addons)
- Toggle Switch
- Text Area
- Select List

## Installation

You can install this package by running the following command: `npm install --save vue-form-components`

You can then import this package into your project using one of the following:

`Import VueFormComponents from 'vue-form-components'`

Or

`require('vue-form-components')`

If you would just like to import one or selected components, you can do the following:

`Import { InputBoxComponent } from 'vue-form-components'`

## Usage

I recommend when using this package to declare the components as global components. This can be done one of the following ways:

```javascript
Import VueFormComponents from 'vue-form-components';
Vue.component('input-box', VueFormComponents.InputBoxComponent);
```
Or
```javascript
const VueFormComponents  = require('vue-form-components');
Vue.component('input-box', VueFormComponents.InputBoxComponent);
```

You can then use these components globally throughout your application.

### Standard Input Box

This component is designed to save time and repetition by not having to duplicate form groups. The name for this
component is `InputBoxComponent`. This component can be used in conjunction with the `v-model` directive.

#### Addons
With the Standard input box component, you can also use input group addons. This can be done by simply adding slots.

| Slot         | Description |
| ------------ | ----------- |
| leftAddon    | A standard input group addon on the left side of the input field |
| rightAddon   | A standard input group addon on the right side of the input field |
| leftBtn      | An input group button on the left side of the input field |
| rightBtn     | An input group button on the right side of the input |

For example, if I wanted to create an input box, with an addon on the right hand side, I could do the following:

```html
<input-box v-model="model" name="email_address" label="Email Address">
    <div slot="rightAddon">@example.com</div>
</input-box>
```

Alternatively, for a button on the right hand side, I could do the following:

```html
<input-box v-model="model" name="email_address" label="Email Address">
    <button slot="rightBtn" class="btn btn-default">Search</button>
</input-box>
```

| Prop         | Type     | Default    | Required  | Description |
| ------------ | -------  | ---------- | --------- | ----------- |
| name         | String   |            | Yes       | The input name for the field |
| label        | String   |            | No       | The label for the input |
| helper        | String  |            | No        | Helper text  |
| showError    | Boolean  | false      | No        | Whether or not to show a validation error |
| errorMessage | String   |            | No        | The error message to show |
| placeholder  | String   |            | No        | A placeholder for the input |
| stacked      | Boolean  | false      | No        | Show the label above the input field |
| type         | String   | text       | No        | The HTML input type |
| required     | Boolean  | false      | No        | Mark the field as required |
| readonly     | Boolean  | false      | No        | Mark the field as readonly |
| id           | String   |            | No        | The id for the html input |

### Toggle Switch

This component displays a nice alternative to a standard checkbox. The name for this component is `SwitchComponent`.
This component can be used in conjunction with the `v-model` directive.

| Prop         | Type     | Default    | Required  | Description |
| ------------ | -------  | ---------- | --------- | ----------- |
| name         | String   |            | Yes       | The checkbox name |
| label        | String   |            | Yes       | The label for the checkbox |
| helper        | String  |            | No        | Helper text  |
| id           | String   |            | No        | The id for the checkbox |
| stacked      | Boolean  | false      | No        | Show the label above the switch component
| labelColumn  | String   | col-sm-2   | No        | The bootstrap column for the label |
| inputColumn  | String   | col-sm-10  | No        | The bootstrap column for the input |

### Text Area

This component generates a textarea within a bootstrap form group. The name for this component is `TextAreaComponent`.
This component can be used in conjunction with the `v-model` directive.

| Prop         | Type     | Default    | Required  | Description |
| ------------ | -------  | ---------- | --------- | ----------- |
| name         | String   |            | Yes       | The textarea name |
| label        | String   |            | Yes       | The label for the textarea |
| helper        | String  |            | No        | Helper text  |
| showError    | Boolean  | false      | No        | Whether or not to show a validation error |
| errorMessage | String   |            | No        | The error message to show |
| stacked      | Boolean  | false      | No        | Show the label above the textarea |
| required     | Boolean  | false      | No        | Mark the field as required |
| id           | String   |            | No        | The id for the html input |

### Select List

This component generates a select input within a bootstrap form group. The name for this component is `Listcomponent`.
This component can be used in conjunction with the `v-model` directive.

| Prop         | Type     | Default    | Required  | Description |
| ------------ | -------  | ---------- | --------- | ----------- |
| name         | String   |            | Yes       | The select list name |
| label        | String   |            | No       | The label for the select list |
| options        | Array   |            | Yes       | The options to choose from |
| keyName        | String   |  id          | No       | The name of the key for the value in the options |
| labelName        | String   |  label          | No       | The name of the key for the label in the options |
| helper        | String  |            | No        | Helper text  |
| showError    | Boolean  | false      | No        | Whether or not to show a validation error |
| errorMessage | String   |            | No        | The error message to show |
| stacked      | Boolean  | false      | No        | Show the label above the textarea |
| required     | Boolean  | false      | No        | Mark the field as required |