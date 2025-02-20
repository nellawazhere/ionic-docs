import Playground from '@site/src/components/global/Playground';

import javascript_index_html from './javascript/index_html.md';
import javascript_index_ts from './javascript/index_ts.md';

import angular_app_routes_ts from './angular/app_routes_ts.md';
import angular_app_component_html from './angular/app_component_html.md';
import angular_app_component_ts from './angular/app_component_ts.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

import angular_home_page_component_ts from './angular/home_page_component_ts.md';
import angular_home_page_component_html from './angular/home_page_component_html.md';

import angular_library_page_component_ts from './angular/library_page_component_ts.md';
import angular_library_page_component_html from './angular/library_page_component_html.md';

import angular_radio_page_component_ts from './angular/radio_page_component_ts.md';
import angular_radio_page_component_html from './angular/radio_page_component_html.md';

import angular_search_page_component_ts from './angular/search_page_component_ts.md';
import angular_search_page_component_html from './angular/search_page_component_html.md';

import angular_global_css from './angular/global_css.md';

import vue_app_vue from './vue/app_vue.md';
import vue_main_ts from './vue/main_ts.md';
import vue_example_vue from './vue/example_vue.md';
import vue_router_ts from './vue/router_ts.md';
import vue_home_page_vue from './vue/home_page_vue.md';
import vue_radio_page_vue from './vue/radio_page_vue.md';
import vue_library_page_vue from './vue/library_page_vue.md';
import vue_search_page_vue from './vue/search_page_vue.md';

import react_main_tsx from './react/main_tsx.md';
import react_home_page_tsx from './react/home_page_tsx.md';
import react_radio_page_tsx from './react/radio_page_tsx.md';
import react_library_page_tsx from './react/library_page_tsx.md';
import react_search_page_tsx from './react/search_page_tsx.md';

<Playground
  version="8"
  code={{
    javascript: {
      files: {
        'index.html': javascript_index_html,
        'index.ts': javascript_index_ts,
      },
    },
    angular: {
      files: {
        'src/global.css': angular_global_css,
        'src/app/app.routes.ts': angular_app_routes_ts,
        'src/app/app.component.html': angular_app_component_html,
        'src/app/app.component.ts': angular_app_component_ts,
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
        'src/app/home/home-page.component.ts': angular_home_page_component_ts,
        'src/app/home/home-page.component.html': angular_home_page_component_html,
        'src/app/library/library-page.component.ts': angular_library_page_component_ts,
        'src/app/library/library-page.component.html': angular_library_page_component_html,
        'src/app/radio/radio-page.component.ts': angular_radio_page_component_ts,
        'src/app/radio/radio-page.component.html': angular_radio_page_component_html,
        'src/app/search/search-page.component.ts': angular_search_page_component_ts,
        'src/app/search/search-page.component.html': angular_search_page_component_html,
      },
    },
    vue: {
      files: {
        'src/components/Example.vue': vue_example_vue,
        'src/router.ts': vue_router_ts,
        'src/App.vue': vue_app_vue,
        'src/main.ts': vue_main_ts,
        'src/views/HomePage.vue': vue_home_page_vue,
        'src/views/RadioPage.vue': vue_radio_page_vue,
        'src/views/LibraryPage.vue': vue_library_page_vue,
        'src/views/SearchPage.vue': vue_search_page_vue,
      },
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/pages/HomePage.tsx': react_home_page_tsx,
        'src/pages/RadioPage.tsx': react_radio_page_tsx,
        'src/pages/LibraryPage.tsx': react_library_page_tsx,
        'src/pages/SearchPage.tsx': react_search_page_tsx,
      },
    },
  }}
  src="usage/v8/tabs/router/demo.html"
  devicePreview
  includeIonContent={false}
/>
