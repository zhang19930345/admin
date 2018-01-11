<style lang="less" scoped>
   .lest{
    font-size:20px;
    font-weight: 600;
    text-align: left;
}
</style>
<template>
    <div class="box">
        <Card>
            <div slot="title" class="lest">订单记录</div>
            <Table :columns="feedback" :data="datlist"></Table>
            <div style="margin: 15px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Card>
    </div>
</template>
<script>

export default {//欠缺功能筛选
    data() {
        return {
            feedback: [
                {
                    title: 'openID',
                    key: 'id'
                },
                {
                    title: '订单号',
                    key: 'order'
                },
                {
                    title: '订单类型',
                    key: 'orderType'
                },
                {
                    title: '订单金额',
                    key: 'ordeerMontey'
                },
                {
                    title: '支付类型',
                    key: 'payment'
                },
                {
                    title: '支付时间',
                    key: 'paymentTime'
                },
                {
                    title: '支付状态',
                    key: 'paymentState'
                },
                {
                    width: 200,
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'large'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看详情')
                        ])
                    }
                }
            ],
            datlist: [
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
                {
                    id: 'jdhjhsjd545552332jd',
                    order: 958564565,
                    orderType: '兼职订单',
                    ordeerMontey: '10000￥',
                    payment: '支付宝',
                    paymentTime: '2018-11-19',
                    paymentState: '以支付'
                },
            ]
        }
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: '订单详情',
                content: `id:${this.datlist[index].id}<br><br>订单号：${this.datlist[index].order}<br><br>订单累心：${this.datlist[index].orderType}<br><br>订单金额：${this.datlist[index].ordeerMontey}<br><br>支付类型：${this.datlist[index].payment}<br><br>支付时间：${this.datlist[index].paymentTime}<br><br>支付状态：${this.datlist[index].paymentState}`
            })
        },
        changePage() {
            alert(123)
        }
    }
}
</script>