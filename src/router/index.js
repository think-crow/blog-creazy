import { createRouter, createWebHistory } from "vue-router";

import NewPageView from "../pages/NewPageView.vue";

import LifeI from "../pages/life-i/LifeI.vue";
import AboutLifeI from "../pages/life-i/AboutLifeI.vue";
import Books from "../pages/life-i/Books.vue";
import Talks from "../pages/life-i/Talks.vue";
import Poetry from "../pages/life-i/Poetry.vue";
import Village from "../pages/life-i/Village.vue";
import PhotoAlbum from "/src/pages/life-i/extend/PhotoAlbum.vue";
import NotePaper from "../pages/life-i/extend/NotePaper.vue";
import Discover from "../pages/life-i/extend/Discover.vue";

import DesignOurLife from "../pages/design-our-life/DesignOurLife.vue";
import LifeStory from "../pages/life-story/LifeStory.vue";

import ShareEye from "../pages/share-eye/ShareEye.vue";
import ArticleContent from "../pages/share-eye/ArticleContent.vue";

import NotFound from "../pages/404/NotFound.vue";



const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: "/",
      component: LifeI,
      redirect:'/lifei/aboutlifei',
    },
    {
      path: "/lifei",
      component: LifeI,
      redirect:'/lifei/aboutlifei',
      children: [
        { path: "aboutlifei", component: AboutLifeI },
        {
          path: "books",
          component: Books,
        },
        {
          path: "talks",
          component: Talks,
          props: route => ({ page: parseInt(route.query.page) || 1, category: route.query.category || 'all' })
        },
        {
          path: "poetry",
          component: Poetry,
          props: route => ({ page: parseInt(route.query.page) || 1, category: route.query.category || 'all' })
        },
        {
          path: "village",
          component: Village,
        },
        {
          path: "photoalbum",
          component: PhotoAlbum,
        },
        {
          path: "notepaper",
          component: NotePaper,
        },
        {
          path: "discover",
          component: Discover,
        },
       
      ],
    },
    {
      path: "/DesignOurLife",
      component: DesignOurLife,
    },
    {
      path: "/LifeStory",
      component: LifeStory,
    },
    {
      path: "/ShareEye",
      component: ShareEye,
     
    },
    {
      path:'/articlecontent',
      name:"Articlecontent",
      component:ArticleContent,
    },
    {
      path:'/newpageview',
      name:"NewPageView",
      component:NewPageView,
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});

export default router;
