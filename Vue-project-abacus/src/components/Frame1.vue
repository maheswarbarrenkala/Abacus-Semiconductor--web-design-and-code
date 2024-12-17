<template>
  <div class="container-center-horizontal">
    <div class="frame-1 screen">
      <div class="group-9" :style="{ 'background-image': 'url(' + group9 + ')' }"></div>
      <img class="group-10" :src="group10" alt="Group 10" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame1",
  props: ["group9", "group10"],
};
</script>

<style>
.frame-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  gap: 107px;
  height: 390px;
  padding: 13px 17px;
  width: 697px;
}

.group-9 {
  background-size: 100% 100%;
  height: 184px;
  width: 261px;
}

.group-10 {
  height: 184px;
  width: 261px;
}
</style>
