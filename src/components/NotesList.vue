<template>
<div class="noteslist">
    <ul>
        <li
            v-for="(note, index) of notes"
            class="note"
            v-bind:class="{ 'active': index === activeNote }"
            @click="changeNote(index)"
            v-bind:key="index"
            >
            <div>{{note.title}}</div>
        </li>
        <li class="new-note" @click="newNote()">New Note +</li>
    </ul>
</div>
</template>

<script>
export default {
    name: "Note List",
    props: ['notes', 'activeNote'],
    methods: {
        changeNote (index) {
            this.$emit('change-note', index)
        },
        newNote () {
            this.$emit('new-note')
        }
    }
};
</script>

<style scoped lang="scss">
    .noteslist {
        max-width: 20rem;
        width: 30rem;
        background: #ecfcff;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        height: 100%;
        position: relative;
    }

    li {
        padding: 1rem;
        font-size: 1.25rem;
        min-height: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    li:hover {
        cursor: pointer;
        background-color: #c5edf5;
    }

    .active {
        background-color: #80cee0;
    }

    .active:hover {
        background-color: #5caec1;
    }

    .new-note {
        background-color: #233b5d;
        color: white;
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .new-note:hover {
        background-color: #182c48;
    }
</style>