<template>
  <div>

    <div class="body">
  <div v-for="(item,index) in article"><router-link :to="{name:'article',query:{id:item.id}}">
    <h1>{{item.title}}</h1>
    <h2>{{dateFormat(item.date)}}{{dateEdited(item.edate)}}{{item.draft?' · Draft':null}}</h2>
    <div class="separate"></div>
  </router-link>
  </div>
      <div class="newPost">
        {{newPost}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        newPost:'Strating write a new article.',
        article: [{
          id:2,
          title: 'The bizzare tales of UX/UI designer',
          date: '2018.8.25'
        },
          {
            id: 1,
            title: 'How did I find out a dead man in the closet?',
            date: '2018.7.13',
            edate:'2018.8.5',
            draft:true
          },
          {
            id: 0,
            title: 'Why nobody gives a fuck about your work? -jumping to conclusions',
            date: '2018.7.10'
          }
        ]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:hover, a:visited, a:link, a:active {
  text-decoration: none;
    color: #333;
  }
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
  h2{
    font-size: 12px;
    line-height: 14px;
    color: #a7a8a9;
    font-weight: normal;
    text-align: left;
    padding: 0px 8px;
    margin:0px 0px;
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
