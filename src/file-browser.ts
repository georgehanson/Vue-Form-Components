import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    template: require('./templates/file-browser.html'),
    props: {
        label: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: true
        },
        helper: {
            type: String,
            required: false
        },
        required: {
            type: Boolean,
            default: false,
            required: false
        },
        inline: {
            type: Boolean,
            default: false,
            required: false
        },
        invalid: {
            type: Boolean,
            default: false,
            required: false
        },
        errorMessage: {
            type: String,
            required: false,
            default: null
        },
        metaUnderLabel: {
            type: Boolean,
            default: false,
            required: false
        }
    }
})
export default class FileBrowser extends Vue {
     /**
      * Emit an input event up to the parent
      * @param {[type]} event
      */
      public fileSelected(event: any): void {
          let fileList = event.target.files;
          this.$emit('file-selected', fileList[0]);
      }
  }
