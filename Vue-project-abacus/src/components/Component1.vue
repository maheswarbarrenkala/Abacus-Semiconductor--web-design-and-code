<template>
  <div class="component-1">
    <div class="ing-container" :style="{ 'background-image': 'url(' + ingContainer1 + ')' }">
      <h1 class="revolutionizing-hig californianfb-bold-tigers-eye-40px">{{ revolutionizingHig }}</h1>
      <p class="unleashing-the-powe valign-text-middle californianfb-bold-black-28px">{{ unleashingThePowe }}</p>
    </div>
    <div class="group-17" :style="{ 'background-image': 'url(' + group17 + ')' }">
      <p class="innovative-cpu-arch valign-text-middle californianfb-bold-brandy-punch-40px">{{ innovativeCpuArch }}</p>
      <p class="a-leap-beyond-harva valign-text-middle californianfb-bold-black-28px">{{ aLeapBeyondHarva }}</p>
    </div>
    <div class="ing-container-1" :style="{ 'background-image': 'url(' + ingContainer2 + ')' }">
      <p class="closing-the-perfotr valign-text-middle californianfb-bold-tigers-eye-40px">{{ closingThePerfotr }}</p>
      <div class="elevating-real-life valign-text-middle californianfb-bold-black-28px">{{ elevatingRealLife }}</div>
    </div>
    <div class="ing-the-container" :style="{ 'background-image': 'url(' + ingTheContainer + ')' }">
      <p class="breaking-the-bounda valign-text-middle californianfb-bold-brandy-punch-40px">{{ breakingTheBounda }}</p>
      <p class="architecting-the-fu valign-text-middle californianfb-bold-black-28px">{{ architectingTheFu }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component1",
  props: [
    "ingContainer1",
    "revolutionizingHig",
    "unleashingThePowe",
    "group17",
    "innovativeCpuArch",
    "aLeapBeyondHarva",
    "ingContainer2",
    "closingThePerfotr",
    "elevatingRealLife",
    "ingTheContainer",
    "breakingTheBounda",
    "architectingTheFu",
  ],
};
</script>

<style>
.component-1 {
  align-items: flex-start;
  border-radius: 5px;
  display: flex;
  gap: 149px;
  height: 689px;
  margin-top: 2px;
  overflow: hidden;
  width: 1440px;
}

.ing-container {
  background-position: 50% 50%;
  background-size: cover;
  height: 687px;
  position: relative;
  width: 1440px;
}

.revolutionizing-hig {
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 110px;
  width: 433px;
}

.unleashing-the-powe {
  height: 64px;
  left: 64px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 280px;
  width: 304px;
}

.group-17 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 689px;
  padding: 56px 63px;
  width: 1448px;
}

.innovative-cpu-arch {
  height: 91px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 382px;
}

.a-leap-beyond-harva {
  height: 63px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1.47px;
  text-align: center;
  width: 388px;
}

.ing-container-1 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 27px;
  min-height: 687px;
  padding: 235px 21px;
  width: 1440px;
}

.closing-the-perfotr {
  height: 92px;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  width: 483px;
}

.elevating-real-life {
  height: 63px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 25.82px;
  text-align: center;
  width: 403px;
}

.ing-the-container {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 687px;
  padding: 76px 0;
  width: 1440px;
}

.breaking-the-bounda {
  height: 138px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 308px;
  text-align: center;
  width: 517px;
}

.architecting-the-fu {
  height: 64px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 37px;
  text-align: center;
  width: 426px;
}
</style>
