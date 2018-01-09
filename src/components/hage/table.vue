<style scoped>
.expand-row {
  margin-bottom: 16px;
}
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
            <span class="expand-key">单位名称: </span>
            <span class="expand-value">{{ row.entity }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">编号: </span>
            <span class="expand-value">{{ row.munber }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">需求人数: </span>
            <span class="expand-value">{{ row.requirements}}</span>
            </Col>
        </Row>
        <Row class="expand-row">
            <Col span="8">
            <span class="expand-key">时间: </span>
            <span class="expand-value">《{{ row.time}}》</span>
            </Col>
            <Col span="8">
            <span class="expand-key">预算: </span>
            <span class="expand-value">{{ row.budget }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">联系方式: </span>
            <span class="expand-value">{{ row.contact}}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
            <span class="expand-key">地点: </span>
            <span class="expand-value">{{ row.place}}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">组建状态: </span>
            <span class="expand-value" v-for="item of row.state" :key="item">{{item}}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    props: {
        row: Object
    }
};
</script>