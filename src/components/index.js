const requireComponent = require.context(
  // The relative path of the components folder
  '.',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue)$/,
);

export default requireComponent.keys().map((fileName) => {
  const componentConfig = requireComponent(fileName);

  const component = componentConfig.default || componentConfig;
  const componentName = fileName.replace(/\D+\/|\.\D+/g, '');

  return {
    name: component?.name || `t-${componentName}`,
    component,
  };
});
