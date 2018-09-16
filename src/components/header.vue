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
      <i-col span="2" class='toolbar'>
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
      <i-col span="19">
      </i-col>
    </i-row>
    <i-row></i-row>
  </div>
</template>

<script>
import { Row, Col, Dropdown, DropdownMenu, DropdownItem, Icon } from "iview";

export default {
  name: "Header",
  components: {
    IRow: Row,
    ICol: Col,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Icon
  }
};
</script>

<style scoped lang="less">
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
</style>
