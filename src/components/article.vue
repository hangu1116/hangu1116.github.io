<template>
  <div>
    <div class="body">
        <h1>{{articleTitle}}</h1>
<p>{{content}}</p>
        {{id}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "catalog",
      data(){
          return {
          id:this.$route.query.id,
          title: 'Cuiyanjie\'s Notebook',
          addPost:'Add post',
          newPost:'Strating write a new article.',
            articleTitle: 'How did I find out a dead man in the closet?',
              date: '2018.7.13',
              edate:'2018.8.5',
              draft:true,
              content:'默认参数和不定参数的目标是完全取代arguments对象\n' +
              '\n' +
              '严格模式（\'use strict\';）对arguments做了一些限制，如下：\n' +
              '\n' +
              'eval和arguments不能通过程序语法被绑定(be bound)或赋值\n' +
              '\n' +
              '参数的值不会随arguments对象的值的改变而变化，反之亦然\n' +
              '\n' +
              '不再支持arguments.callee\n' +
              '\n' +
              '（摘自严格模式 – JavaScript | MDN）\n' +
              '\n' +
              '前两条都是对arguments对象的不满，但因为arguments对象是实现可变参函数的关键方法（当然，也可以用Object/Array类型参数模拟，但不如arguments方便灵活），还得继续支持，所以希望通过严格模式（补丁）来限制arguments对象\n' +
              '\n' +
              '而第三条表示黑科技被封印了，arguments现在名副其实了（只和参数打交道）\n' +
              '\n' +
              'ES6（新版本）在严格模式的基础上更进一步，希望大家慢慢忘掉arguments对象，而不定参数就是替代方案，还有锦上添花的默认参数\n' +
              '\n'
        }
      },
      methods: {
        dateFormat: (date) => {
          const formatedDate=new Date(date);
          const days = formatedDate.getDate();
          const months = formatedDate.getMonth()+1;
          const years = formatedDate.getFullYear();
          let str = ('00'+days).slice(-2)+" / "+('00'+months).slice(-2) + ' / '+years;
          return str;
        },
        dateEdited: (date) => {
          if(!date || date.length===0){
            return null;
          }else {
            const formatedDate = new Date(date);
            const days = formatedDate.getDate();
            const months = formatedDate.getMonth() + 1;
            const years = formatedDate.getFullYear();
            let str = " · Edited " + ('00' + days).slice(-2) + " / " + ('00' + months).slice(-2) + ' / ' + years;
            return str;
          }
        }
      }
    }
</script>

<style scoped>
  .body{
    padding:10% 26%;
  }
  h1{
    font-size: 30px;
    line-height: 34px;
    color: #333;
    text-align: left;
    font-weight: 500;
    width: 90%;
    padding: 0px 8px;
    margin:14px 0px;
  }
  p{
    text-align: left;
    font-size: 18px;
    color: #333;
    line-height: 34px;
    padding: 0px 8px;
    margin:26px 0px;
  }
  .separate{
    width: 100%;
    height: 1px;
    margin:34px 0px;
    background-color: #e6e8e9;
  }
  .newPost{
    font-size: 18px;
    line-height: 14px;
    color: #a7a8a9;
    font-weight: normal;
    text-align: left;
    padding: 0px 8px;
    margin:0px 0px;
  }

</style>
