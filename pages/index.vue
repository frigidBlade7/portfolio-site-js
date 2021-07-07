<template>
  <main
    class="bg-black-pearl fixed table h-full w-full top-0 left-0 right-0 bottom-0"
  >
    <div class="table-cell align-middle">
      <div class="flex justify-center">
        <div class="w-80 lg:w-110 md:w-102">
          <img
            src="@/assets/svg/maclean_logo.svg"
            alt="Maclean Logo"
            class="h-5 mb-8 absolute md:relative top-10 md:top-6 lg:top-6 left-8 md:left-0"
          />
          <vue-typed-js
            :strings="[
              `<h1>Hi I\'m <span id='name-link'>Maclean</span>, a software engineer.</h1>`,
            ]"
            :content-type="'html'"
            @onComplete="navigateToAbout"
          >
            <h1 class="typing text-white"></h1>
          </vue-typed-js>

          <div ref="icons" class="icons block">
            <nuxt-link to="/language-skill">
              <div
                class="mt-10 inline-block rounded-full bg-stone py-2 lg:py-5 px-6 lg:px-10 cursor-pointer"
              >
                <ul class="inline-block md:mr-4">
                  <li class="language-logo inline-block mr-4 md:mr-7">
                    <img
                      src="@/assets/svg/python_logo.svg"
                      alt="python logo"
                      class="cursor-pointer w-5 md:w-8 md:h-8"
                    />
                  </li>
                  <li class="language-logo inline-block mr-4 md:mr-7">
                    <img
                      src="@/assets/svg/typescript_logo.svg"
                      alt="typescript logo"
                      class="cursor-pointer w-5 md:w-8 md:h-8"
                    />
                  </li>
                  <li class="language-logo inline-block mr-4 md:mr-7">
                    <img
                      src="@/assets/svg/swift_logo.svg"
                      alt="swift logo"
                      class="cursor-pointer w-5 md:w-8 md:h-8"
                    />
                  </li>
                  <li class="language-logo inline-block">
                    <img
                      src="@/assets/svg/scala_logo.svg"
                      alt="scala logo"
                      class="cursor-pointer w-5 md:w-8 md:h-8"
                    />
                  </li>
                </ul>
                <div class="inline-block mr-2">
                  <img
                    src="@/assets/svg/chevron_right.svg"
                    alt="chevron right"
                    class="w-5 md:w-8"
                  />
                </div>
              </div>
            </nuxt-link>
          </div>
          <hr class="mt-14" />

          <div class="flex mt-12">
            <!-- <button
              class="btn-outline bg-black-pearl border-white border-2 text-body-bold text-white px-6 py-4"
            >
              download my resume
            </button> -->
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
  transition: 'intro',
  data() {
    return {}
  },
  methods: {
    navigateToAbout() {
      setTimeout(() => {
        document.querySelector('#name-link').addEventListener('click', () => {
          this.$router.push('/about')
        })
      }, 10)
    },
  },
}
</script>

<style lang="scss">
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
