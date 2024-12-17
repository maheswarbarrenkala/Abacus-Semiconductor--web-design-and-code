<template>
  <div class="read-more">
    <div class="read-more-1 valign-text-middle calistomt-regular-normal-black-22px">{{ readMore }}</div>
  </div>
</template>

<script>
export default {
  name: "ReadMore",
  props: ["readMore"],
};
</script>

<style>
.read-more {
  align-items: flex-start;
  background-color: var(--rob-roy);
  border-radius: 10px;
  display: flex;
  height: 42px;
  margin-top: 27px;
  min-width: 131px;
  padding: 7px 13px;
}

.read-more-1 {
  height: 25px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}
</style>
