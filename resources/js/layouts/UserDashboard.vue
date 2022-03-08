<template>
  <div>
    <b-sidebar
      id="sidebar"
      title="Kinetik Dynamics"
      v-model="show"
      width="220px"
      shadow
    >
      <div class="px-3 py-2">
        <nav class="mb-3">
          <side-nav />
        </nav>
      </div>
    </b-sidebar>
    <b-row>
      <b-col :offset="offset" :cols="cols">
        <b-navbar toggleable="lg">
          <b-button size="sm" variant="outline-primary" @click="toggleSidebar">
            <b-icon icon="toggles"></b-icon>
          </b-button>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>{{ user.name }}</em>
                </template>
                <b-dropdown-item href="#" @click.prevent="logout"
                  >Log Out</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>

        <b-container>
          <div class="mt-2">
            <slot></slot>
          </div>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.b-sidebar-header .close {
    display: none;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import SideNav from "../components/users/SideNav";

export default {
  components: {
    SideNav,
  },
  data() {
    return {
      show: true,
      offset: 2,
      cols: 10,
    };
  },
  computed: {
    ...mapGetters("login", ["user"]),
  },
  methods: {
    ...mapActions("login", ["unauthenticate"]),
    toggleSidebar() {
      console.log("hello");
      this.show = !this.show;
      this.offset = this.show ? 2 : 0;
      this.cols = this.show ? 10 : 12;
    },
    logout() {
      this.unauthenticate()
        .then(() => {
          this.$router.replace({ name: "login" });
        })
        .catch((error) => {
          console.error(error.response.data.message);
        });
    },
  },
};
</script>
