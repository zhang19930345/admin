<template>
        <div>
                <Button type="primary">添加内容</Button>
                <Table :data="pageData" :columns="pageColumns"></Table>
        </div>
</template>

<script>
export default {
        data() {
                return {
                        pageColumns: [
                                {
                                        title: 'ID',
                                        key: 'id',
                                },
                                {
                                        title: '页面名称',
                                        key: 'name',
                                },
                                {
                                        title: '页面代码',
                                        key: 'code'
                                },
                                {
                                        title: '更新时间',
                                        key: 'time'
                                },
                                {
                                        title: '',
                                        width: 300,
                                        render: (h) => {
                                                return h('div', [
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

                                                                        }
                                                                }
                                                        }, '查看'),
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

                                                                        }
                                                                }
                                                        }, '编辑'),
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

                                                                        }
                                                                }
                                                        }, '翻译'),
                                                ])
                                        }
                                }
                        ],
                        pageData: [
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                },
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                },
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                },
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                },
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                },
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                },
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                },
                                {
                                        id: "dudjdjk",
                                        name: 'jdhjdj',
                                        code: 'hsjhfjsj',
                                        time: "2011"
                                }
                        ]
                }
        }

};
</script>