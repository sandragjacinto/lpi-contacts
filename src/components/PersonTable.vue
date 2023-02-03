<template>
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
</template>
  
<script >

export default {
  props: {
    personList: {
      type: Array,
     default: []
    }
  },
};
</script>