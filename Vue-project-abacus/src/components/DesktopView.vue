<template>
  <div class="container-center-horizontal">
    <div class="desktop-view screen">
      <div class="group-container">
        <div class="group-11">
          <img class="group-6" :src="group6" alt="Group 6" /><img
            class="abacus-semiconductor"
            :src="abacusSemiconductorCorporationLogos"
            alt="Abacus Semiconductor Corporation-logos_black 1"
          />
        </div>
        <div class="overlap-group1">
          <div class="search valign-text-middle">{{ search }}</div>
          <div class="overlap-group">
            <div class="ellipse-1"></div>
            <img
              class="line-1"
              src="https://cdn.animaapp.com/projects/675a88540eabbabe97d7bd9e/releases/675a8894b695bee946855234/img/line-1-1.svg"
              alt="Line 1"
            />
          </div>
        </div>
      </div>
      <div class="navbar-container calistomt-regular-normal-black-30px">
        <div class="navbar">
          <div class="navbar-link-place valign-text-middle">{{ navbarLinkPlace1 }}</div>
          <div class="navbar-link-about valign-text-middle">{{ navbarLinkAbout1 }}</div>
          <div class="navbar-link-products valign-text-middle">{{ navbarLinkProducts1 }}</div>
          <div class="navbar-link-posts valign-text-middle">{{ navbarLinkPosts1 }}</div>
          <div class="navbar-link valign-text-middle">{{ navbarLinkContactUs1 }}</div>
          <div class="navbar-link-call-us valign-text-middle">{{ navbarLinkCallUs }}</div>
          <img class="icon-headset" :src="iconHeadset1" alt="icon &#34;Headset&#34;" />
        </div>
        <div class="navbar">
          <div class="navbar-link-place valign-text-middle">{{ navbarLinkPlace2 }}</div>
          <div class="navbar-link-about valign-text-middle">{{ navbarLinkAbout2 }}</div>
          <div class="navbar-link-products valign-text-middle">{{ navbarLinkProducts2 }}</div>
          <div class="navbar-link-posts valign-text-middle">{{ navbarLinkPosts2 }}</div>
          <div class="navbar-link valign-text-middle">{{ navbarLinkFaqs }}</div>
          <div class="navbar-link-contact-us valign-text-middle">{{ navbarLinkContactUs2 }}</div>
          <img class="icon-headset-1" :src="iconHeadset2" alt="icon &#34;Headset&#34;" />
        </div>
      </div>
      <component1 v-bind="component1Props" />
      <div class="overlap-group12 calistomt-regular-normal-cultured-pearl-30px">
        <div class="rectangle-3"></div>
        <div class="recent-posts valign-text-middle">{{ recentPosts1 }}</div>
        <div class="products valign-text-middle">{{ products1 }}</div>
        <div class="official-blog valign-text-middle">{{ officialBlog }}</div>
        <div class="rectangle-4"></div>
        <div class="group-21">
          <img class="image-3" :src="image3" alt="image 3" />
          <div class="flex-col">
            <div class="about valign-text-middle">{{ about }}</div>
            <p class="as-a-physicist-iv valign-text-middle">{{ asAPhysicistIV }}</p>
            <div class="load-more valign-text-middle">{{ loadMore }}</div>
          </div>
        </div>
        <div class="rectangle-11"></div>
        <div class="appreciation valign-text-middle">{{ appreciation1 }}</div>
      </div>
      <div class="overlap-group9">
        <div class="rectangle-5"></div>
        <div class="products-1 valign-text-middle californianfb-regular-normal-black-35px">{{ products2 }}</div>
        <p class="abacus-semiconductor-1 valign-text-middle">{{ abacusSemiconductor }}</p>
        <component2 v-bind="component2Props" />
      </div>
      <div class="overlap-group8">
        <div class="recent-posts-1 valign-text-middle">{{ recentPosts2 }}</div>
        <div class="flex-row">
          <div class="flex-col-1">
            <p class="posted-on-2023-09-12-company-blog valign-text-middle calistomt-regular-normal-black-18px">
              {{ postedOn20230912CompanyBlog }}
            </p>
            <p class="how-does-your-post-h valign-text-middle calistomt-regular-normal-black-25px">
              {{ howDoesYourPostH }}
            </p>
            <img
              class="line-7"
              src="https://cdn.animaapp.com/projects/675a88540eabbabe97d7bd9e/releases/675a8894b695bee946855234/img/line-7.svg"
              alt="Line 7"
            />
            <p class="our-post-harvard-cpu valign-text-middle calistomt-regular-normal-black-22px">
              {{ ourPostHarvardCpu }}
            </p>
            <read-more :readMore="readMoreProps.readMore" />
          </div>
          <img
            class="firefly-electronic-c"
            :src="fireflyElectronicComponentsArtifici"
            alt="Firefly Electronic components, artificial intelligence, and machine learning for supercomputers with (1) 1"
          />
        </div>
        <component3 v-bind="component3Props" />
        <p class="visit-official-blog-for-more valign-text-middle">{{ visitOfficialBlogForMore }}</p>
      </div>
      <div class="flex-col-2">
        <div class="flex-row-1">
          <div class="flex-col-3">
            <div class="appreciation-1 valign-text-middle californianfb-regular-normal-black-35px">
              {{ appreciation2 }}
            </div>
            <img class="x1695037554" :src="x1695037554" alt="1695037554" />
          </div>
          <img class="x1680188339383" :src="x1680188339383" alt="1680188339383" />
        </div>
        <div class="flex-row-2">
          <img class="x1691995586573" :src="x1691995586573" alt="1691995586573" /><img
            class="axel-kloth-a-masterm"
            :src="axelKlothAMastermindDisruptingTheFi"
            alt="Axel-Kloth-a-Mastermind-Disrupting-the-Field-of-Computer-Architecture-The-Enterprise-World"
          />
        </div>
      </div>
      <div class="group-container-1">
        <div class="group-31">
          <div class="flex-col-4">
            <div class="connect-with-us valign-text-middle calistomt-regular-normal-black-28px">
              {{ connectWithUs }}
            </div>
            <div class="flex-row-3">
              <img class="icon-gmail" :src="iconGmail" alt="icon &#34;gmail&#34;" /><img
                class="flex-row-item"
                :src="c9E44Cf2C90343869Ef4C68F26B71B85Cov"
                alt="c9e44cf2-c903-4386-9ef4-c68f26b71b85-cover 1"
              /><img class="flex-row-item" :src="iconSocialLinkedin" alt="icon &#34;social linkedin&#34;" />
            </div>
            <div class="mailing-addresses valign-text-middle calistomt-regular-normal-black-28px">
              {{ mailingAddresses }}
            </div>
            <p class="address valign-text-middle calistomt-regular-normal-black-25px">
              <span
                ><span class="span0 calistomt-regular-normal-black-25px">{{ spanText1 }}</span
                ><span class="calistomt-regular-normal-black-25px">{{ spanText2 }}</span>
              </span>
            </p>
          </div>
          <div class="flex-row-4">
            <img
              class="line-8"
              src="https://cdn.animaapp.com/projects/675a88540eabbabe97d7bd9e/releases/675a8894b695bee946855234/img/line-8.svg"
              alt="Line 8"
            />
            <p class="european-office-abac valign-text-middle calistomt-regular-normal-black-25px">
              <span
                ><span class="span0 calistomt-regular-normal-black-25px">{{ spanText3 }}</span
                ><span class="calistomt-regular-normal-black-25px">{{ spanText4 }}</span>
              </span>
            </p>
            <img
              class="line-9"
              src="https://cdn.animaapp.com/projects/675a88540eabbabe97d7bd9e/releases/675a8894b695bee946855234/img/line-9-1.svg"
              alt="Line 9"
            />
            <div class="flex-col-5 calistomt-regular-normal-black-28px">
              <div class="company-overview valign-text-middle">{{ companyOverview }}</div>
              <div class="news-awards-team-aff valign-text-middle">
                <span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText5 }}</span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText6 }}</span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText7 }}</span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText8 }}</span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText9 }}</span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText10 }}</span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText11 }}</span
                  ><span class="calistomt-regular-normal-black-28px">{{ spanText12 }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group14">
          <p class="copyright-2023-aba valign-text-middle calistomt-regular-normal-black-28px">
            <span
              ><span class="calistomt-regular-normal-black-28px">{{ spanText13 }}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component1 from "./Component1";
import Component2 from "./Component2";
import ReadMore from "./ReadMore";
import Component3 from "./Component3";
export default {
  name: "DesktopView",
  components: {
    Component1,
    Component2,
    ReadMore,
    Component3,
  },
  props: [
    "group6",
    "abacusSemiconductorCorporationLogos",
    "search",
    "navbarLinkPlace1",
    "navbarLinkAbout1",
    "navbarLinkProducts1",
    "navbarLinkPosts1",
    "navbarLinkContactUs1",
    "navbarLinkCallUs",
    "iconHeadset1",
    "navbarLinkPlace2",
    "navbarLinkAbout2",
    "navbarLinkProducts2",
    "navbarLinkPosts2",
    "navbarLinkFaqs",
    "navbarLinkContactUs2",
    "iconHeadset2",
    "recentPosts1",
    "products1",
    "officialBlog",
    "image3",
    "about",
    "asAPhysicistIV",
    "loadMore",
    "appreciation1",
    "products2",
    "abacusSemiconductor",
    "recentPosts2",
    "postedOn20230912CompanyBlog",
    "howDoesYourPostH",
    "ourPostHarvardCpu",
    "fireflyElectronicComponentsArtifici",
    "visitOfficialBlogForMore",
    "appreciation2",
    "x1695037554",
    "x1680188339383",
    "x1691995586573",
    "axelKlothAMastermindDisruptingTheFi",
    "connectWithUs",
    "iconGmail",
    "c9E44Cf2C90343869Ef4C68F26B71B85Cov",
    "iconSocialLinkedin",
    "mailingAddresses",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "companyOverview",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "component1Props",
    "component2Props",
    "readMoreProps",
    "component3Props",
  ],
};
</script>

<style>
.desktop-view {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 4928px;
  position: relative;
  width: 1440px;
}

.group-container {
  align-items: center;
  display: flex;
  gap: 502px;
  margin-left: 20px;
  margin-top: 34px;
  min-width: 1272px;
}

.group-11 {
  align-items: center;
  display: flex;
  gap: 5px;
  min-width: 465px;
}

.group-6 {
  height: 104px;
  margin-left: -2px;
  width: 163px;
}

.abacus-semiconductor {
  height: 83px;
  margin-bottom: 7px;
  width: 299px;
}

.overlap-group1 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px solid;
  border-color: var(--black);
  display: flex;
  gap: 8px;
  height: 40px;
  justify-content: flex-end;
  margin-top: 27.95px;
  min-width: 305px;
  padding: 4.4px 9.1px;
}

