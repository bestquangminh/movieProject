import { HomePage } from '../pages/HomePage';
import { DetailsPage } from '../pages/DetailsPage';
import { SearchPage } from '../pages/SearchPage';
import { DiscoverPage } from '../pages/DiscoverPage';
interface Route {
  path: string;
  component: () => JSX.Element;
}

const routes: Route[] = [
  { path: '/', component: HomePage },
  { path: '/discover/movies', component: DiscoverPage },
  { path: '/details/:id', component: DetailsPage },
  { path: '/search', component: SearchPage },
];

export default routes;
