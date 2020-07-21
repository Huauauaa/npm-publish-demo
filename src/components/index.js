import component from '@/components/HelloWorld';

component.install = (Vue) => Vue.component(component.name, component);

export default component;
