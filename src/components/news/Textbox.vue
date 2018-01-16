<style lang="less">
        .ive_title{
                margin-bottom: 20px;
        }
</style>
<template>
        <div class="ive_box">
                <div slot="title" class="ive_title">添加新闻</div>
                <Form :label-width="80">
                        <FormItem label="标题">
                                <Col span="12">
                                <Input placeholder="请输入标题" size="large"></Input>
                                </Col>
                        </FormItem>
                        <FormItem label="副标题">
                                <Col span="12">
                                <Input placeholder="请输入副标题" size="large"></Input>
                                </Col>
                        </FormItem>
                        <FormItem label="新闻类型">
                                <Col span="8">
                                <Select size="large"></Select>
                                </Col>
                        </FormItem>
                        <FormItem label="作者">
                                <Col span="12">
                                <Input placeholder="请输入作者姓名" size="large"></Input>
                                </Col>
                        </FormItem>
                        <FormItem label="原文链接">
                                <Col span="12">
                                <Input placeholder="请输入url地址" size="large"></Input>
                                </Col>
                        </FormItem>
                        <FormItem label="关键词">
                                <Col span="12">
                                <Input placeholder="请输入副标题" size="large"></Input>
                                </Col>
                        </FormItem>
                        <FormItem label="描述">
                                <Col span="12">
                                <Input type="textarea"></Input>
                                </Col>
                        </FormItem>
                        <FormItem label="内容">
                                <Input type="textarea" placeholder="内容"></Input>
                        </FormItem>
                        <FormItem>
                                <Button type="primary">保存</Button>
                                <Button type="ghost" style="margin-left: 8px">清除</Button>
                        </FormItem>
                </Form>
        </div>
</template>
<script>
export default {
        data() {
                return {

                }
        },
        methods: {

        }
}
</script>