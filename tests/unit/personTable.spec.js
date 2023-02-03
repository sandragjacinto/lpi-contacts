import { shallowMount } from '@vue/test-utils'
import PersonTable from '@/components/PersonTable.vue'

const peopleList = [{
  firstname: 'test',
  lastname: 'testLast',
  email: 'test@test.com',
  address: {
    city: 'paris',
    country: 'france'
  }
}]

describe('PersonTable.vue', () => {
  it('sould render the list of persons', () => {
    const { element } = shallowMount(PersonTable, {
      props: { peopleList }
    })
    expect(element).toMatchSnapshot()
  })
})
