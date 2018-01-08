<style lang="less">

</style>
<template>

        <div class="team-box">
                <div>
                        <Table border :columns="team" :data="datals"></Table>
                </div>
        </div>
</template>
<script>
export default {
        data() {
                return {
                        team: [
                                {
                                        title: '编号',
                                        key: 'munber',
                                },
                                {
                                        title: '单位名称',
                                        key: 'entity'
                                },
                                {
                                        title: '联系方式',
                                        key: 'contact'
                                },
                                {
                                        title: '需求人数',
                                        key: 'requirements'
                                },
                                {
                                        title: '地点',
                                        key: 'place'
                                },
                                {
                                        title: '时间',
                                        key: 'time'
                                },
                                {
                                        title: '预算',
                                        key: 'budget'
                                },
                                {
                                        title: '操作',
                                        key: 'action',
                                        width: 150,
                                        align: 'center',
                                        render: (h, params) => {
                                                return h('div', [
                                                        h('Button', {
                                                                props: {
                                                                        type: 'primary',
                                                                        size: 'small'
                                                                },
                                                                style: {
                                                                        marginRight: '5px'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                //this.show(params.index)
                                                                                this.$router.push({ path: `/deatails` })
                                                                        }
                                                                }
                                                        }, '详情'),
                                                        h('Button', {
                                                                props: {
                                                                        type: 'error',
                                                                        size: 'small'
                                                                },
                                                                on: {
                                                                        click: () => {
                                                                                this.remove(params.index)
                                                                        }
                                                                }
                                                        }, '编辑')
                                                ]);
                                        }
                                }
                        ],
                        datals: [
                                {
                                        munber: 901,
                                        entity: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },
                                {
                                        munber: 902,
                                        entity: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59~2018.6.6',
                                        budget: '500￥'
                                },
                                {
                                        munber: 903,
                                        entity: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },
                                {
                                        munber: 904,
                                        entity: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },
                                {
                                        munber: 905,
                                        entity: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },

                        ]
                }
        },
        methods: {
                show(index) {
                        this.$Modal.info({
                                title: 'User Info',
                                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                        })
                },
                remove(index) {
                        this.data6.splice(index, 1);
                }
        }

}
</script>

