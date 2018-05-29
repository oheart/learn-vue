<template>
    <li
        class="thread-list-item"
    >
        <h5 class="thread-name">{{thread.name}}</h5>
        <div class="thread-time">
            {{thread.lastMessage.timestamp | timestamp}}
        </div>
        <div class="thread-last-message">
           {{thread.lastMessage.text}}
        </div>
    </li>
</template>

<script>
export default{
  name: 'Thread',
  props:{
    thread: Object
  }
}
</script>
