<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 100px;
  margin: 0 auto;
  margin-right: 20px;
}
.router-link {
  text-decoration: none;
  color: white;
}
</style>
<template>
        <div class="layout">
                <Layout>
                        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{height:'100vh'}">
                                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                                        <MenuItem name="1">
                                        <Icon type="earth" size="100"></Icon>
                                        </MenuItem>
                                        <Submenu name="1">
                                                <template slot="title">
                                                        <Icon type="ios-navigate"></Icon>
                                                        企业管理
                                                </template>
                                                <MenuItem name="1-1">Option 1</MenuItem>
                                                <MenuItem name="1-2">Option 2</MenuItem>
                                                <MenuItem name="1-3">Option 3</MenuItem>
                                        </Submenu>
                                        <Submenu name="2">
                                                <template slot="title">
                                                        <Icon type="ios-world-outline"></Icon>
                                                        <router-link :to="{path:``}" class="router-link">新闻管理</router-link>
                                                </template>
                                                <MenuItem name="2-1">
                                                <router-link :to="{path:`/baio`}" class="router-link">新闻列表</router-link>
                                                </MenuItem>
                                                <MenuItem name="2-2">
                                                <router-link :to="{path:`/sort`}" class="router-link">新闻类别</router-link>
                                                </MenuItem>
                                                <MenuItem name="2-3">
                                                <router-link :to="{path:`/page`}" class="router-link">单页面管理</router-link>
                                                </MenuItem>
                                        </Submenu>
                                        <Submenu name="3">
                                                <template slot="title">
                                                        <Icon type="person"></Icon>
                                                        用户中心
                                                </template>
                                                <MenuItem name="3-1">
                                                <router-link :to="{path:`/team`}" class="router-link">团队组建</router-link>
                                                </MenuItem>
                                                <MenuItem name="3-2">
                                                <router-link :to="{path:`/feedback`}" class="router-link">订单记录</router-link>
                                                </MenuItem>
                                                <MenuItem name="3-3">
                                                <router-link :to="{path:`/user`}" class="router-link">用户反馈</router-link>
                                                </MenuItem>
                                                <MenuItem name="3-4">
                                                <router-link :to="{path:``}" class="router-link">用户账号</router-link>
                                                </MenuItem>
                                                <MenuItem name="3-5">
                                                <router-link :to="{path:``}" class="router-link">全职简历</router-link>
                                                </MenuItem>
                                                <MenuItem name="3-6">
                                                <router-link :to="{path:``}" class="router-link">兼职简历</router-link>
                                                </MenuItem>
                                        </Submenu>
                                        <Submenu name="4">
                                                <template slot="title">
                                                        <Icon type="ios-gear-outline"></Icon>
                                                        系统设置
                                                </template>
                                                <MenuItem name="4-1">待定</MenuItem>
                                                <MenuItem name="4-2">待定</MenuItem>
                                        </Submenu>
                                </Menu>
                        </Sider>
                        <Layout>
                                <Header :style="{padding: 0}" class="layout-header-bar">
                                        <Menu mode="horizontal" theme="dark" active-name="1">
                                                <div class="layout-logo"></div>
                                                <div class="layout-nav">
                                                        <MenuItem name="1">

                                                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                                        </MenuItem>
                                                </div>
                                        </Menu>
                                </Header>
                                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                                        <router-view></router-view>
                                </Content>
                        </Layout>
                </Layout>
        </div>
</template>
<script>
export default {
        data() {
                return {
                        isCollapsed: false,
                }
        },
        computed: {
                rotateIcon() {
                        return [
                                'menu-icon',
                                this.isCollapsed ? 'rotate-icon' : ''
                        ];
                },
                menuitemClasses() {
                        return [
                                'menu-item',
                                this.isCollapsed ? 'collapsed-menu' : ''
                        ]
                }
        },
        methods: {
                collapsedSider() {
                        this.$refs.side1.toggleCollapse();
                }
        }
}
</script>

