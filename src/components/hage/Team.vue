<style lang="less">

</style>
<template>
        <div class="team_card">
                <Card class="team-box">
                        <div slot="title">团队组建</div>
                        <Row style="margin-bottom:15px;">
                                <Col span="8">
                                <Select>
                                        <Option v-for="item in state" :value="item.value" :key="item.value" @on-change="changeState">{{item.label}}</Option>
                                </Select>
                                </Col>
                                <Col span="8">
                                <Select>
                                        <Option v-for="item in seach" :value="item.value" :key="item.value">{{item.label}}</Option>
                                </Select>
                                </Col>
                                <Col span="8">
                                <Select v-model="model13" placeholder="请输入手机号码" filterable :remote-method="remoteMethod1" :loading="loading1">
                                        <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
                                </Select>
                                </Col>
                        </Row>
                        <Table border :columns="team" :data="datals"></Table>
                        <div style="margin: 10px;overflow: hidden">
                                <div style="float: right;">
                                        <Page :total="100" :current="1" @on-change="changePage"></Page>
                                </div>
                        </div>
                </Card>
        </div>
</template>
<script>
import expandRow from './Table.vue'
export default {
        data() {
                return {
                        datals: [
                                {
                                        munber: 901,
                                        id: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },
                                {
                                        munber: 902,
                                        id: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59~2018.6.6',
                                        budget: '500￥'
                                },
                                {
                                        munber: 903,
                                        id: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },
                                {
                                        munber: 904,
                                        id: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },
                                {
                                        munber: 905,
                                        id: '北京红红火火有限科技公司',
                                        contact: 15966668888,
                                        requirements: 66,
                                        place: '北京市海定区长白山顶',
                                        time: '2017.12.13-10:59',
                                        budget: '500￥'
                                },

                        ],
                        team: [
                                {
                                        title: '详情',
                                        type: 'expand',
                                        width: 100,
                                        render: (h, params) => {
                                                return h(expandRow, {
                                                        props: {
                                                                row: params.row
                                                        }
                                                })
                                        }
                                },
                                {
                                        title: '编号',
                                        width: 100,
                                        key: 'munber',
                                },
                                {
                                        title: '公司地址',
                                        key: 'id'
                                },
                                {
                                        title: '联系方式',
                                        key: 'contact'
                                },
                                {
                                        title: '需求人数',
                                        width: 100,
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
                                        width: 150,
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
                        seach: [
                                {
                                        value: '今天',
                                        label: '今天'
                                },
                                {
                                        value: '最近3天',
                                        label: '最近3天'
                                },
                                {
                                        value: '最近7天',
                                        label: '最近7天'
                                },
                                {
                                        value: '最近半月',
                                        label: '最近半月'
                                },
                                {
                                        value: '最近一个月',
                                        label: '最近一个月'
                                }
                        ],
                        state: [
                                {
                                        value: '代组建',
                                        label: '代组建'
                                },
                                {
                                        value: '已组建',
                                        label: '已组建'
                                }
                        ],
                        model13: '',
                        loading1: false,
                        options1: [],
                }
        },
        created() {

        },
        methods: {
                remove(index) {
                        //this.datals.splice(index, 1);
                        //this.$router.push({ path: `/deatails` })

                },
                changePage() {
                        alert(123)
                },
                changeState() {
                        alert(123)
                },
                remoteMethod1(query) {
                        if (query !== '') {
                                this.loading1 = true;
                                setTimeout(() => {
                                        this.loading1 = false;
                                        const list = this.list.map(item => {
                                                return {
                                                        value: item,
                                                        label: item
                                                };
                                        });
                                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                                }, 200);
                        } else {
                                this.options1 = [];
                        }
                },

        },
        components: { expandRow }
}
</script>

