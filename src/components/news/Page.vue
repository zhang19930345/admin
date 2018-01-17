<style lang="less">

</style>
<template>
        <div class="ive-box">
                <textarea name="" id="textarea"></textarea>
        </div>
</template>
<script>
import tinymce from 'tinymce'
export default {
        name: 'Page',
        data() {
                return {
                }
        },
        methods: {
                init() {
                        this.$nextTick(() => {
                                tinymce.init({
                                        selector: '#textarea',
                                        language: 'zh_CN',//语言
                                        menubar: 'edit insert view format table tools',
                                        plugins: [//插件
                                                'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                                                'searchreplace visualblocks visualchars code fullpage',
                                                'insertdatetime media nonbreaking save table contextmenu directionality',
                                                'emoticons paste textcolor colorpicker textpattern imagetools codesample'
                                        ],

                                })
                        })
                }
        },
        mounted() {
                this.init();
        },
        components: { tinymce }
}
</script>