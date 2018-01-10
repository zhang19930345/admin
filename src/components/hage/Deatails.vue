<template>
        <Card>
                <p slot="title">团队组建</p>
                <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
                        <Checkbox label="show">Show</Checkbox>
                        <Checkbox label="weak">Weak</Checkbox>
                        <Checkbox label="signin">Signin</Checkbox>
                        <Checkbox label="click">Click</Checkbox>
                        <Checkbox label="active">Active</Checkbox>
                        <Checkbox label="day7">7, retained</Checkbox>
                        <Checkbox label="day30">30, retained</Checkbox>
                        <Checkbox label="tomorrow">The next day left</Checkbox>
                        <Checkbox label="day">Day Active</Checkbox>
                        <Checkbox label="week">Week Active</Checkbox>
                        <Checkbox label="month">Month Active</Checkbox>
                </Checkbox-group>
                <Table :data="tableData2" :columns="tableColumns2" border></Table>
        </Card>

</template>
<script>
export default {
        data() {
                return {
                        tableData2: this.mockTableData2(),
                        tableColumns2: [],
                        tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month'],
                        datals: [
                                {
                                        id: 901,
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
                }
        },
        methods: {
                mockTableData2() {
                        let data = [];
                        function getNum() {
                                return Math.floor(Math.random() * 10000 + 1);
                                //this.datals
                                //console.log(this.datals)
                        }
                        for (let i = 0; i < 10; i++) {
                                data.push({
                                        name: i + 1,
                                        fav: 0,
                                        show: getNum(),
                                        weak: getNum(),
                                        signin: getNum(),
                                        click: getNum(),
                                        active: getNum(),
                                        day7: getNum(),
                                        day30: getNum(),
                                        tomorrow: getNum(),
                                        day: getNum(),
                                        week: getNum(),
                                        month: getNum()
                                })
                        }
                        return data;
                },
                getTable2Columns() {
                        const table2ColumnList = {
                                name: {
                                        title: '编号',
                                        key: 'id',
                                        fixed: 'left',
                                        width: 100,
                                        render: (h, params) => {
                                                const fav = this.tableData2[params.index].fav;
                                                const style = fav === 0 ? {
                                                        cursor: 'pointer'
                                                } : {
                                                                cursor: 'pointer',
                                                                color: '#f50'
                                                        };

                                                return h('div', [
                                                        h('Icon', {
                                                                style: style,
                                                                props: {
                                                                        type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                                                                },
                                                                nativeOn: {
                                                                        click: () => {
                                                                                this.toggleFav(params.index);
                                                                        }
                                                                }
                                                        }),
                                                        h('span', ' ' + params.row.name)
                                                ]);
                                        }
                                },
                                show: {
                                        title: '单位名称',
                                        key: 'show',
                                        width: 150,
                                        sortable: true
                                },
                                weak: {
                                        title: '联系方式',
                                        key: 'weak',
                                        width: 150,
                                        sortable: true
                                },
                                signin: {
                                        title: '需求人数',
                                        key: 'signin',
                                        width: 150,
                                        sortable: true
                                },
                                click: {
                                        title: '地点',
                                        key: 'click',
                                        width: 200,
                                        sortable: true
                                },
                                active: {
                                        title: '用人时间',
                                        key: 'active',
                                        width: 150,
                                        sortable: true
                                },
                                day7: {
                                        title: '最近7天登录',
                                        key: 'day7',
                                        width: 150,
                                        sortable: true
                                },
                                day30: {
                                        title: '最近30天登录',
                                        key: 'day30',
                                        width: 150,
                                        sortable: true
                                },
                                tomorrow: {
                                        title: '次日留存',
                                        key: 'tomorrow',
                                        width: 150,
                                        sortable: true
                                },
                                day: {
                                        title: '日活跃',
                                        key: 'day',
                                        width: 150,
                                        sortable: true
                                },
                                week: {
                                        title: '周活跃',
                                        key: 'week',
                                        width: 150,
                                        sortable: true
                                },
                                month: {
                                        title: '月活跃',
                                        key: 'month',
                                        width: 150,
                                        sortable: true
                                }
                        };

                        let data = [table2ColumnList.name];

                        this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

                        return data;
                },
                changeTableColumns() {
                        this.tableColumns2 = this.getTable2Columns();
                },
                toggleFav(index) {
                        this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
                }
        },
        mounted() {
                this.changeTableColumns();
        }
}
</script>
