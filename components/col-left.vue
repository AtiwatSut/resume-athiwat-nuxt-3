<template>
  <div class="left">
    <div class="text-center pa-5">
      <v-avatar size="200">
        <img class="ma-auto" src="~/assets/img/profile.jpg" width="200"/>
      </v-avatar>
    </div>
    <div>
      <div class="d-flex" @click="toggle =! toggle">
        <v-btn class="mx-2" fab dark variant="outlined" color="primary" size="40">
          <v-icon :class="{'active': !toggle}" size="20" >{{ toggle?'fa-solid fa-minus': 'fa-solid fa-plus' }}</v-icon>
        </v-btn>
        <h2>{{ user.address.title }}</h2>
      </div>
      <v-expand-transition>
        <div v-show="toggle">
          <div class="ml-4 px-5 mt-2" v-for="(contact, index) in user.address.contact" :key="index">
            <div>
              <v-btn fab dark color="primary" variant="outlined" class="mr-2" size="40">
                <v-icon size="20">{{contact.icon}}</v-icon>
              </v-btn>
              {{ contact.value }}
            </div>
          </div>
        </div>
      </v-expand-transition>
      <div>
        <div class="d-flex mt-4 mb-2" @click="toggleSkill =! toggleSkill">
          <v-btn class="mx-2" fab dark variant="outlined" color="primary" size="40">
            <v-icon :class="{'active': !toggleSkill}" size="20" >{{ toggleSkill?'fa-solid fa-minus': 'fa-solid fa-plus' }}</v-icon>
          </v-btn>
          <h2>{{ user.skill.title }}</h2>
        </div>
        <v-expand-transition>
          <v-row class="pl-7" v-show="toggleSkill" align="center" no-gutters>
            <v-col class="ma-2 text-center" cols="auto" sm="auto" v-for="(item, index) in user.skill.data" :key="`item_${index}`">
              <v-card color="#CFD8DC" variant="outlined" class="pt-2 px-2">
                <img class="image" :src="item.img"> 
              </v-card>
              <small class="f-size"><b>{{ item.text }}</b></small>
            </v-col>
            <v-col class="ma-2 text-center" cols="auto" sm="auto" v-for="(item, index) in user.skill.items" :key="index">
              <v-card color="#CFD8DC" variant="outlined" class="pt-2 px-2">
                <img class="image" :src="item.img">
              </v-card>
              <small class="f-size"><b>{{ item.text }}</b></small>
            </v-col>
          </v-row>
        </v-expand-transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const toggle = ref(true)
const toggleSkill = ref(true)

const { user, mode } = defineProps({
  mode: { type: String, default: "TH" },
  user: { type: Object, default: null }
});
</script>

<style lang="scss" scoped>
$size: 28px;
.left { position: relative; z-index: 1000; }
.active { transform: rotate(-90deg); }
.image { height: $size; width: $size; }
.f-size { font-size: 10px }
</style>