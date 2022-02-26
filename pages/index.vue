<template>
  <div v-if="room">
    <v-app-bar rounded="lg" flat width="100%">
      <v-text-field v-model="roomname" class="rounded-lg ma-0 py-0" filled solo flat label="room name" hide-details />
      <v-btn @click="createRoom">create room </v-btn>
      <v-btn @click="openRoom">open room</v-btn>
    </v-app-bar>
    <v-row
      style="height: calc(100vh - 128px)"
      class="hidescroll"
      justify="center"
      align="center"
    >
      <v-col class="text-center" cols="12" sm="8" md="6">
        <v-btn @click="getdata"> get data </v-btn>
        {{roomdata}}
      </v-col>
    </v-row>
    <div style="height: 64px">
      <v-text-field v-model="msg" @keydown.enter.exact.prevent
          @keyup.enter.exact="sendmsg" class="rounded-lg ma-0 py-0" filled solo flat label="Write here" hide-details />
    </div>
  </div>
  <div v-else>
    <v-row
      style="height: 100vh"
      class="hidescroll"
      justify="center"
      align="center"
    >
      <v-col class="text-center" cols="12" sm="8" md="6">
        Select a chat or start a new one
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      room: undefined,
      msg: '',
      roomdata:undefined,
      roomname:'',
    }
  },
  mounted()
  {
    this.$nuxt.$on('gotoroom' ,(data) => {
      console.log('going to room',data);
      this.room = data;
    })
  },
  methods:
  {
    sendmsg()
    {
      if(this.msg !== '')
      {
        this.$orbitdb.insertDocument({msg:this.msg});
        this.msg = '';
      }
      
    },
    createRoom()
    {
      if(this.roomname !== '')
      {
        this.$orbitdb.createDB(this.roomname)
      }
    },
    openRoom()
    {
      if(this.roomname !== '')
      {
        this.$orbitdb.openDB(this.roomname)
      }
    },
    getdata()
    { 
      this.roomdata = this.$orbitdb.getAllDocs()
    }
  }
}
</script>
