<template>
  <div class="bg-blue-light">
    <div
      class="header font-base text-base bg-teal h-160 w-full mb-header overflow-hidden bg-header-m lg:bg-header bg-cover"
    ></div>
    <div class="px-4">
      <div
        v-if="activeClass.length != 0"
        class="filter-list flex-wrap bg-white max-w-list lg:mx-auto shadow-listing rounded-md flex px-4 py-6 transform -translate-y-filter"
      >
        <div class="flex flex-wrap flex-1">
          <template v-for="selected in activeClass.values()">
            <div class="flex mt-2 lg:mt-0" :key="selected">
              <p
                class="rounded-l-md bg-blue-light pl-4 pr-2 py-1 text-teal font-medium"
              >
                {{ selected }}
              </p>
              <span
                v-on:click="removeSelected(selected)"
                class="bg-teal px-2 mr-4 rounded-r-md text-white leading-7 font-medium cursor-pointer hover:bg-black"
                >x</span
              >
            </div>
          </template>
        </div>
        <p
          v-on:click="removeSelected('all')"
          class="ml-auto px-2 py-1 text-teal cursor-pointer font-medium flex items-center"
        >
          Clear
        </p>
      </div>
    </div>

    <div
      class="listings w-full container flex flex-col max-w-list px-4 mx-auto transition-all"
    >
      <template v-for="listing in listings">
        <div
          :key="listing.id"
          class="listing relative bg-white shadow-listing mb-bottom-m lg:mb-bottom p-list-m lg:p-list rounded-sm flex flex-col lg:flex-row content-center last:mb-10"
          :class="[
            getTag(listing),
            listing.featured ? 'border-l-4 border-teal-500' : '',
          ]"
        >
          <img
            class="h-image w-image min-h-image min-w-image absolute lg:relative -top-image lg:top-0"
            :src="listing.logo"
            :alt="listing.company"
          />
          <div class="flex flex-col lg:ml-4 justify-between mt-image-m lg:mt-0">
            <div class="flex items-center flex-wrap">
              <div class="text-teal text-lg font-medium mr-2 mt-1 lg:mt-0">
                {{ listing.company }}
              </div>
              <div
                class="rounded-full bg-teal text-xs text-white text-center font-medium p-1 px-3 mr-2 mt-1 lg:mt-0"
                v-if="listing.new"
              >
                NEW!
              </div>
              <div
                class="rounded-full uppercase bg-black text-xs text-white text-center font-medium p-1 px-3 mt-1 lg:mt-0"
                v-if="listing.featured"
              >
                featured
              </div>
            </div>
            <div class="text-lg font-medium mt-3 lg:mt-0">
              {{ listing.position }}
            </div>
            <div class="text-base text-gray-500 mt-3 lg:mt-0">
              {{ listing.postedAt }}<span class="mx-3">•</span>
              {{ listing.contract }}<span class="mx-3">•</span
              >{{ listing.location }}
            </div>
          </div>
          <div class="flex items-center lg:ml-auto flex-wrap mt-3 lg:mt-0">
            <p
              v-for="x in getTag(listing).flat(2)"
              :key="x"
              v-on:click="filter(x)"
              class="mt-2 lg:mt-0 mr-2 last:mr-0 cursor-pointer text-base bg-blue-light text-teal rounded-sm font-medium px-2 py-1 hover:bg-black hover:text-white"
            >
              {{ x }}
            </p>
          </div>
        </div>
      </template>
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
    removeSelected(tag) {
      var index = this.activeClass.indexOf(tag);
      if (index !== -1) {
        this.activeClass.splice(index, 1);
      } else if (tag == "all") {
        this.activeClass = [];
      }
      this.checkClass();
    },
    filter(tag) {
      if (!this.activeClass.includes(tag)) this.activeClass.push(tag);
      this.checkClass();
    },
    checkClass() {
      var listings = document.querySelectorAll(".listing");
      if (this.activeClass.length != 0) {
        var activeClasses =
          "." + this.activeClass.toString().replace(/,/gi, ".");
        for (const listing in listings) {
          if (listings[listing].classList) {
            listings[listing].classList.remove("hidden");
            if (!listings[listing].matches(activeClasses)) {
              listings[listing].classList.add("hidden");
            }
          }
        }
      } else {
        for (const listing in listings) {
          if (listings[listing].classList) {
            listings[listing].classList.remove("hidden");
          }
        }
      }
    },
    getTag(listing) {
      let tag = [];
      for (const key in listing) {
        if (key == "level" || key == "role") {
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
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap");

body {
  font-family: "Spartan", sans-serif;
}
#__nuxt {
  min-height: 100vh;
  @apply bg-blue-light;
}
</style>
