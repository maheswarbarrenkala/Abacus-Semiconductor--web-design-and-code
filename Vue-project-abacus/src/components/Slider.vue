<template>
  <div class="slider">
    <div class="group-36">
      <img class="servr" :src="servr" alt="servr" />
      <div class="server-on-a-chip-1 valign-text-middle calistomt-regular-normal-black-23px">{{ serverOnAChip }}</div>
      <p class="integrated-server-chip-with-risc-v-1 valign-text-middle calistomt-regular-normal-black-18px">
        {{ integratedServerChipWithRiscV }}
      </p>
      <div class="for-more-information-2 valign-text-middle calistomt-regular-normal-smalt-15px">
        {{ forMoreInformation1 }}
      </div>
    </div>
    <div class="group-37">
      <img class="hram-1" :src="hram" alt="HRAM" />
      <div class="heterogeneous-random-access-memory-1 valign-text-middle calistomt-regular-normal-black-23px">
        {{ heterogeneousRandomAccessMemory }}
      </div>
      <p class="scalable-high-bandw-1 valign-text-middle calistomt-regular-normal-black-18px">
        {{ scalableHighBandw }}
      </p>
      <div class="for-more-information-3 valign-text-middle calistomt-regular-normal-smalt-15px">
        {{ forMoreInformation2 }}
      </div>
    </div>
    <div class="group-38">
      <img class="application-processor-2" :src="applicationProcessor1" alt="application processor" />
      <div class="application-processor-3 valign-text-middle calistomt-regular-normal-black-23px">
        {{ applicationProcessor2 }}
      </div>
      <p class="multi-core-risc-v-pr-1 valign-text-middle calistomt-regular-normal-black-18px">
        {{ multiCoreRiscVPr }}
      </p>
      <div class="for-more-information-4 valign-text-middle calistomt-regular-normal-smalt-15px">
        {{ forMoreInformation3 }}
      </div>
    </div>
    <div class="group-41">
      <img class="data-processor-1" :src="dataProcessor1" alt="Data processor 1" />
      <div class="database-processor-1 valign-text-middle calistomt-regular-normal-black-23px">
        {{ databaseProcessor }}
      </div>
      <div class="x64-core-risc-v-database-processor-1 valign-text-middle calistomt-regular-normal-black-18px">
        {{ x64CoreRiscVDatabaseProcessor }}
      </div>
      <div class="for-more-information-5 valign-text-middle calistomt-regular-normal-smalt-15px">
        {{ forMoreInformation4 }}
      </div>
    </div>
    <div class="group-39">
      <img class="mathprocessor-1" :src="mathprocessor" alt="mathprocessor" />
      <div class="math-processor-1 valign-text-middle calistomt-regular-normal-black-23px">{{ mathProcessor }}</div>
      <div class="massively-parallel-math-accelerator-1 valign-text-middle calistomt-regular-normal-black-18px">
        {{ massivelyParallelMathAccelerator }}
      </div>
      <div class="for-more-information-2 valign-text-middle calistomt-regular-normal-smalt-15px">
        {{ forMoreInformation5 }}
      </div>
    </div>
    <div class="group-40">
      <img class="support-1" :src="support" alt="support" />
      <div class="support-downloads-1 valign-text-middle calistomt-regular-normal-black-23px">
        {{ supportDownloads }}
      </div>
      <p class="automated-support-an-1 valign-text-middle calistomt-regular-normal-black-18px">
        {{ automatedSupportAn }}
      </p>
      <div class="for-more-information-6 valign-text-middle calistomt-regular-normal-smalt-15px">
        {{ forMoreInformation6 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: [
    "servr",
    "serverOnAChip",
    "integratedServerChipWithRiscV",
    "forMoreInformation1",
    "hram",
    "heterogeneousRandomAccessMemory",
    "scalableHighBandw",
    "forMoreInformation2",
    "applicationProcessor1",
    "applicationProcessor2",
    "multiCoreRiscVPr",
    "forMoreInformation3",
    "dataProcessor1",
    "databaseProcessor",
    "x64CoreRiscVDatabaseProcessor",
    "forMoreInformation4",
    "mathprocessor",
    "mathProcessor",
    "massivelyParallelMathAccelerator",
    "forMoreInformation5",
    "support",
    "supportDownloads",
    "automatedSupportAn",
    "forMoreInformation6",
  ],
};
</script>

<style>
.slider {
  align-items: flex-start;
  display: flex;
  height: 416px;
  left: 59px;
  overflow: hidden;
  position: absolute;
  top: 545px;
  width: 313px;
}

.group-36 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 416px;
  width: 319px;
}

.servr,
.hram-1,
.data-processor-1,
.mathprocessor-1 {
  height: 275px;
  object-fit: cover;
  width: 312px;
}

.server-on-a-chip-1 {
  align-self: center;
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 12px;
  min-width: 167px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.integrated-server-chip-with-risc-v-1 {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 10px;
  min-width: 271px;
  text-align: justify;
  white-space: nowrap;
}

.for-more-information-2 {
  align-self: flex-end;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 54px;
  min-width: 154px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.group-37 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 196px;
  min-height: 416px;
  width: 318px;
}

.heterogeneous-random-access-memory-1 {
  height: 54px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 12px;
  text-align: justify;
  text-decoration: underline;
  width: 309px;
}

.scalable-high-bandw-1 {
  height: 42px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 12px;
  text-align: justify;
  width: 288px;
}

.for-more-information-3 {
  align-self: flex-end;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 4px;
  text-align: justify;
  text-decoration: underline;
  width: 156px;
}

.group-38 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 197px;
  min-height: 416px;
  width: 318px;
}

.application-processor-2,
.support-1 {
  height: 275px;
  margin-right: 6px;
  object-fit: cover;
  width: 312px;
}

.application-processor-3 {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  margin-top: 12px;
  min-width: 215px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.multi-core-risc-v-pr-1 {
  height: 42px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 11px;
  width: 312px;
}

.for-more-information-4 {
  align-self: flex-end;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 32px;
  min-width: 154px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.group-41 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 197px;
  min-height: 416px;
  width: 318px;
}

.database-processor-1 {
  align-self: center;
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  margin-top: 12px;
  min-width: 191px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.x64-core-risc-v-database-processor-1,
.massively-parallel-math-accelerator-1 {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 10px;
  min-width: 272px;
  text-align: justify;
  white-space: nowrap;
}

.for-more-information-5 {
  align-self: flex-end;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 8px;
  margin-top: 54px;
  min-width: 154px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.group-39 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 197px;
  min-height: 416px;
  width: 319px;
}

.math-processor-1 {
  align-self: center;
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 7px;
  margin-top: 12px;
  min-width: 154px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.group-40 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 196px;
  min-height: 416px;
  width: 318px;
}

.support-downloads-1 {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4.96px;
  margin-top: 12px;
  text-align: justify;
  text-decoration: underline;
  width: 211px;
}

.automated-support-an-1 {
  height: 42px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 10px;
  width: 312px;
}

.for-more-information-6 {
  align-self: flex-end;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6.08px;
  margin-top: 33px;
  text-align: justify;
  text-decoration: underline;
  width: 160px;
}
</style>
