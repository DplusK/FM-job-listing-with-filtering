<template>
  <div class="bg-blue-light">
    <div
      class="header bg-teal h-160 w-full mb-header overflow-hidden bg-header bg-cover"
    ></div>
    <div class="listings w-full container flex flex-col max-w-list mx-auto">
      <div
        v-for="listing in listings"
        :key="listing.id"
        class="bg-white shadow-listing mb-bottom p-list rounded-sm flex content-center last:mb-0"
        :class="[
          'id-' + listing.id,
          getTag(listing),
          listing.featured ? 'border-l-4 border-teal-500' : '',
        ]"
      >
        <img class="w-image h-image" fit="contain" :src="listing.logo" />
        <div class="flex flex-col ml-3 justify-between">
          <div class="flex items-center">
            <div class="color-teal text-lg font-medium">
              {{ listing.company }}
            </div>
            <div
              class="rounded-full bg-teal text-xs text-white text-center font-medium p-1 px-3 ml-2"
              v-if="listing.new"
            >
              NEW!
            </div>
            <div
              class="rounded-full uppercase bg-black text-xs text-white text-center font-medium p-1 px-3 ml-2"
              v-if="listing.featured"
            >
              featured
            </div>
          </div>
          <div class="text-lg font-medium">{{ listing.position }}</div>
          <div class="text-base text-gray-500">
            {{ listing.postedAt }}<span class="mx-3">•</span>
            {{ listing.contract }}<span class="mx-3">•</span
            >{{ listing.location }}
          </div>
        </div>
        <div class="flex items-center ml-auto">
          <p
            v-for="x in getTag(listing).flat(2)"
            :key="x"
            v-on:click="filter(x)"
            class="ml-2 bg-blue-light text-teal rounded-sm font-medium px-2 py-1"
          >
            {{ x }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listings: [],
      activeClass: [],
    };
  },
  mounted() {
    this.listings = require(`@/assets/data/data.json`);
  },
  methods: {
    filter(tag) {
      this.activeClass.push(tag);
      return this.activeClass;
    },
    getTag(listing) {
      let tag = [];
      for (const key in listing) {
        if (key == "level") {
          tag.push(listing[key]);
        } else if (key == "languages" || key == "tools") {
          tag.push(listing[key]);
        }
      }
      return tag;
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
