import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '../../../../src/pages/home/index.vue';
import MainLayout from '../../../../src/layouts/Default.vue';

const localVue = createLocalVue();
localVue.component('default-layout', MainLayout);

describe('Homepage', () => {
  test('renders correctly', async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      attachToDocument: true,
      stubs: ['router-link', 'router-view'],
      mocks: {
        $route: {
          meta: {
            layout: 'default-layout'
          }
        }
      }
    });
    await expect(wrapper.element).toMatchSnapshot();
  });
});
