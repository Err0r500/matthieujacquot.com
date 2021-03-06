// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      name: 'main',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Main/reducer'),
          import('containers/Main'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('main', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/',
          name: 'landing',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Landing/reducer'),
              import('containers/Landing'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('landing', reducer.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
        {
          path: '/instrumental(/:chapter)',
          name: 'instrumental',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              import('containers/Instrumental/reducer'),
              import('containers/Instrumental'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('instrumental', reducer.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ] }, {
        path: '*',
        name: 'notfound',
        getComponent(nextState, cb) {
          import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
        },
      },
  ];
}
