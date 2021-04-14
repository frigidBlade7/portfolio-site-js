<template>
  <main class="bg-black-pearl">
    <div class="table-cell align-middle">
      <div class="flex justify-center relative">
        <div class="content">
          <img
            src="@/assets/svg/maclean_logo.svg"
            alt="Maclean Logo"
            class="h-5 mb-8"
          />
          <vue-typed-js
            :strings="[
              '<h1>Hi I\'m <span><a href >Maclean<a/></span>, a software engineer.</h1>',
            ]"
            :content-type="'html'"
          >
            <h1 class="typing text-white"></h1>
          </vue-typed-js>

          <nuxt-link to="/language-skill">
            <div ref="icons" class="icons block">
              <div
                class="mt-10 flex w-80 rounded-full bg-stone py-5 px-10 justify-between cursor-pointer"
              >
                <ul class="flex w-44 justify-between">
                  <li>
                    <a href="/" class="language-logo">
                      <img
                        src="@/assets/svg/python_logo.svg"
                        alt="python logo"
                        class="cursor-pointer"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/" class="language-logo">
                      <img
                        src="@/assets/svg/typescript_logo.svg"
                        alt="typescript logo"
                        class="cursor-pointer"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/" class="language-logo">
                      <img
                        src="@/assets/svg/swift_logo.svg"
                        alt="swift logo"
                        class="cursor-pointer"
                      />
                    </a>
                  </li>
                </ul>
                <div class="h-8 flex">
                  <img
                    src="@/assets/svg/chevron_right.svg"
                    alt="chevron right"
                  />
                </div>
              </div>
            </div>
          </nuxt-link>
          <hr class="mt-14" />

          <div class="flex mt-12">
            <button
              class="btn-outline bg-black-pearl border-white border-2 text-body-bold text-white px-6 py-4"
            >
              download my resume
            </button>
            <a
              href="https://blog.josephmaclean.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                class="bg-black-pearl text-body-bold text-white px-6 py-4 btn-regular"
              >
                go to blog
              </button>
            </a>
          </div>
        </div>
        <social-media />
      </div>
    </div>
  </main>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'
export default {
  components: { SocialMedia },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
main {
  @apply fixed;
  @apply top-0;
  @apply left-0;
  @apply bottom-0;
  @apply right-0;
  @apply w-full;
  @apply h-full;

  display: table;
}

.content {
  width: 46.0625rem;
}

h1.typing {
  span {
    display: inline-block;
    color: #23cb23;
    position: relative;
    cursor: pointer;
    &::after {
      position: absolute;
      bottom: -12px;
      left: 0;
      content: '';
      display: inline-block;
      width: 0;
      height: 20px;
      background-color: #23cb23;
      transition: width 0.3s;
    }
    &:hover::after {
      width: 40%;
      transition: width 0.3s;
    }
  }
}

.icons {
  > div {
    transition: width 0.3s;

    &:hover {
      width: 21rem;
      transition: width 0.3s;
    }
  }
}
</style>
