<style src="../../assets/css/chat.css"></style>

<template>
   <div class="chat-container">
        <thread-section></thread-section>
        <message-section></message-section>
   </div>
</template>

<script>
import ThreadSection from './ThreadSection.vue'
import MessageSection from './MessageSection.vue'

export default{
    name: 'Chat',
    components:{
        ThreadSection,
        MessageSection
    }
}
</script>
