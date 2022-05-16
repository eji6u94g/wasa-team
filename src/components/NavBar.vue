<template>
  <nav>
    <button class="button">
      <router-link to="/">Home</router-link>
    </button>

    <button class="button">
      <router-link to="/table">table</router-link>
    </button>

    <input
      type="checkbox"
      name="darkModeToggle"
      id="darkModeToggle"
      @change="toggleDarkmode"
    />
    <label for="darkModeToggle"></label>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  setup() {
    const toggleDarkmode = (e) => {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    };

    return { toggleDarkmode };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/mixin.scss";

nav {
  width: 100%;
  text-align: left;
  box-shadow: 0 1px 2px 0px var(--nav-shadow);
  display: flex;
  align-items: center;
  .button {
    @include button;
    a {
      text-decoration: none;
      font-size: 20px;
      color: var(--btn-font);
    }
  }
  input[type="checkbox"] {
    height: 0;
    width: 0;
    display: none;
  }
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--toggle-bg);
    margin: 0 0;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: "";
    background: white;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: white;
  }

  input:checked + label:after {
    background-color: var(--toggle-bg);
    left: calc(100% - 4px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>