.search {
  color: #00000066;
  font-family: var(--font-family-californian_fb-regular);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  height: 28px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  width: 245px;
}

.overlap-group {
  align-self: center;
  height: 26px;
  margin-bottom: 2.29px;
  position: relative;
  width: 26px;
}

.ellipse-1 {
  background-color: var(--white);
  border: 2px solid;
  border-color: #0000002b;
  border-radius: 10.69px/10.48px;
  height: 21px;
  left: 0;
  position: absolute;
  top: 0;
  width: 21px;
}

.line-1 {
  height: 9px;
  left: 17px;
  position: absolute;
  top: 17px;
  width: 9px;
}

.navbar-container {
  border-radius: 5px;
  height: 49px;
  margin-top: 38px;
  position: relative;
  width: 1440px;
}

.navbar {
  align-items: flex-start;
  background-color: var(--rob-roy);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040, inset 0px 4px 4px #00000040;
  display: flex;
  height: 49px;
  left: 0;
  min-width: 1440px;
  padding: 0 43px;
  position: absolute;
  top: 0;
}

.navbar-link-place {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  width: 84px;
}

.navbar-link-about {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 126px;
  margin-top: -1px;
  width: 84px;
}

.navbar-link-products {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 126px;
  margin-top: -1px;
  width: 114px;
}

