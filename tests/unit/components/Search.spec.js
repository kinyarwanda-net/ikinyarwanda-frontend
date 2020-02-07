import { shallowMount } from '@vue/test-utils';
import Search from '../../../src/components/Search.vue';

describe('Search.vue', () => {
  test('renders correctly', async () => {
    const wrapper = shallowMount(Search);
    await expect(wrapper.element).toMatchSnapshot();
  });
});
