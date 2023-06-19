<template>
  <div>
    <h2>Shadow: false</h2>
    <st-shadowless heading-text="Shadowless" heading-tag="h4">
      <p>My static slotted paragraph (1)</p>
      <p>My static slotted paragraph (2) {{ dynamicSlotContent }}</p>
      <p>My static slotted paragraph (3)</p>
      <st-shadowless heading-text="Nested">
        <p>My static slotted paragraph (nested)</p>
      </st-shadowless>
    </st-shadowless>

    <h2>Shadow: true</h2>
    <st-shadow heading-text="Shadowful">
      <p>My static slotted paragraph (1)</p>
      <p>My static slotted paragraph (2) {{ dynamicSlotContent }}</p>
      <p>My static slotted paragraph (3)</p>
    </st-shadow>

    <section>
      <button @click="updateSlots">Update Slots</button>
    </section>
  </div>
</template>
<script setup>
const dynamicSlotContent = ref('')
function updateSlots() {
  dynamicSlotContent.value = 'asdf'
}
</script>
<style>
st-shadow {
  margin-bottom: 2rem;
}
</style>