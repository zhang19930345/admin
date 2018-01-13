<style lang="less">
.lest{
    font-size:20px;
    font-weight: 600;
    text-align: left;
}
</style>
<template>
    <div>
        <Card>
            <div slot="title" class="lest">
                <Icon type="android-hand"></Icon>
                用户反馈
            </div>
            <div>
                <Table :data="userData" :columns="userColumns"></Table>
            </div>
        </Card>
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
                    key: 'view'
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
                                        alert(123)
                                    }
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
                    view: '为查看'
                },
                {
                    openID: "45d5d2",
                    content: "ui上帝科技空对空i可达看是否开发接口",
                    view: '为查看'
                },
                {
                    openID: "45d5d2",
                    content: "ui上帝科技空对空i可达看是否开发接口",
                    view: '已查看'
                },
                {
                    openID: "45d5d2",
                    content: "ui上帝科技空对空i可达看是否开发接口",
                    view: '为查看'
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
    }
}
</script>
