/* eslint-disable */
import { Graph2d, Graph3d, Network, Timeline } from './components/Vis';

const install = (Vue, options = {}) => {
    Vue.component(Graph2d.name, Graph2d);
    Vue.component(Graph3d.name, Graph3d);
    Vue.component(Network.name, Network);
    Vue.component(Timeline.name, Timeline);
};

export default {
    install,
    Graph2d,
    Graph3d,
    Network,
    Timeline
};

