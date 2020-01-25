import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import App from '../../src/App.vue';
import VueRouter from 'vue-router';
import Home from '../../src/pages/home/index.vue';
import router from '../../src/router/index.js';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Home', () => {
  it('renders homepage component', () => {
    router.push('/');
  });
  it('renders about component', () => {
    router.push('/about');
  });
  it('renders not-found component', () => {
    router.push('/no-fount');
  });
});
