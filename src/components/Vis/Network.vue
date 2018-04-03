<template>
    <div ref='visualization'></div>
</template>

<script>
/* eslint-disable */
    import vis from 'vis';

    const events = [
        // Events triggered by human interaction, selection, dragging etc.
        'click',
        'doubleClick',
        'oncontext',
        'hold',
        'release',
        'select',
        'selectNode',
        'selectEdge',
        'deselectNode',
        'deselectEdge',
        'dragStart',
        'dragging',
        'dragEnd',
        'hoverNode',
        'blurNode',
        'hoverEdge',
        'blurEdge',
        'zoom',
        'showPopup',
        'hidePopup',

        // Events triggered the physics simulation. Can be used to trigger GUI updates.
        'startStabilizing',
        'stabilizationProgress',
        'stabilizationIterationsDone',
        'stabilized',

        // Event triggered by the canvas.
        'resize',

        // Events triggered by the rendering module. Can be used to draw custom elements on the canvas.
        'initRedraw',
        'beforeDrawing',
        'afterDrawing',

        // Event triggered by the view module.
        'animationFinished',

        // Event triggered by the configuration module.
        'configChange',
    ];

    export default {
        name: 'net-work',
        props: {
            nodes: {
                type: Array,
                default: () => ([]),
                required: true,
            },
            edges: {
                type: Array,
                default: () => ([]),
                required: false,
            },
            options: {
                type: Object,
            },
        },
        data() {
            return {
                network: null,
            };
        },
        watch: {
            nodes: {
                deep: true,
                handler(n) {
                    this.network.setData({nodes: n, edges: this.edges});
                },
            },
            edges: {
                deep: true,
                handler(n) {
                    this.network.setData({nodes: this.nodes, edges: n});
                },
            },
            options: {
                deep: true,
                handler(n) {
                    this.network.setOptions(n);
                },
            },
        },

        methods: {
            // Global methods for the network.
            destroy() {
                this.network.destroy();
            },
            setData(data) {
                this.network.setData(data);
            },
            setOptions(opts) {
                this.network.setOptions(opts);
            },
            on(ev, f) {
                this.network.on(ev, f);
            },
            off(ev, f) {
                this.network.off(ev, f);
            },
            once(ev, f) {
                this.network.once(ev, f);
            },

            // Methods related to the canvas.
            canvasToDOM(ob) {
                return this.network.canvasToDOM(ob);
            },
            DOMtoCanvas(ob) {
                return this.network.DOMtoCanvas(ob);
            },
            redraw() {
                this.network.redraw();
            },
            setSize(width, height) {
                this.network.setSize(width, height);
            },

            // Clustering
            cluster(opts) {
                this.network.cluster(opts);
            },
            clusterByHubsize(hubsize, opts) {
                this.network.clusterByHubsize(hubsize, opts);
            },
            clusterByConnection(id, opts) {
                this.network.clusterByConnection(id, opts);
            },
            clusterOutliers(opts) {
                this.network.clusterOutliers(opts);
            },
            findNode(id) {
                return this.network.findNode(id);
            },
            getClusteredEdges(edgeId) {
                return this.network.getClusteredEdges(edgeId);
            },
            getBaseEdges(clusteredEdgeId) {
                return this.network.getBaseEdges(clusteredEdgeId);
            },
            updateEdge(startEdgeId, opts) {
                this.network.updateEdge(startEdgeId, opts);
            },
            updateClusteredNode(clusteredNodeId, opts) {
                this.network.updateClusteredNode(clusteredNodeId, opts);
            },
            isCluster(nodeId) {
                return this.network.isCluster(nodeId);
            },
            getNodesInCluster(clusterNodeId) {
                return this.network.getNodesInCluster(clusterNodeId);
            },
            openCluster(nodeId, opts) {
                this.network.openCluster(nodeId, opts);
            },

            // Layout
            getSeed() {
                return this.network.getSeed();
            },

            // Manipulation methods to use the manipulation system without GUI.
            enableEditMode() {
                this.network.enableEditMode();
            },
            disableEditMode() {
                this.network.disableEditMode();
            },
            addNodeMode() {
                this.network.addNodeMode();
            },
            editNode() {
                this.network.editNode();
            },
            addEdgeMode() {
                this.network.addEdgeMode();
            },
            editEdgeMode() {
                this.network.editEdgeMode();
            },
            deleteSelected() {
                this.network.deleteSelected();
            },

            // Methods to get information on nodes and edges.
            getPositions(arrNodeId) {
                return this.network.getPositions(arrNodeId);
            },
            storePositions() {
                this.network.storePositions();
            },
            moveNode(nodeId, x, y) {
                this.network.moveNode(nodeId, x, y);
            },
            getBoundingBox(nodeId) {
                return this.network.getBoundingBox(nodeId);
            },
            getConnectedNodes(id, direction) {
                return this.network.getConnectedNodes(id, direction);
            },
            getConnectedEdges(nodeId) {
                return this.network.getConnectedEdges(nodeId);
            },

            // Physics methods to control when the simulation should run.
            startSimulation() {
                this.network.startSimulation();
            },
            stopSimulation() {
                this.network.stopSimulation();
            },
            stabilize(iterations) {
                this.network.stabilize(iterations);
            },

            // Selection methods for nodes and edges.
            getSelection() {
                return this.network.getSelection();
            },
            getSelectedNodes() {
                return this.network.getSelectedNodes();
            },
            getSelectedEdges() {
                return this.network.getSelectedEdges();
            },
            getNodeAt(obj) {
                return this.network.getNodeAt(obj);
            },
            getEdgeAt(obj) {
                return this.network.getEdgeAt(obj);
            },
            selectNodes(arr) {
                this.network.selectNodes(arr);
            },
            selectEdges(arr) {
                this.network.selectEdges(arr);
            },
            setSelection(obj, opts) {
                this.network.setSelection(obj, opts);
            },
            unselectAll() {
                this.network.unselectAll();
            },

            // Methods to control the viewport for zoom and animation.
            getScale() {
                return this.network.getScale();
            },
            getViewPosition() {
                return this.network.getViewPosition();
            },
            fit(opts) {
                this.network.fit(opts);
            },
            focus(nodeId, opts) {
                this.network.focus(nodeId, opts);
            },
            moveTo(opts) {
                this.network.moveTo(opts);
            },
            releaseNode() {
                this.network.releaseNode();
            },

            // Methods to use with the configurator module.
            getOptionsFromConfigurator() {
                return this.network.getOptionsFromConfigurator();
            },
        },
        mounted() {
            const container = this.$refs.visualization;
            const nodes = new vis.DataSet(this.nodes);
            const edges = new vis.DataSet(this.edges);
            const options = this.options;
            const data = {
                nodes,
                edges,
            };

            this.network = new vis.Network(container, data, options);

            // setting up module
            this.images = this.network.images;
            this.groups = this.network.groups;
            this.canvas = this.network.canvas;
            this.selectionHandler = this.network.selectionHandler;
            this.interationHandler = this.network.interationHandler;
            this.view = this.network.view;
            this.renderer = this.network.renderer;
            this.physics = this.network.physics;
            this.layoutEngine = this.network.layoutEngine;
            this.clustering = this.network.clustering;
            this.manipulation = this.network.manipulation;
            this.nodesHandler = this.network.nodesHandler;
            this.edgesHandler = this.network.edgesHandler;

            events.forEach((eventName) => {
                this.network.on(eventName, (props) => {
                    this.$emit(eventName, props);
                });
            });
        },
        beforeDestroy() {
            events.forEach((eventName) => {
                this.network.off(eventName, (props) => {
                    this.$emit(eventName, props);
                });
            });
        },
    };
</script>
