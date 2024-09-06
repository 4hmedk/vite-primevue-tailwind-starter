<template>
  <div>
    <div class="card">
      <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="{ name: item.route }"
            custom
          >
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
      </Menubar>
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    route: "home",
  },
  {
    label: "About",
    icon: "pi pi-info-circle",
    route: "about",
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    route: "contact",
  },
]);
</script>

<style lang="scss" scoped></style>
