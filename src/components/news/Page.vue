<template>
        <div>
                <div id="textarea"></div>
        </div>
</template>

<script>
export default {
        mounted() {
                this.$nextTick(() => {
                        let height = document.body.offsetHeight - 300;
                        tinymce.init({
                                selector: '#textarea',
                        });

                });
        }
};
</script>