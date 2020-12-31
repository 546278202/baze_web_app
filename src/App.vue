<script>
	import { mapMutations } from 'vuex'
    export default {
        onLaunch: function() {
            console.log('App Launch');
        },
        onShow: function() {
            console.log('App Show')
           
            console.log( this.$url.imgUr +'来自App')
        },
        onHide: function() {
            console.log('App Hide')
        }
    }
</script>

<style>

    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';
</style>
