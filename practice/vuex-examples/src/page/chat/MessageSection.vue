<template>
    <div class="message-section">
       <h3 class="message-thread-heading">heading</h3>
       <ul class="message-list">
          <message></message>
       </ul>
       <textarea
         class="message-composer"
        >
       </textarea>
    </div>
</template>

<script>
import Message from './Message.vue'

export default{
    name: 'MessageSection',
    components: {Message}
}
</script>