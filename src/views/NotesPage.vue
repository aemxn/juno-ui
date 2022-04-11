<template>
<div>
    <HeadingTitle firstTitle="Notes" secondTitle="" />
    
    <div id="notespage">
        <NotesList @change-note="changeNote" @new-note="newNote" :notes="notes" :activeNote="index" />
        <NotesContent @save-note="saveNote" @delete-note="deleteNote" :note="notes[index]" />
    </div>
</div>
</template>

<script>
import HeadingTitle from "../components/HeadingTitle.vue";
import NotesList from "../components/NotesList.vue";
import NotesContent from "../components/NotesContent.vue";

export default {
    name: "Notes",
    components: { HeadingTitle, NotesList, NotesContent },
    data () {
        return {
            notes: [],
            index: 0
        }
    },
    methods: {
        newNote () {
            this.notes.push({
                title: '',
                content: ''
            })
            this.index = this.notes.length - 1
        },
        changeNote (index) {
            this.index = index
        },
        saveNote () {
            //
        },
        deleteNote () {
            this.notes.splice(this.index, 1)
            this.index = Math.max(this.index - 1, 0)
        }
    }
};
</script>

<style lang="scss">
    #notespage {
        display: flex;
        flex-direction: row;
    }
</style>