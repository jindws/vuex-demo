<template>
<section>
    <input type="text" v-model='message'>
    <button type="button" name="button" @click='join'>添加</button>
    <br>
    <dl>
      <dd v-for='(itm,index) in list'>{{itm}} <button @click='remove(index)'>删除</button></dd>
    </dl>
</section>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data(){
    return {
        message:''
    }
  },
  methods: {
      ...mapMutations([
          'addList',
          'removeList'
      ]),
      join(){
          if(this.message){
            this.addList(this.message)
            this.message = '';
          }
      },
      remove(index){
          this.removeList(index)
      }
  },
  computed: {
      ...mapGetters([
          'list',
      ])
  },
}
</script>
