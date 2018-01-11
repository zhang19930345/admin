<style lang="less">
    .lest{
        text-align: left;
        font-size:20px;
        font-weight:600;
    }
</style>
<template>
    <div>
        <Card>
            <div slot="title" class="lest">新闻列表</div>
            <Table :data="baioData" :columns="columnsBaio"></Table>
        </Card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            columnsBaio: [
                {
                    titie: 'ID',
                    key: 'id',
                },
                {
                    title: '新闻类别',
                    key: 'newsSate'
                },
                {
                    title: ''
                }
            ]
        }
    }
}
</script>