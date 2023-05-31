import { mount } from '@vue/test-utils';
import Coaches from '@/components/Coaches.vue';

// todo change the jest setup first in order to proceed with this
describe('Coaches.vue', () => {
  it('renders the coach names correctly', () => {
    const coaches = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Smith' },
    ];

    const wrapper = mount(Coaches, {
      data() {
        return {
          coaches: coaches,
        };
      },
    });

    const coachNames = wrapper.findAll('.text-lg.font-semibold');
    expect(coachNames).toHaveLength(coaches.length);

    coachNames.forEach((nameWrapper, index) => {
      const coach = coaches[index];
      expect(nameWrapper.text()).toBe(`${coach.firstName} ${coach.lastName}`);
    });
  });
});
