<template>
  <div>
    <!-- 操作按钮 --> 
    <el-row>
      <el-select class="code-mode-select" v-model="mode" @change="changeMode">
        <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
        </el-option>
      </el-select>
    </el-row>
    <!-- code -->
    <codemirror ref="cm" :options="options" :value="value"></codemirror>

  </div>
</template>

<script>
// 支持 xml \ properties \ yml \ json \txt
// 引入全局实例
// import CodeMirror from 'vue-codemirror'
import { codemirror } from 'vue-codemirror'
// 核心样式
import 'codemirror/lib/codemirror.css'
// 引入主题后还需要在 options 中指定主题才会生效
// import 'codemirror/theme/icecoder.css'
// 折叠
// import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/lint/lint.css'

// 需要引入具体的语法高亮库才会有对应的语法高亮效果
// codemirror 官方其实支持通过 /addon/mode/loadmode.js 和 /mode/meta.js 来实现动态加载对应语法高亮库
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/properties/properties.js'
import 'codemirror/mode/yaml/yaml.js'
import 'codemirror/mode/textile/textile.js'
// json格式要引入JavaScript文件
import 'codemirror/mode/javascript/javascript.js'
// import 'codemirror/addon/mode/loadmode.js'
import 'codemirror/mode/meta.js'
require('script-loader!jsonlint')
import 'codemirror/addon/lint/lint.js'
import 'codemirror/addon/lint/javascript-lint.js'
import 'codemirror/addon/lint/json-lint.js'
//代码补全提示
import 'codemirror/addon/hint/anyword-hint.js'
import 'codemirror/addon/hint/xml-hint.js'
import 'codemirror/addon/hint/show-hint.js'

// 格式化
import '../common/formatting.js'

//代码版本差异比较
import 'codemirror/addon/merge/merge.js'
import 'codemirror/addon/merge/merge.css'
import 'codemirror/keymap/sublime.js'



export default {
  name: 'Code',
  components: {
    codemirror
  },
  data() {
    return {
      // 默认的语法类型
      mode: 'text/xml',
      value: '',
      valueObj: {
        'text/xml': `<?xml version="1.0" encoding="UTF-8"?>
          <note>
            <to>Tove</to>
            <from>Jani</from>
            <heading>Reminder</heading>
            <body>Don't forget me this weekend!</body>
          </note>`,
        properties: `#map 第一种方式
          data.person.name=zhangsan
          data.person.sex=man
          data.person.age=11
          data.person.url=xxxxxxxx
          #map 第二种方式
          data.person[name]=zhangsan
          data.person[sex]=man
          data.person[age]=11
          data.person[url]=xxxxxxxx
          #list 第一种方式
          data.list[0]=apple0
          data.list[1]=apple1
          data.list[2]=apple2
          #list 第二种方式
          data.list=apple0,apple1,apple2`,
        'text/x-yaml': `---
          json:
          - rigid
          - better for data interchange
          yaml:
          - slim and flexible
          - better for configuration
          object:
            key: value
            array:
            - null_value: 
            - boolean: true
            - integer: 1
          paragraph: |
            Blank lines denote
            paragraph breaks
          content: |-
            Or we
            can auto
            convert line breaks
            to save space`,
        'text/x-textile': '',
        'application/json': `{ "firstName": "John" , "lastName": "Doe", "age": 10 }`
      },
      // 默认配置
      options: {
        mode: 'text/xml',// 缩进格式
        json: true,
        tabSize: 2,
        identUnit: 2, // 智能缩进单位为2个空格长度
        smartIndent: true, // 智能缩进
        // theme: 'icecoder',// 主题，对应主题库 JS 需要提前引入
        lineNumbers: true,// 显示行号
        line: true,
        extraKeys: {'Ctrl': 'autocomplete'}, // 代码补全
        highlightDifferences: true, // 显示差异
        showCursorWhenSelecting: true, // 在选择时是否显示光标
        autofocus: true, // 对焦
        matchBrackets: true, // 括号匹配
        // gutters: [ 'CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
        //CodeMirror-lint-markers是实现语法报错功能
        foldGutter: true
      },
      // 支持切换的语法高亮类型，对应 JS 已经提前引入
      modes: [{
        value: 'text/xml',
        label: 'xml'
      },  {
        value: 'properties',
        label: 'Properties'
      }, {
        value: 'text/x-yaml',
        label: 'yml'
      }, {
        value: 'application/json',
        label: 'Json'
      }, {
        value: 'text/x-textile',
        label: 'txt'
      }]
    }
  },
  mounted() {
    this.value = this.valueObj[this.mode]
  },
  methods: {
    // 更改模式
    changeMode(val) {
      this.value = this.valueObj[val]
      this.options.mode = val
    }
  }
}
</script>

<style scoped>
.code-mode-select {
  margin: 20px;
}
::v-deep .CodeMirror{
  font-size:14px;
  color: #333;
  font-family: Microsoft YaHei Arial sans-serif;
  background-color: #FFF;
  /* border:1px solid #ece2e2; */
  }
::v-deep .CodeMirror-linenumber {
  background-color: #F7F7F7;
  color: #999;
  /* border:1px solid #ddd; */
}
</style>