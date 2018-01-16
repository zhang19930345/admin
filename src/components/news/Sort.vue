<style lang="less">
        .ive-xin{
                font-size:20px;
                font-weight: 500;
                margin-bottom: 15px;
        }
        .ive-but{
                text-align: right;
                margin-right:185px;
                margin-bottom:15px;
        }
</style>
<template>
        <div>
                <div slot="title" class="ive-xin">新闻类别</div>
                <div class="ive-but">
                        <Button type="primary" size="large" @click="add()">添加</Button>
                </div>
                <Table :columns="columnsSort" :data="sortData"></Table>
        </div>
</template>
<script>
export default {
        data() {
                return {
                        columnsSort: [
                                {
                                        type: 'index',
                                        width: 60,
                                        algin: 'center'
                                },
                                {
                                        title: "编码",
                                        key: "bm"
                                },
                                {
                                        title: '代码',
                                        key: 'dm'
                                },
                                {
                                        title: '名称',
                                        key: 'mc'
                                },
                                {
                                        title: '权重',
                                        key: 'qz'
                                },
                                {
                                        title: '子节点',
                                        key: 'jd'
                                },
                                {
                                        title: '操作',
                                        key: 'cz',
                                        render: (h, params) => {
                                                return h('div', [
                                                        h('Button', {
                                                                props: {
                                                                        type: 'info',
                                                                        size: 'small'
                                                                },
                                                                style: {
                                                                        marginRight: '10px'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                this.Modify(params.index)
                                                                        }
                                                                }
                                                        }, '修改'),
                                                        h('Button', {
                                                                props: {
                                                                        type: 'info',
                                                                        size: 'small'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                this.Romove(params.index)
                                                                        }
                                                                }
                                                        }, '删除')
                                                ])
                                        }
                                }
                        ],
                        sortData: [
                                {
                                        bm: 'utf-8',
                                        dm: '<h1></h1>',
                                        mc: '知识培训',
                                        qz: '80',
                                        jd: '<div>',
                                },
                                {
                                        bm: 'utf-8',
                                        dm: '<h1></h1>',
                                        mc: '京典头条',
                                        qz: '100',
                                        jd: '<div>',
                                },
                                {
                                        bm: 'utf-8',
                                        dm: '<h1></h1>',
                                        mc: '面试秘籍',
                                        qz: '100',
                                        jd: '<p>',
                                },
                                {
                                        bm: 'utf-8',
                                        dm: '<h1></h1>',
                                        mc: '京典国际',
                                        qz: '60',
                                        jd: '<div>',
                                }
                        ]
                }
        },
        methods: {
                Romove(index) {//删除
                        this.$Modal.confirm({
                                title: '删除',
                                content: '<p>是否确认删除<p>',
                                onOk: () => {
                                        this.sortData.splice(index, 1);
                                        this.$Message.info('确认删除')
                                },
                                onCancel: () => {
                                        this.$Message.info('取消删除')
                                }
                        })
                },
                Modify(index) {//修改
                        this.$Modal.confirm({
                                title: '修改',
                                closable: true,
                                render: (h) => {
                                        return h('div', [
                                                h('Input', {
                                                        props: {
                                                                value: this.sortData[index].dm,
                                                                autofocus: true,
                                                                placeholder: '请输入代码'
                                                        },
                                                        style: {
                                                                marginTop: '20px'
                                                        },
                                                        on: {
                                                                input: (val) => {
                                                                        this.sortData[index].dm = val
                                                                }
                                                        }
                                                })
                                        ])
                                }
                        })
                },
                add() {//添加
                        this.$Modal.confirm({
                                title: '添加',
                                closable: true,
                                render: (h) => {
                                        return h('div', [
                                                h('Input', {
                                                        props: {
                                                                value: '',
                                                                autofocus: true,
                                                                placeholder: '请输入代码'
                                                        },
                                                        on: {
                                                                input: (val) => {

                                                                }
                                                        }
                                                })
                                        ])
                                }
                        })
                }
        }
}
</script>
