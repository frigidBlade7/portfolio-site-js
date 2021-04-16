<template>
  <nav class="flex justify-between">
    <nuxt-link to="/">
      <img
        src="@/assets/svg/maclean_logo.svg"
        alt="Maclean Logo"
        class="mt-10 md:ml-14 ml-8"
      />
    </nuxt-link>

    <div class="flex lg:mt-5 xl:mt-10 mr-14 invisible lg:visible">
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
      <!-- <a
          href="@/assets/pdf/joseph-maclean-arhin-resume.pdf"
          download="Joseph_Maclean_Arhin_Resume.pdf"
        > -->
      <!-- <button
        class="btn-outline bg-black-pearl border-white border-2 text-body-bold text-white px-6 py-2"
      >
        download my resume
      </button> -->
      <!-- </a> -->
    </div>
  </nav>
</template>
