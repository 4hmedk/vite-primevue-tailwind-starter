<template>
  <div>
    <div class="card">
      <Menubar
        :model="items"
        :ptOptions="{ mergeProps: true }"
        :pt="{ rootList: 'font-bold' }"
      >
        <template #start>
          <span class="font-bold text-lg">App Name</span>
        </template>
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="{ name: item.route }"
          >
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
        </template>
        <template #end>
          <div class="flex items-center gap-2">
            <Avatar image="https://i.pravatar.cc/300" shape="circle" />
          </div>
        </template>
      </Menubar>
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";

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

<style scoped>
.router-link-exact-active {
  color: var(--p-primary-500);
}
</style>
