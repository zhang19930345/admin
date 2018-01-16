<style lang="less">

</style>
<template>
        <div>
                <Button @click="data">Normal</Button>
        </div>
</template>
<script>
export default {
        methods: {
                data() {
                        this.$Modal.info({
                                title: '235',
                                content: '<p>Content of dialog</p><p>Content of dialog</p>',
                                onOk: () => {
                                        this.$Message.info('321');
                                },
                                /*   onCancel: () => {
                                      this.$Message.info('123');
                                  } */
                        });
                }

        }
}
</script>
