<template>
  <div class="component-2">
    <img class="icon-arrows-left-circle-2" :src="iconArrowsLeftCircle2" alt="icon &#34;arrows left circle 2&#34;" />
    <div class="group-container-2">
      <div class="group-24">
        <img class="rectangle-10" :src="rectangle101" alt="Rectangle 10" /><img
          class="servr-1"
          :src="servr1"
          alt="servr 1"
        />
        <div class="server-on-a-chip valign-text-middle calistomt-regular-normal-black-23px">{{ serverOnAChip }}</div>
        <p class="integrated-server-chip-with-risc-v valign-text-middle calistomt-regular-normal-black-18px">
          {{ integratedServerChipWithRiscV }}
        </p>
        <div class="for-more-information-1 valign-text-middle calistomt-regular-normal-smalt-15px">
          {{ forMoreInformation1 }}
        </div>
      </div>
      <div class="group-2">
        <img class="rectangle-10" :src="rectangle102" alt="Rectangle 10" /><img class="hram" :src="hram" alt="HRAM" />
        <div class="heterogeneous-random-access-memory valign-text-middle calistomt-regular-normal-black-23px">
          {{ heterogeneousRandomAccessMemory }}
        </div>
        <p class="scalable-high-bandw valign-text-middle calistomt-regular-normal-black-18px">
          {{ scalableHighBandw }}
        </p>
        <div class="for-more-information valign-text-middle calistomt-regular-normal-smalt-15px">
          {{ forMoreInformation2 }}
        </div>
      </div>
      <div class="overlap-group3">
        <div class="group-26">
          <img class="rectangle-10" :src="rectangle103" alt="Rectangle 10" /><img
            class="application-processor"
            :src="applicationProcessor1"
            alt="application processor"
          />
          <div class="application-processor-1 valign-text-middle calistomt-regular-normal-black-23px">
            {{ applicationProcessor2 }}
          </div>
          <p class="multi-core-risc-v-pr valign-text-middle calistomt-regular-normal-black-18px">
            {{ multiCoreRiscVPr }}
          </p>
          <div class="for-more-information valign-text-middle calistomt-regular-normal-smalt-15px">
            {{ forMoreInformation3 }}
          </div>
        </div>
        <img
          class="icon-arrows-right-circle-2"
          :src="iconArrowsRightCircle2"
          alt="icon &#34;arrows right circle 2&#34;"
        />
      </div>
      <div class="group-27">
        <div class="overlap-group-1" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
          <img class="data-processor" :src="dataProcessor" alt="Data processor" />
        </div>
        <div class="database-processor valign-text-middle calistomt-regular-normal-black-23px">
          {{ databaseProcessor }}
        </div>
        <div class="x64-core-risc-v-database-processor valign-text-middle calistomt-regular-normal-black-18px">
          {{ x64CoreRiscVDatabaseProcessor }}
        </div>
        <div class="for-more-information valign-text-middle calistomt-regular-normal-smalt-15px">
          {{ forMoreInformation4 }}
        </div>
      </div>
      <div class="group-2">
        <div class="overlap-group-1" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
          <img class="mathprocessor" :src="mathprocessor" alt="mathprocessor" />
        </div>
        <div class="math-processor valign-text-middle calistomt-regular-normal-black-23px">{{ mathProcessor }}</div>
        <div class="massively-parallel-math-accelerator valign-text-middle calistomt-regular-normal-black-18px">
          {{ massivelyParallelMathAccelerator }}
        </div>
        <div class="for-more-information valign-text-middle calistomt-regular-normal-smalt-15px">
          {{ forMoreInformation5 }}
        </div>
      </div>
      <div class="group-2">
        <div class="overlap-group-1" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
          <img class="support" :src="support" alt="support" />
        </div>
        <div class="support-downloads valign-text-middle calistomt-regular-normal-black-23px">
          {{ supportDownloads }}
        </div>
        <p class="automated-support-an valign-text-middle calistomt-regular-normal-black-18px">
          {{ automatedSupportAn }}
        </p>
        <div class="for-more-information valign-text-middle calistomt-regular-normal-smalt-15px">
          {{ forMoreInformation6 }}
        </div>
      </div>
    </div>
    <div class="group-30">
      <div class="ellipse-19"></div>
      <div class="ellipse-2"></div>
      <div class="ellipse-2"></div>
      <div class="ellipse-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component2",
  props: [
    "iconArrowsLeftCircle2",
    "rectangle101",
    "servr1",
    "serverOnAChip",
    "integratedServerChipWithRiscV",
    "forMoreInformation1",
    "rectangle102",
    "hram",
    "heterogeneousRandomAccessMemory",
    "scalableHighBandw",
    "forMoreInformation2",
    "rectangle103",
    "applicationProcessor1",
    "applicationProcessor2",
    "multiCoreRiscVPr",
    "forMoreInformation3",
    "iconArrowsRightCircle2",
    "overlapGroup",
    "dataProcessor",
    "databaseProcessor",
    "x64CoreRiscVDatabaseProcessor",
    "forMoreInformation4",
    "overlapGroup1",
    "mathprocessor",
    "mathProcessor",
    "massivelyParallelMathAccelerator",
    "forMoreInformation5",
    "overlapGroup2",
    "support",
    "supportDownloads",
    "automatedSupportAn",
    "forMoreInformation6",
  ],
};
</script>

