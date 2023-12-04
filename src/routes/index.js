import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';
import { HeaderOnly } from '~/components/Layout';
import routerConfig from '~/components/config/router';

const publicRoutes = [
    {
        path: routerConfig.Home,
        component: Home,
    },
    {
        path: routerConfig.Profile,
        component: Profile,
    },
    {
        path: routerConfig.Following,
        component: Following,
        layout: null,
    },
    {
        path: routerConfig.Upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
