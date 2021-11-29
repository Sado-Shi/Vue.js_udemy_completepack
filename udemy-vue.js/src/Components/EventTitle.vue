<template>
  <div>
    <label for="title">タイトル</label>
    <input type="text" id="title" :value="eventData.title" @input="eventData.title = $event.target.value" />
  </div>
</template>
