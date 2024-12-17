<template>
  <div class="mobile-view-slider">
    <div class="ing-container-2" :style="{ 'background-image': 'url(' + ingContainer + ')' }">
      <p class="unleashing-the-powe-1 valign-text-middle">{{ unleashingThePowe }}</p>
      <div class="revolutionizing-hig-1">{{ revolutionizingHig }}</div>
    </div>
    <img
      class="firefly-electronic-c-2"
      :src="fireflyElectronicComponentsArtifici1"
      alt="Firefly Electronic components, artificial intelligence, and machine learning for supercomputers with (2)"
    /><img
      class="firefly-electronic-c-2"
      :src="fireflyElectronicComponentsArtifici2"
      alt="Firefly Electronic components, artificial intelligence, and machine learning for supercomputers with (3)"
    /><img
      class="firefly-electronic-c-3"
      :src="fireflyElectronicComponentsArtifici3"
      alt="Firefly Electronic components, artificial intelligence, and machine learning for supercomputers with (4) 1"
    />
  </div>
</template>

<script>
export default {
  name: "MobileViewSlider",
  props: [
    "ingContainer",
    "unleashingThePowe",
    "revolutionizingHig",
    "fireflyElectronicComponentsArtifici1",
    "fireflyElectronicComponentsArtifici2",
    "fireflyElectronicComponentsArtifici3",
  ],
};
</script>

<style>
.mobile-view-slider {
  align-items: flex-start;
  display: flex;
  overflow: hidden;
  width: 430px;
}

.ing-container-2 {
  background-position: 50% 50%;
  background-size: cover;
  height: 243px;
  position: relative;
  width: 428px;
}

.unleashing-the-powe-1 {
  color: var(--black);
  font-family: var(--font-family-californian_fb-bold);
  font-size: 11px;
  font-weight: 700;
  height: 26px;
  left: 23px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 65px;
  width: 111px;
}

.revolutionizing-hig-1 {
  color: var(--tigers-eye);
  font-family: var(--font-family-californian_fb-bold);
  font-size: 12px;
  font-weight: 700;
  left: 4px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 29px;
  width: 148px;
}

.firefly-electronic-c-2 {
  height: 243px;
  margin-left: 173px;
  object-fit: cover;
  width: 428px;
}

.firefly-electronic-c-3 {
  height: 243px;
  margin-left: 231px;
  object-fit: cover;
  width: 428px;
}
</style>
