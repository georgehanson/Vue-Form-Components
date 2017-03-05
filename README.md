# Vue Form Components
This package provides easy form wrappers for Vue2, based upon the Bootstrap CSS Framework.

The following components which are supported are:

- Standard Input Box
- Toggle Switch

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

| Prop         | Type     | Default    | Required  | Description |
| ------------ | -------  | ---------- | --------- | ----------- |
| name         | String   |            | Yes       | The input name for the field |
| label        | String   |            | Yes       | The label for the input |
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
| id           | String   |            | No        | The id for the checkbox |