.navbar-link-posts {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 126px;
  margin-top: -1px;
  width: 77px;
}

.navbar-link {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 126px;
  margin-top: -1px;
  width: 204px;
}

.navbar-link-call-us {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 126px;
  margin-top: -1px;
  width: 113px;
}

.icon-headset {
  align-self: center;
  height: 39px;
  width: 39px;
}

.navbar-link-contact-us {
  height: 49px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 76px;
  margin-top: -1px;
  width: 148px;
}

.icon-headset-1 {
  align-self: center;
  height: 39px;
  margin-left: 15px;
  width: 39px;
}

.overlap-group12 {
  height: 476px;
  position: relative;
  width: 1440px;
}

.rectangle-3 {
  background-color: var(--tigers-eye);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  height: 68px;
  left: 0;
  opacity: 0.85;
  position: absolute;
  top: 0;
  width: 1440px;
}

.recent-posts {
  height: 35px;
  left: 710px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 15px;
  white-space: nowrap;
}

.products {
  height: 35px;
  left: 459px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 15px;
  white-space: nowrap;
}

.official-blog {
  height: 35px;
  left: 159px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 15px;
  white-space: nowrap;
}

.rectangle-4 {
  background-color: #5c6171;
  height: 408px;
  left: 0;
  position: absolute;
  top: 68px;
  width: 1440px;
}

