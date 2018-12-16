<template>
  <div>
    <i-row class='header_fixed'>
      <i-col span="3">
        <div class='iview_logo'>
          <a>
            <img src="../assets/logo.png">
          </a>
          <span></span>
        </div>
      </i-col>
      <i-col span="1" class='toolbar'>
        <Dropdown trigger="hover" placement="bottom">
          <a href="javascript:void(0)">
            <img src="../assets/application.png"/>
            <Icon type="ios-arrow-down" class='arrow_icon'></Icon>
          </a>
          <DropdownMenu slot="list">
              <DropdownItem>
                <img class='toolbar_logo' src="../assets/iview.png">
                iView
              </DropdownItem>
              <DropdownItem>
                <img class='toolbar_logo' src="../assets/iview.png">
                iView Weapp
              </DropdownItem>
              <DropdownItem>
                <img class='toolbar_logo' src="../assets/inmap.png">
                inMap
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </i-col>
      <i-col span="3">
        <div class='header_select'>
          <i-select filterable class="select_input">
            <i-option v-for="item in extra" :value="item.value" :key="item.value"></i-option>
          </i-select>
        </div>
      </i-col>
      <i-col span="17">
      </i-col>
    </i-row>
    <i-row></i-row>
  </div>
</template>

<script>
import {
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Icon,
  Select,
  Option
} from "iview";

export default {
  name: "Header",
  components: {
    IRow: Row,
    ICol: Col,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Icon,
    ISelect: Select,
    IOption: Option
  },
  data() {
    return {
      extra: [
        {
          value: "color 色彩",
          label: "color 色彩"
        },
        {
          value: "Font 字体",
          label: "Font 字体"
        },
        {
          value: "Button 按钮",
          label: "Button 按钮"
        },
        {
          value: "Icon 图标",
          label: "Icon 图标"
        },
        {
          value: "Grid 栅格",
          label: "Grid 栅格"
        },
        {
          value: "Layout 布局",
          label: "Layout 布局"
        },
        {
          value: "Card 卡片",
          label: "Card 卡片"
        },
        {
          value: "Collapse 折叠面板",
          label: "Collapse 折叠面板"
        },
        {
          value: "Split 面板分割",
          label: "Split 面板分割"
        },
        {
          value: "Divider 分割线",
          label: "Divider 分割线"
        },
        {
          value: "Cell 单元格",
          label: "Cell 单元格"
        },
        {
          value: "Menu 导航菜单",
          label: "Menu 导航菜单"
        },
        {
          value: "Tabs 标签页",
          label: "Tabs 标签页"
        },
        {
          value: "Dropdown 下拉菜单",
          label: "Dropdown 下拉菜单"
        },
        {
          value: "Page 分页",
          label: "Page 分页"
        },
        {
          value: "Breadcrumb 面包屑",
          label: "Breadcrumb 面包屑"
        },
        {
          value: "Badge 徽标数",
          label: "Badge 徽标数"
        },
        {
          value: "Anchor 锚点",
          label: "Anchor 锚点"
        },
        {
          value: "Steps 步骤条",
          label: "Steps 步骤条"
        },
        {
          value: "LoadingBar 加载进度条",
          label: "LoadingBar 加载进度条"
        },
        {
          value: "Input 输入框",
          label: "Input 输入框"
        },
        {
          value: "Radio 单选框",
          label: "Radio 单选框"
        },
        {
          value: "Checkbox 多选框",
          label: "Checkbox 多选框"
        },
        {
          value: "Switch 开关",
          label: "Switch 开关"
        },
        {
          value: "Table 表格",
          label: "Table 表格"
        },
        {
          value: "Select 选择器",
          label: "Select 选择器"
        },
        {
          value: "AutoComlete 自动完成",
          label: "AutoComlete 自动完成"
        },
        {
          value: "Slider 滑块",
          label: "Slider 滑块"
        },
        {
          value: "DatePicker 日期选择器",
          label: "DatePicker 日期选择器"
        },
        {
          value: "TimePicker 时间选择器",
          label: "TimePicker 时间选择器"
        },
        {
          value: "Cascader 级联选择",
          label: "Cascader 级联选择"
        },
        {
          value: "Transfer 穿梭框",
          label: "Transfer 穿梭框"
        },
        {
          value: "InputNumber 数字输入框",
          label: "InputNumber 数字输入框"
        },
        {
          value: "Upload 上传",
          label: "Upload 上传"
        },
        {
          value: "ColorPicker 颜色选择器",
          label: "ColorPicker 颜色选择器"
        },
        {
          value: "Form 表单",
          label: "Form 表单"
        },
        {
          value: "Alert 警告提示",
          label: "Alert 警告提示"
        },
        {
          value: "Message 全局提示",
          label: "Message 全局提示"
        },
        {
          value: "Notice 通知提醒",
          label: "Notice 通知提醒"
        },
        {
          value: "Modal 对话框",
          label: "Modal 对话框"
        },
        {
          value: "Drawer 抽屉",
          label: "Drawer 抽屉"
        },
        {
          value: "Tree 树形控件",
          label: "Tree 树形控件"
        },
        {
          value: "Tooltip 文字提示",
          label: "Tooltip 文字提示"
        },
        {
          value: "Poptip 气泡提示",
          label: "Poptip 气泡提示"
        },
        {
          value: "Progress 进度条",
          label: "Progress 进度条"
        },
        {
          value: "Avatar 头像",
          label: "Avatar 头像"
        },
        {
          value: "Tag 标签",
          label: "Tag 标签"
        },
        {
          value: "Carousel 走马灯",
          label: "Carousel 走马灯"
        },
        {
          value: "Timeline 时间轴",
          label: "Timeline 时间轴"
        },
        {
          value: "Time 相对时间",
          label: "Time 相对时间"
        },
        {
          value: "Circle 进度环",
          label: "Circle 进度环"
        },
        {
          value: "Affix 图钉",
          label: "Affix 图钉"
        },
        {
          value: "BackTop 返回顶部",
          label: "BackTop 返回顶部"
        },
        {
          value: "Spin 加载中",
          label: "Spin 加载中"
        },
        {
          value: "Scroll 无限滚动",
          label: "Scroll 无限滚动"
        }
      ]
    };
  }
};
</script>

<style scoped>
.select_input >>> .ivu-select-selection {
  border: 0;
  box-shadow: none; 
}
.select_input >>> .ivu-select-arrow {
  display: none;
}
</style>


<style scoped rel="stylesheet/scss" lang="scss">
.header_fixed {
  height: 65px;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  .ivu-col {
    height: 100%;
  }
}

.iview_logo {
  a {
    display: inline-block;
    line-height: 0;
    margin: 8px 35px 0 60px;
  }
  span {
    position: relative;
    top: -14px;
    display: inline-block;
    width: 1px;
    height: 24px;
    background-color: #eee;
  }
  img {
    height: 50px;
  }
}

.toolbar {
  .ivu-dropdown {
    padding: 20px 0 14px;
  }
  .arrow_icon {
    position: relative;
    top: -5px;
    left: 5px;
  }
  img {
    width: 20px;
  }
  .toolbar_logo {
    width: 24px;
    margin-right: 5px;
    vertical-align: middle;
  }
}

.header_select {
  padding: 16px 0;
}

</style>
