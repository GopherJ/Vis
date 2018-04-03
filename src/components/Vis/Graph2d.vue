<template>
    <div ref='visualization'></div>
</template>

<script>
/* eslint-disable */
    import vis from 'vis';

    const events = [
        'click',
        'contextmenu',
        'doubleClick',
        'changed',
        'rangechange',
        'rangechanged',
        'timechange',
        'timechanged',
    ];

    export default {
        name: 'graph-2d',
        props: {
            groups: {
                type: Array,
                default: () => ([]),
                required: false,
            },
            items: {
                type: Array,
                default: () => ([]),
                required: true,
            },
            options: {
                type: Object,
            },
        },
        data() {
            return {
                graph2d: null,
            };
        },
        watch: {
            items: {
                deep: true,
                handler(n) {
                    this.graph2d.setItems(new vis.DataSet(n));
                },
            },
            groups: {
                deep: true,
                handler(n) {
                    this.graph2d.setGroups(new vis.DataSet(n));
                },
            },
            options: {
                deep: true,
                handler(n) {
                    this.graph2d.setOptions(n);
                },
            },
        },
        methods: {
            destroy() {
                this.graph2d.destroy();
            },
            fit() {
                this.graph2d.fit();
            },
            getCurrentTime() {
                return this.graph2d.getCurrentTime();
            },
            getCustomTime() {
                return this.graph2d.getCustomTime(id);
            },
            getDataRange() {
                return this.graph2d.getDataRange();
            },
            getEventProperties(event) {
                return this.graph2d.getEventProperties(event);
            },
            getLegend(groupId, iconWidth, iconHeight) {
                return this.graph2d.getLegend(groupId, iconWidth, iconHeight);
            },
            isGroupVisible(groupId) {
                return this.graph2d.isGroupVisible(groupId);
            },
            moveTo(time, options) {
                this.graph2d.moveTo(time, options);
            },
            on(event, callback) {
                this.graph2d.moveTo(event, callback);
            },
            off(event, callback) {
                this.graph2d.moveTo(event, callback);
            },
            redraw() {
                this.graph2d.redraw();
            },
            setCurrentTime(time) {
                this.graph2d.setCurrentTime(time);
            },
            setCustomTime(time) {
                this.graph2d.setCustomTime(time);
            },
            setGroups(groups) {
                this.graph2d.setGroups(groups);
            },
            setItems(items) {
                this.graph2d.setItems(items);
            },
            setOptions(options) {
                this.graph2d.setOptions(options);
            },
            setWindow(start, end) {
                this.graph2d.setWindow(start, end);
            },
        },
        mounted() {
            const container = this.$refs.visualization;
            const items = new vis.DataSet(this.items);
            const groups = new vis.DataSet(this.groups);
            this.graph2d = new vis.Graph2d(container, items, groups, this.options);

            events.forEach(eventName => this.graph2d.on(
                eventName, props => this.$emit(eventName, props)));
        },
        beforeDestroy() {
            events.forEach(eventName => this.graph2d.off(
                eventName, props => this.$emit(eventName, props)));
        },
    };
</script>