<style>
.component-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 492px;
  left: 19px;
  overflow: hidden;
  position: absolute;
  top: 305px;
  width: 1400px;
}

.icon-arrows-left-circle-2 {
  height: 45px;
  margin-left: -22053px;
  margin-top: -4681px;
  width: 39px;
}

.group-container-2 {
  align-items: flex-start;
  display: flex;
  margin-top: 4637px;
  min-width: 2852px;
}

.group-24 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 429px;
  width: 422px;
}

.rectangle-10 {
  align-self: flex-start;
  height: 429px;
  margin-left: -22053px;
  margin-top: -4835px;
  width: 416px;
}

.servr-1,
.hram,
.application-processor {
  height: 281px;
  margin-right: 5px;
  margin-top: 4419px;
  object-fit: cover;
  width: 293px;
}

.server-on-a-chip {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 47px;
  margin-top: 8px;
  min-width: 167px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.integrated-server-chip-with-risc-v {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 35px;
  margin-top: 17px;
  min-width: 271px;
  text-align: justify;
  white-space: nowrap;
}

.for-more-information-1 {
  align-self: flex-end;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 43px;
  margin-top: 33px;
  min-width: 154px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.group-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  min-height: 429px;
  width: 422px;
}

.heterogeneous-random-access-memory {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 5px;
  margin-top: 8px;
  min-width: 401px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.scalable-high-bandw {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 17px;
  min-width: 370px;
  text-align: justify;
  white-space: nowrap;
}

.for-more-information {
  align-self: flex-end;
  height: 17px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 17px;
  margin-top: 33px;
  min-width: 154px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.overlap-group3 {
  height: 429px;
  margin-left: 65px;
  position: relative;
  width: 426px;
}

.group-26 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 429px;
  position: absolute;
  top: 0;
  width: 422px;
}

.application-processor-1 {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 5px;
  margin-top: 8px;
  min-width: 215px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.multi-core-risc-v-pr {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 3px;
  margin-top: 17px;
  min-width: 373px;
  text-align: justify;
  white-space: nowrap;
}

.icon-arrows-right-circle-2 {
  height: 45px;
  left: 387px;
  position: absolute;
  top: 151px;
  width: 39px;
}

.group-27 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 59px;
  min-height: 429px;
  width: 422px;
}

.overlap-group-1 {
  align-items: flex-start;
  align-self: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 429px;
  justify-content: flex-end;
  margin-left: -22053px;
  margin-top: -4835px;
  min-width: 416px;
  padding: 13px 61px;
}

.data-processor,
.mathprocessor,
.support {
  height: 281px;
  object-fit: cover;
  width: 293px;
}

.database-processor {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 5px;
  margin-top: 4708px;
  min-width: 191px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.x64-core-risc-v-database-processor,
.massively-parallel-math-accelerator {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 17px;
  min-width: 272px;
  text-align: justify;
  white-space: nowrap;
}

.math-processor {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 4708px;
  min-width: 154px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.support-downloads {
  height: 27px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 5px;
  margin-top: 4708px;
  min-width: 203px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.automated-support-an {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 6px;
  margin-top: 17px;
  min-width: 338px;
  text-align: justify;
  white-space: nowrap;
}

.group-30 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 10px;
  margin-right: 44px;
  margin-top: 12px;
  min-width: 78px;
}

.ellipse-19 {
  background-color: #000001;
  border-radius: 6px;
  height: 12px;
  width: 12px;
}

.ellipse-2 {
  background-color: var(--alto);
  border-radius: 6px;
  height: 12px;
  width: 12px;
}
</style>
