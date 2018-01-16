<style lang="less">
        .lest{
                font-size:20px;
                font-weight: 600;
                text-align: left;
        }
</style>
<template>
        <div>
                <div slot="title" class="lest">
                        <Icon type="android-hand"></Icon>
                        用户反馈
                </div>
                <div>
                        <Table :data="userData" :columns="userColumns"></Table>
                </div>
        </div>
</template>
<script>
export default {
        data() {
                return {
                        userColumns: [
                                {
                                        title: 'ID',
                                        key: 'openID',
                                },
                                {
                                        title: '内容',
                                        key: 'content',
                                },
                                {
                                        title: '状态',
                                        key: 'view',
                                        filters: [
                                                {
                                                        label: '已查看',
                                                        value: 1
                                                },
                                                {
                                                        label: '未查看',
                                                        value: 2
                                                }
                                        ],
                                        filterMultiple: false,
                                        filterMethod(value, row) {
                                                if (value === 1) {
                                                        return row.view == '已查看';
                                                } else if (value === 2) {
                                                        return row.view == '未查看';
                                                }
                                        }
                                },
                                {
                                        title: '详情',
                                        key: 'delist',
                                        render: (h, params) => {
                                                return h('div', [
                                                        h('Button', {
                                                                props: {
                                                                        type: 'text',
                                                                        size: 'small'
                                                                },
                                                                style: {
                                                                        marginRight: '5px'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                this.Router(params.index)                                                                        }
                                                                }
                                                        }, '了解详情')
                                                ])
                                        }
                                }
                        ],
                        userData: [
                                {
                                        openID: "45d5d2",
                                        content: "ui上帝科技空对空i可达看是否开发接口",
                                        view: '已查看'
                                },
                                {
                                        openID: "45d5d2",
                                        content: "ui上帝科技空对空i可达看是否开发接口",
                                        view: '未查看'
                                },
                                {
                                        openID: "45d5d2",
                                        content: "ui上帝科技空对空i可达看是否开发接口",
                                        view: '未查看'
                                },
                                {
                                        openID: "45d5d2",
                                        content: "ui上帝科技空对空i可达看是否开发接口",
                                        view: '已查看'
                                },
                                {
                                        openID: "45d5d2",
                                        content: "ui上帝科技空对空i可达看是否开发接口",
                                        view: '未查看'
                                },
                                {
                                        openID: "45d5d2",
                                        content: "ui上帝科技空对空i可达看是否开发接口",
                                        view: '已查看'
                                },
                                {
                                        openID: "45d5d2",
                                        content: "ui上帝科技空对空i可达看是否开发接口",
                                        view: '已查看'
                                }
                        ]
                }
        },
        methods: {
                Router() {
                        this.$router.push({ path: `/details` })
                }
        }
}
</script>
