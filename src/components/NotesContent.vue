<template>
<div class="notes-content">
    <div v-if="note">
        <label for="title">Title:</label>
        <input type="text" v-model="note.title" class="title" name="title" placeholder="Enter a title" />
        <label for="content">Content:</label>
        <textarea class="content" name="content" v-model="note.body" placeholder="Enter some content"></textarea>
        <b-button variant="outline-primary" @click="saveNote()">Save Note</b-button>
        <b-button size="sm" variant="danger" @click="deleteNote()">Delete Note</b-button>
    </div>
    <div v-else>
        <strong>&larr; To start, create a new note!</strong>
    </div>
</div>
</template>

<script>

export default {
    name: "Notes Content",
    props: ['note'],
    methods: {
        deleteNote () {
            this.$emit('delete-note')
        },
        saveNote () {
            this.$emit('save-note')
        }
    }
};
</script>

<style lang="scss">
    .notes-content {
        width: 100%;
        padding: 2rem;
    }

    .content, .title {
        border-style: none;
        border-radius: 0.25rem;
        border: solid 1px lightgray;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 1.25rem;
    }

    .content:focus, .title:focus {
        outline: 0;
    }

    .content {
        resize: vertical;
        font-size: 1.1rem;
        padding: 0.5rem;
        height: 20rem;
    }

    .title {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
    }

    label {
        margin-bottom: 0.5rem;
        display: inline-block;
    }

    button {
        border-style: none;
        padding: 0.5rem 0.75rem;
        margin-right: 1rem;
        border-radius: 0.25rem;
        color: white;
        font-size: 1rem;
        cursor: pointer;
    }

    button:hover {
        background-color: #368ea2;
    }
</style>