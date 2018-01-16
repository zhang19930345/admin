<style lang="less">
        .lest{
                text-align: left;
                font-size:20px;
                font-weight:600;
        }
        .ivu-table td.demo{
                color:#ff6600;
        }
        .card_row{
                margin-bottom:20px;
        }
        .ivb-button{
                margin-bottom:15px;
                margin-top:15px;
                margin-right:60px;
                .ive_router{
                        text-decoration: none;
                        color:white;
                }
        }
</style>
<template>
        <div>
                <div slot="title" class="lest">
                        <Icon type="ios-world"></Icon>
                        新闻列表
                </div>
                <div class="ivb-button">
                        <Row :gutter="20">
                                <Col span="4">
                                <Select v-model="besh" placeholder="新闻类型"></Select>
                                </Col>
                                <Col span="4">
                                <Select v-model="bilst" placeholder="发布时间"></Select>
                                </Col>
                                <Col span="16" style="text-align: right;">
                                <Button type="primary" icon="ios-plus-empty">
                                        <router-link class="ive_router" :to="{path:`/text`}">添加新闻</router-link>
                                </Button>
                                </Col>
                        </Row>
                </div>
                <Table :data="baioData" :columns="columnsBaio"></Table>
                <div style="margin: 10px;overflow: hidden">
                        <div style="float: right;">
                                <Page :total="100" :current="1" @on-change="changePage"></Page>
                        </div>
                </div>
        </div>
</template>
<script>
export default {
        data() {
                return {
                        besh: '',//类型搜索
                        bilst: '',//时间搜索
                        columnsBaio: [//table里的标题内容
                                {
                                        titie: 'ID',
                                        key: 'id',
                                },
                                {
                                        title: '新闻类型',
                                        key: 'newsSate'
                                },
                                {
                                        title: '标题',
                                        key: 'title',
                                        className: 'demo'
                                },
                                {
                                        title: '发布时间',
                                        key: 'release'
                                },
                                {
                                        title: '浏览量',
                                        key: 'sorting',
                                        sortable: true
                                },
                                {
                                        title: '操作',
                                        key: 'action',
                                        width: 230,
                                        align: 'center',
                                        render: (h, params) => {
                                                return h('div', [
                                                        h('Button', {
                                                                props: {
                                                                        type: 'warning',
                                                                        size: 'small'
                                                                },
                                                                style: {
                                                                        marginRight: '5px'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                console.log(1)
                                                                        }
                                                                }
                                                        }, '修改'),
                                                        h('Button', {
                                                                props: {
                                                                        type: 'success',
                                                                        size: 'small'
                                                                },
                                                                style: {
                                                                        marginRight: '5px'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                console.log(1)
                                                                        }
                                                                }
                                                        }, '查看'),
                                                        h('Button', {
                                                                props: {
                                                                        type: 'error',
                                                                        size: 'small'
                                                                },
                                                                style: {
                                                                        marginRight: '5px'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                console.log(1)
                                                                        }
                                                                }
                                                        }, '删除'),
                                                        h('Button', {
                                                                props: {
                                                                        type: 'info',
                                                                        size: 'small'
                                                                },
                                                                style: {
                                                                        marginRight: '5px'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                console.log(123)
                                                                        }
                                                                }
                                                        }, '翻译')
                                                ]);
                                        }
                                }
                        ],
                        baioData: [
                                {
                                        id: 'openID',
                                        newsSate: '知识培训',
                                        title: '知识培训',
                                        release: '2018-1-11',
                                        sorting: 12
                                },
                                {
                                        id: 'openID',
                                        newsSate: '京典头条',
                                        title: '李小璐出轨',
                                        release: '2018-1-11',
                                        sorting: 123
                                },
                                {
                                        id: 'openID',
                                        newsSate: '面试秘籍',
                                        title: '李小璐出轨',
                                        release: '2018-1-11',
                                        sorting: 129
                                },
                                {
                                        id: 'openID',
                                        newsSate: '面试秘籍',
                                        title: '李小璐出轨',
                                        release: '2018-1-11',
                                        sorting: 128
                                },
                                {
                                        id: 'openID',
                                        newsSate: '面试秘籍',
                                        title: '李小璐出轨',
                                        release: '2018-1-11',
                                        sorting: 121
                                },
                                {
                                        id: 'openID',
                                        newsSate: '面试秘籍',
                                        title: '李小璐出轨',
                                        release: '2018-1-11',
                                        sorting: 122
                                },

                        ]
                }
        },
        methods: {
                changePage() {
                        this.columnsBaio = this.baioData
                },
        }
}
</script>