.group-21 {
  align-items: flex-start;
  display: flex;
  gap: 109px;
  height: 353px;
  left: 67px;
  min-width: 1353px;
  position: absolute;
  top: 104px;
}

.image-3 {
  height: 336px;
  width: 620px;
}

.flex-col {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 345px;
  width: 618px;
}

.about {
  color: var(--white);
  font-family: var(--font-family-calisto_mt-regular);
  font-size: 30px;
  font-weight: 400;
  height: 35px;
  letter-spacing: 0;
  line-height: normal;
  text-decoration: underline;
  white-space: nowrap;
}

.as-a-physicist-iv {
  color: var(--white);
  font-family: var(--font-family-calisto_mt-regular);
  font-size: var(--font-size-xxxl);
  font-weight: 400;
  height: 268px;
  letter-spacing: 0;
  line-height: normal;
  width: 551px;
}

.load-more {
  align-self: flex-end;
  color: var(--black);
  font-family: var(--font-family-californian_fb-bold);
  font-size: 30px;
  font-weight: 700;
  height: 34px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 8px;
  min-width: 149px;
  text-decoration: underline;
  white-space: nowrap;
}

.rectangle-11 {
  background-color: var(--alto);
  border-radius: 5px;
  height: 409px;
  left: 0;
  opacity: 0.1;
  position: absolute;
  top: 67px;
  width: 1440px;
}

.appreciation {
  height: 35px;
  left: 1009px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 15px;
  white-space: nowrap;
}

.overlap-group9 {
  height: 874px;
  position: relative;
  width: 1440px;
}

.rectangle-5 {
  background-color: #fcf3d9;
  height: 874px;
  left: 0;
  opacity: 0.8;
  position: absolute;
  top: 0;
  width: 1440px;
}

.products-1 {
  height: 47px;
  left: 642px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 24px;
  width: 130px;
}

.abacus-semiconductor-1 {
  color: var(--black);
  font-family: var(--font-family-calisto_mt-regular);
  font-size: var(--font-size-xl);
  font-weight: 400;
  height: 140px;
  left: 80px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: justify;
  top: 96px;
  width: 1267px;
}

.overlap-group8 {
  align-items: flex-end;
  background-color: #d9d9d9b2;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  flex-direction: column;
  min-height: 992px;
  padding: 37px 80px;
  position: relative;
  width: 1440px;
}

.recent-posts-1 {
  align-self: center;
  color: #ff8900;
  font-family: var(--font-family-californian_fb-regular);
  font-size: 35px;
  font-weight: 400;
  height: 40px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 5px;
  min-width: 185px;
  text-shadow: 0px 4px 4px #00000040;
  white-space: nowrap;
}

.flex-row {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 121px;
  height: 540px;
  margin-right: 3px;
  margin-top: 54px;
  min-width: 1227px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 540px;
  position: relative;
  width: 441px;
}

.posted-on-2023-09-12-company-blog {
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  width: 373px;
}

.how-does-your-post-h {
  height: 116px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  margin-top: 50px;
  width: 439px;
}

.line-7 {
  height: 3px;
  margin-top: 28px;
  width: 139px;
}

.our-post-harvard-cpu {
  height: 225px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 28px;
  width: 434px;
}

