<template>
  <div>
    <codemirror ref="codemirrorRef" v-model="value" :options="cmOptions" @changes="change"></codemirror>  
  </div>  
</template>

<script>
// xml \ properties \ yml \ json \txt
import { codemirror } from 'vue-codemirror'
require('codemirror/mode/xml/xml.js')
require('codemirror/mode/yaml/yaml.js')
require('codemirror/mode/properties/properties.js')
require('codemirror/mode/javascript/javascript.js')
 
import "codemirror/addon/lint/json-lint"
require("script-loader!jsonlint")
// 代码补全功能
require('codemirror/addon/hint/javascript-hint.js')
// require('codemirror/theme/blackboard.css')
import "codemirror/theme/ambiance.css"
console.log(codemirror, 'codemirror')
export default {
  name: 'codemirror-c',
  components: {
    codemirror
  },
  data() {
    return {
      value: '',
      cmOptions: {
        value: this.value,
        mode: 'text/javascript',
        theme: 'ambiance',
        identUnit: 2,
        smartIndent: true,
        tabSize: 2,
        readOnly: false,
        showCursorWhenSelecting: true,
        lineNumbers: true,
        fisrtLineNumber: 1,
        matchBrackets: true, // 括号匹配
        line: true,
        extraKeys: { 'Ctrl' : 'autocomplete' }, // 智能提示
         //代码折叠
        lineWrapping:true,
        foldGutter: true,
        gutters:['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
      }
    }
  },
  methods: {
    change() {}
  }
}
</script>