<template>
    <Card>
        <div class="lest" slot="title">编辑</div>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
            <FormItem label="公司名称">
                <Input type="text" v-model="value1" @on-change="value1Change"></Input>
            </FormItem>
            <FormItem label="公司地址">
                <Input type="password" v-model="value2" @on-change="value2Change"></Input>
            </FormItem>
            <FormItem label="需求人数">
                <Input type="text" v-model="value3" @on-change="value3Change"></Input>
            </FormItem>
        </Form>
    </Card>
</template>
<script>
export default {
    name: 'Modal',
    data() {
        return {
            value1: "",
            value2: "",
            value3: "",
        }
    },
    methods: {
        value1Change() {
            var obj = this
            this.$emit('value1', obj.value1)
        },
        value2Change() {
            var obj = this
            this.$emit('value1', obj.value2)
        },
        value3Change() {
            var obj = this
            this.$emit('value1', obj.value3)
        }

    }
}
</script>
