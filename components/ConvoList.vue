<template>
  <v-list>
        <v-list-item
          v-for="i in 20"
          :key="i"
          exact
          style="padding-left:8px"
          @click="$nuxt.$emit('gotoroom',i)"
        >
            <v-list-item-avatar color="primary" size="40">Y</v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Yunus Ramazan</v-list-item-title>
            <v-list-item-subtitle>Love you dad</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      data:false
      
    }
  },
 
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
