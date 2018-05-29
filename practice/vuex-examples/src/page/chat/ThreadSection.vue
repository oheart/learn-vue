<template>
    <div class="thread-section">
       <div class="thread-count">
           <span>
               Unread threads: 2
           </span>
       </div>
       <ul class="thread-list">
           <Thread
                v-for="thread in threads"
                :key="thread.id"
                :thread="thread"
                >
           </Thread>
       </ul>
    </div>
</template>

<script>
import Thread from './Thread.vue'
import {mapGetters} from 'vuex'

export default{
    name: 'ThreadSection',
    components: {Thread},
    computed: mapGetters([
        'threads'
    ])
}
</script>
