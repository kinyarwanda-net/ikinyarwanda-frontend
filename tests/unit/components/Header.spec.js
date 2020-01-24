import { shallowMount } from '@vue/test-utils';
import Header from '../../../src/components/Header.vue';

describe('Header.vue', () => {
  test('renders correctly', async () => {
    const wrapper = shallowMount(Header);
    await expect(wrapper.element).toMatchSnapshot();
  });
});
