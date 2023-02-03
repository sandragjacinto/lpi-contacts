<template>
  <div  v-if="person" :class="{ 'is-active': editingPerson }">
    <div class="modal-background" ></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Person</p>
      </header>
      <section class="modal-card-body">
        <form>
          <BasicForm v-model="editingPerson.firstname" label="First Name" type="text" />
          <BasicForm v-model="editingPerson.lastname" label="Last Name" type="text" />
          <BasicForm v-model="editingPerson.email" label="Email" type="text" />
          <BasicForm v-model="editingPerson.address.city" label="City" type="text" />
          <BasicForm v-model="editingPerson.address.country" label="Country" type="text" />
        </form>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-success" @click="saveChanges">Save</button>
        <button class="button is-danger" @click="deleteUser">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script>
import BasicForm from './BasicForm.vue';

export default {
  components: {
    BasicForm
  },
  props: ['person'],
  data() {
    return {
      editingPerson: Object.assign({}, this.person)
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    saveChanges() {
      this.$store.dispatch('editPerson', this.editingPerson);
      this.closeModal();
    },
    deleteUser() {
      this.$store.dispatch('deletePerson', this.editingPerson);
      this.closeModal();
    }
  }
};
</script>
