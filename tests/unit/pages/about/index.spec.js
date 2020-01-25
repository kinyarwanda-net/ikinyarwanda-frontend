import { shallowMount, createLocalVue } from '@vue/test-utils';
import About from '../../../../src/pages/about/index.vue';
import MainLayout from '../../../../src/layouts/Default.vue';

const localVue = createLocalVue();

localVue.component('default-layout', MainLayout);

describe('About', () => {
  test('renders correctly', async () => {
    const wrapper = shallowMount(About, {
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
