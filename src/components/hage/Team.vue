<style lang="less">

</style>
<template>
        <div class="team-box">
                <Table border :columns="team" :data="datals"></Table>
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
                        select3: '',
                        option: [
                        ],
                        team: [
                                {
                                        title: '编号',
                                        key: 'munber',
                                },
                                {
                                        title: '单位名称',
                                        key: 'entity',
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
                                                                                //mCheck.singleShow(params.row);
                                                                                this.show(params.index)
                                                                                //this.$router.push({ path: `/deatails` })
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
                                                                                console.log(this.team)
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
                                title: '详细信息',
                                content: `编号：${this.datals[index].munber}<br>单位名称：${this.datals[index].entity}<br>联系电话：${this.datals[index].contact}<br>需求人数：${this.datals[index].requirements}<br>地址：${this.datals[index].place}<br>时间：${this.datals[index].time}<br>预算费用：${this.datals[index].budget}`
                        })
                },
                remove(index) {
                        //this.datals.splice(index, 1);
                        //this.$router.push({ path: `/deatails` })

                },
                changePage() {
                        alert(123)
                }
        }
}

</script>

