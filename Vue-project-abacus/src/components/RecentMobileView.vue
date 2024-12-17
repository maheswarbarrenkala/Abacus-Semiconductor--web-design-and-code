<template>
  <div class="recent-mobile-view">
    <div class="overlap-group-9">
      <p class="posted-on-2023-09-12-1 valign-text-middle calistomt-regular-normal-black-8px">
        <span
          ><span class="calistomt-regular-normal-black-8px">{{ spanText1 }}</span
          ><span class="span1-1 calistomt-regular-normal-black-8px">{{ spanText2 }}</span>
        </span>
      </p>
      <p class="protect-cp-us-dp-us-1 valign-text-middle calistomt-regular-normal-tahiti-gold-8px">
        {{ protectCpusDpus1 }}
      </p>
      <div class="read-more-10 valign-text-middle calistomt-regular-normal-smalt-8px">{{ readMore1 }}</div>
    </div>
    <div class="overlap-group-9">
      <p class="posted-on-2023-09-12-1 valign-text-middle calistomt-regular-normal-black-8px">
        <span
          ><span class="calistomt-regular-normal-black-8px">{{ spanText3 }}</span
          ><span class="span1-1 calistomt-regular-normal-black-8px">{{ spanText4 }}</span>
        </span>
      </p>
      <p class="protect-cp-us-dp-us-1 valign-text-middle calistomt-regular-normal-tahiti-gold-8px">
        {{ protectCpusDpus2 }}
      </p>
      <div class="read-more-10 valign-text-middle calistomt-regular-normal-smalt-8px">{{ readMore2 }}</div>
    </div>
    <div class="overlap-group-9">
      <p class="posted-on-2023-09-12-1 valign-text-middle calistomt-regular-normal-black-8px">
        <span
          ><span class="calistomt-regular-normal-black-8px">{{ spanText5 }}</span
          ><span class="span1-1 calistomt-regular-normal-black-8px">{{ spanText6 }}</span>
        </span>
      </p>
      <p class="protect-cp-us-dp-us-1 valign-text-middle calistomt-regular-normal-tahiti-gold-8px">
        {{ protectCpusDpus3 }}
      </p>
      <div class="read-more-10 valign-text-middle calistomt-regular-normal-smalt-8px">{{ readMore3 }}</div>
    </div>
    <div class="overlap-group-9">
      <p class="posted-on-2023-09-12-1 valign-text-middle calistomt-regular-normal-black-8px">
        <span
          ><span class="calistomt-regular-normal-black-8px">{{ spanText7 }}</span
          ><span class="span1-1 calistomt-regular-normal-black-8px">{{ spanText8 }}</span>
        </span>
      </p>
      <p class="protect-cp-us-dp-us-1 valign-text-middle calistomt-regular-normal-tahiti-gold-8px">
        {{ protectCpusDpus4 }}
      </p>
      <div class="read-more-10 valign-text-middle calistomt-regular-normal-smalt-8px">{{ readMore4 }}</div>
    </div>
    <div class="overlap-group-9">
      <p class="posted-on-2023-09-12-1 valign-text-middle calistomt-regular-normal-black-8px">
        <span
          ><span class="calistomt-regular-normal-black-8px">{{ spanText9 }}</span
          ><span class="span1-1 calistomt-regular-normal-black-8px">{{ spanText10 }}</span>
        </span>
      </p>
      <p class="protect-cp-us-dp-us-1 valign-text-middle calistomt-regular-normal-tahiti-gold-8px">
        {{ protectCpusDpus5 }}
      </p>
      <div class="read-more-10 valign-text-middle calistomt-regular-normal-smalt-8px">{{ readMore5 }}</div>
    </div>
    <div class="overlap-group-9">
      <p class="posted-on-2023-09-12-1 valign-text-middle calistomt-regular-normal-black-8px">
        <span
          ><span class="calistomt-regular-normal-black-8px">{{ spanText11 }}</span
          ><span class="span1-1 calistomt-regular-normal-black-8px">{{ spanText12 }}</span>
        </span>
      </p>
      <p class="protect-cp-us-dp-us-1 valign-text-middle calistomt-regular-normal-tahiti-gold-8px">
        {{ protectCpusDpus6 }}
      </p>
      <div class="read-more-10 valign-text-middle calistomt-regular-normal-smalt-8px">{{ readMore6 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentMobileView",
  props: [
    "spanText1",
    "spanText2",
    "protectCpusDpus1",
    "readMore1",
    "spanText3",
    "spanText4",
    "protectCpusDpus2",
    "readMore2",
    "spanText5",
    "spanText6",
    "protectCpusDpus3",
    "readMore3",
    "spanText7",
    "spanText8",
    "protectCpusDpus4",
    "readMore4",
    "spanText9",
    "spanText10",
    "protectCpusDpus5",
    "readMore5",
    "spanText11",
    "spanText12",
    "protectCpusDpus6",
    "readMore6",
  ],
};
</script>

<style>
.recent-mobile-view {
  align-items: flex-start;
  display: flex;
  gap: 34px;
  height: 91px;
  left: 33px;
  overflow: hidden;
  position: absolute;
  top: 329px;
  width: 366px;
}

.overlap-group-9 {
  align-items: flex-start;
  background-color: var(--alto);
  display: flex;
  flex-direction: column;
  min-height: 91px;
  padding: 5px 4px;
  width: 166px;
}

.posted-on-2023-09-12-1 {
  height: 9px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.span1-1 {
  text-decoration: underline;
}

.protect-cp-us-dp-us-1 {
  height: 36px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 7px;
  width: 126px;
}

.read-more-10 {
  align-self: flex-end;
  height: 9px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 3px;
  margin-top: 20px;
  min-width: 43px;
  white-space: nowrap;
}
</style>
