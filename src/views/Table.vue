<template>
  <main>
    <table>
      <caption>
        User table
      </caption>

      <thead>
        <tr>
          <th v-for="(item, key, index) in UsersList[0]" :key="index">
            {{ key }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(user, index) in UsersList" :key="index">
          <td>
            {{ user.name }}
          </td>
          <td>
            {{ user.city }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import userAPI from "../apis/user.js";
import { ref } from "vue";

export default {
  name: "Table",
  setup() {
    const UsersList = ref([]);

    const fetchUser = async () => {
      try {
        const { data, statusText } = await userAPI.getUsers();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        UsersList.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();

    return { UsersList };
  },
};
</script>

<style lang="scss" scoped>
main {
  color: var(--table-font);
  table {
    margin: 0 auto;
    border-spacing: 1px;
    td {
      text-align: left;
    }
    th,
    td {
      border: 1px solid var(--table-border);
    }
    thead {
      tr {
        th:first-child {
          border-radius: 5px 0 0 0;
        }
        th:last-child {
          border-radius: 0 5px 0 0;
        }
      }
    }
    tbody {
      tr:last-child {
        td:first-child {
          border-radius: 0 0 0 5px;
        }
        td:last-child {
          border-radius: 0 0 5px 0;
        }
      }
    }
  }
}
</style>
