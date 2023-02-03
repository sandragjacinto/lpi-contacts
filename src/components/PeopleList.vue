<template>
  <MyModal v-if="editingPerson" @close="closeModal" :person="editingPerson"/>
  <div  v-else>
    <h1 class="title">List all persons</h1>
   <PersonTable :peopleList="peopleList" @show="showModal"/>
  </div>
</template>


<script >
import { mapState } from 'vuex';
import MyModal from './MyModal.vue';
import PersonTable from './PersonTable.vue';

export default {
  components: {
    MyModal,
    PersonTable
  },
  computed: {
    ...mapState({
      peopleList: state => state.people,
    }),
  },
  data() {
    return {
      editingPerson: null,
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