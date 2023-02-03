import { createStore } from 'vuex'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";

const store = createStore({
  state: {
    people: []
  },
  mutations: {
    setPeople(state, people) {
        state.people = people;
      },
    updatePerson(state, updatedPerson) {
      state.people = state.people.map(person => {
        return person.id === updatedPerson.id ? updatedPerson : person;
      });
    },
    deletePerson(state, updatedPerson) {
        const index = state.people.findIndex(person => {
            return person.id === updatedPerson.id
        })

        state.people.splice(index, 1);
    },
    addPerson(state, newPerson) {
        state.people.push(newPerson);
      }
  },
  actions: {
    async fetchPeople({ commit }) {
        const response = await axios.get('https://fakerapi.it/api/v1/persons?_locale=fr_FR?_quantity=10')
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            console.error(error);
        });
        commit('setPeople', response);
      },
      editPerson({ commit }, person) {
        commit('updatePerson', person);
      },
      deletePerson({ commit }, person) {
        commit('deletePerson', person);
      },
      addPerson({commit}, person) {
        const personWithId = {
            ...person,
            id: uuidv4()
        }

        commit('addPerson', personWithId);
      }
    },
});

export default store