<template>
    <div>
      <h1 class="title">Add a new person</h1>
      <AddForm :person="editingPerson" @save="addPerson" />
    </div>
  </template>
  
  
  <script >
  import AddForm from './AddForm.vue';
  
  export default {
    components: {
      AddForm
    },
    data() {
      return {
        editingPerson: {
          firstname: '',
          lastname: '',
          email: '',
          address: {
            city: '',
            country: ''
          }
        }
      };
    },
  };
  </script>