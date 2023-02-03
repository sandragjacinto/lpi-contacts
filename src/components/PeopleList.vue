<template>
  <MyModal v-if="editingPerson" @close="closeModal" :person="editingPerson"/>
  <div  v-else>
    <h1 class="title">List all persons</h1>
    <table  class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>City</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in peopleList" :key="person.id" @click="showModal(person)">
          <td>{{ person.firstname }}</td>
          <td>{{ person.lastname }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.address.city }}</td>
          <td>{{ person.address.country }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>


<script >
import { mapState } from 'vuex';
import MyModal from './MyModal.vue';

export default {
  components: {
    MyModal
  },
  computed: {
    ...mapState({
      peopleList: state => state.people,
    }),
  },
  data() {
    return {
      editingPerson: null
    };
  },
  methods: {
    showModal(person) {
      this.editingPerson = person;
    },
    closeModal() {
      this.editingPerson = null;
    }
  },
};
</script>