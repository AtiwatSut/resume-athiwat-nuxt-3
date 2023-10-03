<template>
  <div>
    <div class="page">
      <v-card variant="outlined">
        <v-row no-gutters v-if="data">
          <v-col cols="12" sm="4" md="4">
            <div class="col-left">
              <ColLeft :user="data" />
            </div>
          </v-col>
          <v-col cols="12" sm="8" md="8">
            <div class="col-right">
              <ColRight :user="data">
                <v-btn-toggle color="primary" v-model="toggle" density="default">
                  <v-btn class="px-4" size="x-small" variant="outlined"> TH </v-btn>
                  <v-btn class="px-4" size="x-small" variant="outlined"> EN </v-btn>
                </v-btn-toggle>
              </ColRight>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const info = ref(null)
const toggle = ref(1)
const data = computed(() => {
  if (lang.value == 'TH' && info.value) {
    return info.value.TH
  } else if (lang.value == 'EN' && info.value) {
    return info.value.EN
  }
})
const lang = computed(() => {
  if (toggle.value == 0) return "TH"
  else return "EN"
})
const getInfo = async () => {
  let { data } = await useFetch('./info.json', { method: 'GET' })
  let response = JSON.parse(JSON.stringify(data.value))
  info.value = response
}

onMounted(async() => {
  await nextTick();
  await getInfo()
})
</script>

<style lang="scss" scoped>
.page {
  .col-left {
    z-index: 100 !important;
    width: 100%;
    min-height: 100%;
    background: url("~/assets/img/bg-img.jpg") top no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 0 90px 0 0;

    &:before {
      content: "";
      background: rgba(255, 255, 255, 0.856);
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
    }
  }
}

@media only screen and (max-width: 600px) {
  .page {
    .col-left {
      border-radius: unset !important
    }
  }
}</style>