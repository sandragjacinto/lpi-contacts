<template>
  <div>
    <div class="modal-card">
      <section class="modal-card-body">
        <form>
          <BasicForm v-model="editingPerson.firstname" label="First Name" type="text" />
          <BasicForm v-model="editingPerson.lastname" label="Last Name" type="text" />
          <BasicForm v-model="editingPerson.email" label="Email" type="email" />
          <BasicForm v-model="editingPerson.address.city" label="City" type="text" />
          <BasicForm v-model="editingPerson.address.country" label="Country" type="text" />
        </form>
      </section>
      <div class="buttons is-right">
  <button class="button is-success is-normal" @click="addPerson">Save</button>
</div>
    </div>
  </div>
</template>

<script>
import BasicForm from './BasicForm.vue';
import router from "@/router";

export default {
  components: {
    BasicForm
  },
  props: {
    person: {
      type: Object,
      default() {
        return {
          firstname: '',
          lastname: '',
          email:'',
          adress: {
            city: '',
            country: ''
          }
        }
      }
    }
  },
  data() {
    return {
      editingPerson: Object.assign({}, this.person)
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    addPerson() {
        this.$store.dispatch('addPerson', this.editingPerson);
        router.push('/')
      }
  }
};
</script>