.firefly-electronic-c {
  height: 447px;
  margin-bottom: 43px;
  object-fit: cover;
  width: 665px;
}

.visit-official-blog-for-more {
  color: #001e8c;
  font-family: var(--font-family-calisto_mt-regular);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  height: 29px;
  letter-spacing: 0;
  line-height: normal;
  margin-right: 11px;
  margin-top: 47px;
  min-width: 312px;
  text-decoration: underline;
  white-space: nowrap;
}

.flex-col-2 {
  align-items: flex-end;
  background-color: #e2c680b2;
  display: flex;
  flex-direction: column;
  gap: 104px;
  min-height: 1072px;
  padding: 31px 86px;
  width: 1440px;
}

.flex-row-1 {
  align-items: flex-end;
  display: flex;
  gap: 38px;
  height: 431px;
  min-width: 1255px;
}

.flex-col-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 64px;
  min-height: 431px;
  width: 715px;
}

.appreciation-1 {
  align-self: flex-end;
  height: 40px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 187px;
  text-shadow: 0px 4px 4px #00000040;
  white-space: nowrap;
}

.x1695037554 {
  height: 327px;
  object-fit: cover;
  width: 600px;
}

.x1680188339383 {
  height: 327px;
  object-fit: cover;
  width: 502px;
}

.flex-row-2 {
  align-items: center;
  display: flex;
  gap: 291px;
  min-width: 1168px;
}

.x1691995586573 {
  height: 433px;
  object-fit: cover;
  width: 306px;
}

.axel-kloth-a-masterm {
  height: 381px;
  object-fit: cover;
  width: 571px;
}

.group-container-1 {
  align-items: center;
  background-color: #d9d9d9ba;
  border-radius: 5px;
  box-shadow: inset 0px 4px 4px #00000040, 0px 4px 4px #00000040;
  display: flex;
  flex-direction: column;
  gap: 89px;
  min-height: 598px;
  width: 1440px;
}

.group-31 {
  align-items: flex-start;
  display: flex;
  gap: 36px;
  height: 333px;
  margin-right: 75px;
  margin-top: 99px;
  min-width: 1163px;
}

.flex-col-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 321px;
  width: 423px;
}

.connect-with-us {
  height: 32px;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1px;
  min-width: 201px;
  text-align: justify;
  white-space: nowrap;
}

.flex-row-3 {
  align-items: flex-start;
  display: flex;
  gap: 26px;
  margin-left: 1px;
  margin-top: 21px;
  min-width: 169px;
}

.icon-gmail {
  height: 29px;
  width: 39px;
}

.flex-row-item {
  height: 32px;
  width: 39px;
}

.mailing-addresses {
  height: 32px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 22px;
  min-width: 237px;
  text-align: justify;
  white-space: nowrap;
}

.address {
  height: 174px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 8px;
  text-align: justify;
  width: 423px;
}

.span0 {
  text-decoration: underline;
}

.flex-row-4 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  height: 323px;
  min-width: 692px;
}

.line-8 {
  height: 225px;
  margin-bottom: 0.02px;
  object-fit: cover;
  width: 1px;
}

.european-office-abac {
  height: 174px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 12.04px;
  margin-left: 20px;
  text-align: justify;
  width: 345px;
}

.line-9 {
  height: 291px;
  margin-left: 36px;
  object-fit: cover;
  width: 1px;
}

.flex-col-5 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-left: 16px;
  min-height: 311px;
  width: 274px;
}

.company-overview {
  height: 32px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 239px;
  text-align: justify;
  text-decoration: underline;
  white-space: nowrap;
}

.news-awards-team-aff {
  height: 256px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 274px;
  text-align: justify;
  text-decoration: underline;
}

.overlap-group14 {
  align-items: flex-start;
  background-color: var(--rob-roy-2);
  border-radius: 5px;
  box-shadow: inset 0px 4px 4px #00000040;
  display: flex;
  height: 77px;
  justify-content: flex-end;
  min-width: 1440px;
  padding: 19px 281px;
}

.copyright-2023-aba {
  height: 32px;
  letter-spacing: 0;
  line-height: normal;
  min-width: 877px;
  text-align: justify;
  white-space: nowrap;
}
</style>
