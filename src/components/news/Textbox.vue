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
                                <textarea id="textarea"></textarea>
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
        mounted() {
                this.$nextTick(() => {
                        tinymce.init({
                                selector: "#textarea",
                                language: 'zh_CN.GB2312',
                                height: 300,
                                menubar: 'edit insert view format table tools',
                                plugins: [
                                        'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                                        'searchreplace visualblocks visualchars code fullpage',
                                        'insertdatetime media nonbreaking save table contextmenu directionality',
                                        'emoticons paste textcolor colorpicker textpattern imagetools codesample'
                                ],
                                toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
                                autosave_interval: '20s',
                                image_advtab: true,
                                table_default_styles: {
                                        width: '100%',
                                        borderCollapse: 'collapse'
                                },
                                setup: function (editor) {
                                        editor.on('init', function (e) {
                                                vm.spinShow = false;
                                                if (localStorage.editorContent) {
                                                        tinymce.get('tinymceEditer').setContent(localStorage.editorContent);
                                                }
                                        });
                                        editor.on('keydown', function (e) {
                                                localStorage.editorContent = tinymce.get('tinymceEditer').getContent();
                                        });
                                }
                        })
                })
        }
}
</script>