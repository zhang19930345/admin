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
</style>
<template>
    <div>
        <Card>
            <div slot="title" class="lest">
                <Icon type="ios-world"></Icon>
                新闻列表
            </div>
            <Table :data="baioData" :columns="columnsBaio"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            valueAll: '',
            loading: false,
            columnsBaio: [
                {
                    titie: 'ID',
                    key: 'id',
                },
                {
                    title: '新闻类别',
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
                            }, '添加'),
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
                            }, '修改')
                        ]);
                    }
                }
            ],
            baioData: [
                {
                    id: 'openID',
                    newsSate: '不知道',
                    title: '李小璐出轨',
                    release: '2018-1-11',
                    sorting: 12
                },
                {
                    id: 'openID',
                    newsSate: '不知道',
                    title: '李小璐出轨',
                    release: '2018-1-11',
                    sorting: 123
                },
                {
                    id: 'openID',
                    newsSate: '不知道',
                    title: '李小璐出轨',
                    release: '2018-1-11',
                    sorting: 129
                },
                {
                    id: 'openID',
                    newsSate: '不知道',
                    title: '李小璐出轨',
                    release: '2018-1-11',
                    sorting: 128
                },
                {
                    id: 'openID',
                    newsSate: '不知道',
                    title: '李小璐出轨',
                    release: '2018-1-11',
                    sorting: 121
                },
                {
                    id: 'openID',
                    newsSate: '不知道',
                    title: '李小璐出轨',
                    release: '2018-1-11',
                    sorting: 122
                },

            ]
        }
    },
    methods: {
        changePage() {
            console.log(123)
        },
        remoteMethod() {

        }
    }
}
</script>