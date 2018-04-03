<template>
    <div ref='visualization'></div>
</template>

<script>
/* eslint-disable  */
    import vis from 'vis';

    const events = [
        'cameraPositionChange',
    ];

    export default {
        name: 'graph-3d',
        props: {
            items: {
                type: Array,
                default: () => ([]),
                required: true,
            },
            options: {
                type: Object,
                required: false,
            },
        },
        data() {
            return {
                graph3d: null,
            };
        },
        watch: {
            items: {
                deep: true,
                handler(n) {
                    this.graph3d.setData(new vis.DataSet(n));
                },
            },
            options: {
                deep: true,
                handler(n) {
                    this.graph3d.setOptions(n);
                },
            },
        },
        methods: {
            animationStart() {
                this.graph3d.animationStart();
            },
            animationStop() {
                this.graph3d.animationStop();
            },
            getCameraPosition() {
                return this.graph3d.getCameraPosition();
            },
            redraw() {
                this.graph3d.redraw();
            },
            setCameraPosition(pos) {
                this.graph3d.setCameraPosition(pos);
            },

            setSize(width, height) {
                this.graph3d.setSize(width, height);
            },
        },
        mounted() {
            const container = this.$refs.visualization;
            const items = new vis.DataSet(this.items);

            this.graph3d = new vis.Graph3d(container, items, this.options);

            events.forEach((eventName) => {
                this.graph3d.on(eventName, props => this.$emit(eventName, props));
            });
        },
        beforeDestroy() {
            events.forEach((eventName) => {
                this.graph3d.off(eventName, props => this.$emit(eventName, props));
            });
        },
    };
</script>
