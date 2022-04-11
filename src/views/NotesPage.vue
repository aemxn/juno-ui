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
import NoteDataService from "../services/NoteDataService";
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
    mounted() {
        NoteDataService.getAllNotes()
        .then(response => this.notes = response.data)
        .catch(error => this.$utils.toast(this.$bvToast, `get all note ${error}`, 'danger'));
    },
    methods: {
        newNote () {
            this.notes.push({
                title: '',
                body: ''
            })
            this.index = this.notes.length - 1
        },
        changeNote (index) {
            this.index = index
        },
        saveNote () {
            const note = this.notes[this.index]
            if (note.id) {
                NoteDataService.update(note.id, note)
                .then(response => this.$utils.toast(this.$bvToast, response.data.message, 'success'))
                .catch(error => this.$utils.toast(this.$bvToast, `save note ${error}`, 'danger'))
            } else {
                NoteDataService.create(note)
                .then(response => this.$utils.toast(this.$bvToast, response.data.message, 'success'))
                .catch(error => this.$utils.toast(this.$bvToast, `create note ${error}`, 'danger'))
            }
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