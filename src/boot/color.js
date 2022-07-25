import { boot } from 'quasar/wrappers';
import { setCssVar } from 'quasar';

// import { computed } from 'vue';
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ store }) => {
  // const setColorPrimaryLight = computed(() => store.state.authData.config.find(ele => ele.name === 'color_primary_light')?.value);
  /* const rgba0 = computed({
    get: () => store.state.storageData.rgb0,
    set: val => {}
  });
  const rgba1 = computed({
    get: () => store.state.storageData.rgb1,
    set: val => {}
  });
  const rgba2 = computed({
    get: () => store.state.storageData.rgb2,
    set: val => {}
  });
  const rgba3 = computed({
    get: () => store.state.storageData.rgb3,
    set: val => {}
  }); */
  const setColorPrimaryLight = `rgba(${250}, ${182} , ${5}, ${1}`;

  setCssVar('primary-light', setColorPrimaryLight);
});
