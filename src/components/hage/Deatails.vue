<style lang="less">

</style>
<template>
        <div>
                 <Row :gutter="10">
                        <Col span="2">
                            <Row type="flex" justify="center" align="middle" class="edittable-table-get-currentdata-con">
                                <Button type="primary" @click="getCurrentData">单枪菜鸟</Button>
                            </Row>
                        </Col>
                        <Col span="22">
                            <div>
                                <Table 
                                    v-model="editInlineAndCellData" 
                                    @on-cell-change="handleCellChange" 
                                    @on-change="handleChange"  
                                    :editIncell="true" 
                                    :columns-list="editInlineAndCellColumn"
                                ></Table>
                            </div>
                        </Col>
                </Row>
        </div>
</template>
<script>
export default {
        data() {
                return {
                        editInlineAndCellData: [],
                        editInlineAndCellColumn: [
                                {
                                        title: '序号',
                                        type: 'index',
                                        width: 80,
                                        align: 'center'
                                },
                                {
                                        title: '姓名',
                                        align: 'center',
                                        key: 'name',
                                        width: 300,
                                        editable: true
                                },
                                {
                                        title: '性别',
                                        align: 'center',
                                        key: 'sex'
                                },
                                {
                                        title: '岗位',
                                        align: 'center',
                                        width: 300,
                                        key: 'work',
                                        editable: true
                                },
                                {
                                        title: '操作',
                                        align: 'center',
                                        width: 200,
                                        key: 'handle',
                                        handle: ['edit', 'delete']
                                }
                        ],
                }
        },
        methods: {
                getCurrentData() {
                        alert(123);
                },
                handleChange() {
                        alert(123)
                },
                handleCellChange() {
                        alert(123)
                }

        }
}
</script>

