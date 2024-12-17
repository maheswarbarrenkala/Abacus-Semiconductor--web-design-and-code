import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const DesktopView = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="desktop-view">
      <div
        className="mobile-view"
        style={{
          height:
            screenWidth < 1440
              ? "3368px"
              : screenWidth >= 1440
                ? "4928px"
                : undefined,
          overflow: screenWidth < 1440 ? "hidden" : undefined,
          width:
            screenWidth < 1440
              ? "430px"
              : screenWidth >= 1440
                ? "1440px"
                : undefined,
        }}
      >
        {screenWidth >= 1440 && (
          <>
            <div className="overlap">
              <div className="rectangle" />

              <div className="text-wrapper">Products</div>

              <p className="abacus-semiconductor">
                Abacus Semiconductor offers advanced processors, accelerators,
                and smart memory solutions to improve performance and reduce
                costs. Their Server-on-a-Chip simplifies server manufacturing,
                eliminating the need for external accelerators. Their
                RISC-V-based processors excel in various applications, including
                AI, high-performance computing, and &#34;Big Data&#34; analysis,
                thanks to robust I/O and memory capabilities, ensuring
                scalability and support for diverse address spaces and security
                domains.
              </p>

              <div className="component">
                <div className="group">
                  <img
                    className="img"
                    alt="Rectangle"
                    src="/img/rectangle-10-6.png"
                  />

                  <div className="div">For More information...</div>

                  <img className="img-2" alt="Servr" src="/img/servr-1-1.png" />

                  <div className="text-wrapper-2">Server-on-a-Chip</div>

                  <p className="p">Integrated server chip with RISC-V.</p>
                </div>

                <div className="group-2">
                  <img
                    className="img"
                    alt="Rectangle"
                    src="/img/rectangle-10-7.png"
                  />

                  <div className="text-wrapper-3">For More information...</div>

                  <img className="img-2" alt="Hram" src="/img/hram-2.png" />

                  <p className="text-wrapper-4">
                    Scalable, high-bandwidth HRAM for processors.
                  </p>

                  <div className="text-wrapper-5">
                    Heterogeneous Random Access Memory
                  </div>
                </div>

                <div className="overlap-group">
                  <div className="group">
                    <img
                      className="img"
                      alt="Rectangle"
                      src="/img/rectangle-10-8.png"
                    />

                    <div className="text-wrapper-3">
                      For More information...
                    </div>

                    <img
                      className="img-2"
                      alt="Application"
                      src="/img/application-processor-2.png"
                    />

                    <p className="text-wrapper-4">
                      Multi-core RISC-V processor with virtualization.
                    </p>

                    <div className="text-wrapper-6">Application Processor</div>
                  </div>

                  <img
                    className="icon-arrows-right"
                    alt="Icon arrows right"
                    src="/img/icon-arrows-right-circle-2-1.png"
                  />
                </div>

                <div className="group-3">
                  <div className="img-wrapper">
                    <img
                      className="img-2"
                      alt="Data processor"
                      src="/img/rectangle-10-9.png"
                    />
                  </div>

                  <div className="text-wrapper-3">For More information...</div>

                  <div className="text-wrapper-7">
                    64-core RISC-V database processor.
                  </div>

                  <div className="text-wrapper-8">Database Processor</div>
                </div>

                <div className="group-4">
                  <div className="img-wrapper">
                    <img
                      className="img-2"
                      alt="Mathprocessor"
                      src="/img/rectangle-10-9.png"
                    />
                  </div>

                  <div className="text-wrapper-3">For More information...</div>

                  <div className="text-wrapper-7">
                    Massively parallel math accelerator.
                  </div>

                  <div className="text-wrapper-9">Math Processor</div>
                </div>

                <div className="group-5">
                  <div className="img-wrapper">
                    <img
                      className="img-2"
                      alt="Support"
                      src="/img/rectangle-10-9.png"
                    />
                  </div>

                  <div className="text-wrapper-3">For More information...</div>

                  <p className="text-wrapper-10">
                    Automated support and download platform.
                  </p>

                  <div className="text-wrapper-11">Support/Downloads</div>
                </div>

                <img
                  className="icon-arrows-left"
                  alt="Icon arrows left"
                  src="/img/icon-arrows-left-circle-2-1.png"
                />

                <div className="group-6">
                  <div className="ellipse" />

                  <div className="ellipse-2" />

                  <div className="ellipse-3" />

                  <div className="ellipse-4" />
                </div>
              </div>
            </div>

            <div className="component-2">
              <div className="group-wrapper">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="revolutionizing-high">
                      &#34;Revolutionizing High Performance Computing&#34;
                    </div>

                    <p className="unleashing-the-power">
                      &#34;Unleashing the
                      Power&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beyond von
                      Neumann&#34;
                    </p>
                  </div>
                </div>
              </div>

              <div className="div-wrapper">
                <div className="group-7">
                  <p className="a-leap-beyond">
                    &#34;A Leap Beyond Harvard: Pioneering Performance&#34;
                  </p>

                  <p className="innovative-CPU">
                    &#34;Innovative CPU Architecture for AI and HPC&#34;
                  </p>
                </div>
              </div>

              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <p className="closing-the">
                    &#34;Closing the Perfotrmance Gap in Supercomputing&#34;
                  </p>

                  <div className="elevating-real-life">
                    &#34;Elevating Real-Life Supercomputer Experience&#34;
                  </div>
                </div>
              </div>

              <div className="group-8">
                <div className="overlap-3">
                  <p className="breaking-the">
                    &#34;Breaking the Boundaries of AI and Large Language
                    Models&#34;
                  </p>

                  <p className="architecting-the">
                    &#34;Architecting the Future of AI Infrastructure&#34;
                  </p>
                </div>
              </div>
            </div>

            <div className="overlap-4">
              <div className="rectangle-2" />

              <div className="text-wrapper-12">Recent Posts</div>

              <div className="text-wrapper-13">Products</div>

              <div className="text-wrapper-14">Official Blog</div>

              <div className="rectangle-3" />

              <div className="group-9">
                <img className="image" alt="Image" src="/img/image-3-1.png" />

                <div className="text-wrapper-15">About:</div>

                <p className="as-a-physicist-i-ve">
                  &#34;As a physicist, I&#39;ve long understood the critical
                  importance of scalable computing. In my work with Parimics,
                  SSRLabs, Axiado, and now Abacus Semi, I&#39;ve consistently
                  championed innovative solutions in computer architecture.&#34;
                </p>

                <div className="text-wrapper-16">load more...</div>
              </div>

              <div className="rectangle-4" />

              <div className="text-wrapper-17">Appreciation</div>
            </div>

            <div className="overlap-5">
              <p className="text-wrapper-18">
                Our post-Harvard CPU architecture overcomes the von-Neumann
                bottleneck by introducing a scale-out port for direct
                connectivity, optimizing data flow, and eliminating Inter
                Processor Communication (IPC). This breakthrough enhances data
                processing efficiency and scalability, with implications for
                faster and more efficient computing across industries.
              </p>

              <div className="text-wrapper-19">Recent Posts</div>

              <p className="text-wrapper-20">
                Posted on 2023-09-12 | Company Blog
              </p>

              <p className="text-wrapper-21">
                How does your post-Harvard CPU architecture address the
                von-Neumann bottleneck and what are its practical implications
                for the computing industry?
              </p>

              <img className="line" alt="Line" src="/img/line-7-1.svg" />

              <div className="read-more">
                <div className="text-wrapper-22">Read More</div>
              </div>

              <img
                className="firefly-electronic"
                alt="Firefly electronic"
                src="/img/firefly-electronic-components-artificial-intelligence-and-mach-4.png"
              />

              <div className="component-3">
                <div className="posts">
                  <div className="overlap-group-3">
                    <p className="text-wrapper-23">
                      Protect CPUs, DPUs, BMCs, and more with individualized,
                      encrypted firmware for comprehensive server security.
                    </p>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-09-12 | </span>

                      <span className="text-wrapper-24">Securing a Server</span>
                    </p>

                    <div className="text-wrapper-25">Read More..</div>
                  </div>
                </div>

                <div className="posts-2">
                  <div className="overlap-group-3">
                    <div className="overlap-group-4">
                      <p className="unenthusiastic-about">
                        Unenthusiastic about ARM&#39;s IPO due to complex ISA
                        and expensive licensing. Prefers RISC-V for flexibility
                        and control.
                      </p>

                      <div className="text-wrapper-26">Read More..</div>
                    </div>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-09-12 | </span>

                      <span className="text-wrapper-24">ARM IPO</span>
                    </p>
                  </div>
                </div>

                <div className="posts-3">
                  <div className="overlap-group-3">
                    <p className="text-wrapper-27">
                      Open ROAD Project for ASIC design, offering open source
                      EDA tools. Planning to use it for better verification in
                      proof-of-concept designs.
                    </p>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-09-07 | </span>

                      <span className="text-wrapper-24">
                        The OpenROAD Project
                      </span>
                    </p>

                    <div className="text-wrapper-25">Read More..</div>
                  </div>
                </div>

                <div className="posts-4">
                  <div className="overlap-group-3">
                    <p className="text-wrapper-27">
                      Data Processing Unit (DPU) is an integrated smart NIC,
                      offloading CPU tasks and enhancing security in server
                      chips for better performance.
                    </p>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-09-07 | </span>

                      <span className="text-wrapper-24">
                        Definition of a DPU
                      </span>
                    </p>

                    <div className="text-wrapper-25">Read More..</div>
                  </div>
                </div>

                <div className="posts-5">
                  <div className="overlap-group-3">
                    <p className="flash-memory-summit">
                      Flash Memory Summit 2023 highlighted AI&#39;s growth,
                      CXL&#39;s emergence, and evolving storage technologies,
                      marking a dynamic shift in the industry.
                    </p>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-08-15| </span>

                      <span className="text-wrapper-24">
                        Flash Memory Summit{" "}
                      </span>
                    </p>

                    <div className="text-wrapper-25">Read More..</div>
                  </div>
                </div>

                <div className="posts-6">
                  <div className="overlap-group-3">
                    <div className="overlap-group-5">
                      <p className="a-baseboard">
                        A Baseboard Management Controller (BMC) assists in
                        server management, but it can&#39;t secure or monitor
                        network traffic like a smart offload NIC with DMA and
                        RDMA capabilities.
                      </p>

                      <div className="text-wrapper-28">Read More..</div>
                    </div>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-06-12| </span>

                      <span className="text-wrapper-24">BMCs</span>
                    </p>
                  </div>
                </div>

                <div className="posts-7">
                  <div className="overlap-group-3">
                    <div className="overlap-group-6">
                      <p className="text-wrapper-29">
                        Growing hardware demands in AI, ML, and HPC may require
                        laptops with 64 GB and servers with 16-64 TB DRAM in the
                        near future.
                      </p>

                      <div className="text-wrapper-30">Read More..</div>
                    </div>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-06-12| </span>

                      <span className="text-wrapper-24">
                        AI needs TB-level DRAM
                      </span>
                    </p>
                  </div>
                </div>

                <div className="posts-8">
                  <div className="overlap-group-3">
                    <p className="text-wrapper-31">
                      There is likely fraudulent Employee Retention Credit (ERC)
                      activity, with scammers targeting business owners for
                      potential legal consequences.
                    </p>

                    <p className="posted-on">
                      <span className="span">Posted on 2023-06-12| </span>

                      <span className="text-wrapper-24">ERC Fraud</span>
                    </p>

                    <div className="text-wrapper-25">Read More..</div>
                  </div>
                </div>
              </div>

              <p className="text-wrapper-32">
                Visit official blog for more ....
              </p>
            </div>

            <div className="overlap-6">
              <div className="text-wrapper-33">Appreciation</div>

              <img
                className="element"
                alt="Element"
                src="/img/1691995586573.png"
              />

              <img
                className="element-2"
                alt="Element"
                src="/img/1680188339383-1.png"
              />

              <img
                className="element-3"
                alt="Element"
                src="/img/1695037554-1.png"
              />

              <img
                className="axel-kloth-a"
                alt="Axel kloth a"
                src="/img/axel-kloth-a-mastermind-disrupting-the-field-of-computer-archite-1.png"
              />
            </div>
          </>
        )}

        <div
          className="overlap-7"
          style={{
            backgroundColor:
              screenWidth < 1440
                ? "#e2c680c4"
                : screenWidth >= 1440
                  ? "#d9d9d9ba"
                  : undefined,
            borderRadius:
              screenWidth < 1440
                ? "5px 5px 0px 0px"
                : screenWidth >= 1440
                  ? "5px"
                  : undefined,
            height:
              screenWidth < 1440
                ? "37px"
                : screenWidth >= 1440
                  ? "598px"
                  : undefined,
            top:
              screenWidth < 1440
                ? "145px"
                : screenWidth >= 1440
                  ? "4330px"
                  : undefined,
            width:
              screenWidth < 1440
                ? "430px"
                : screenWidth >= 1440
                  ? "1440px"
                  : undefined,
          }}
        >
          {screenWidth >= 1440 && (
            <div className="copyright-wrapper">
              <p className="copyright">
                <span className="text-wrapper-34">
                  © Copyright 2023 Abacus Semiconductor Corporated. All rights
                  reserved.
                </span>
              </p>
            </div>
          )}

          <div
            className="group-40"
            style={{
              height:
                screenWidth >= 1440
                  ? "333px"
                  : screenWidth < 1440
                    ? "23px"
                    : undefined,
              left:
                screenWidth >= 1440
                  ? "101px"
                  : screenWidth < 1440
                    ? "14px"
                    : undefined,
              position:
                screenWidth >= 1440
                  ? "absolute"
                  : screenWidth < 1440
                    ? "relative"
                    : undefined,
              top:
                screenWidth >= 1440
                  ? "99px"
                  : screenWidth < 1440
                    ? "7px"
                    : undefined,
              width:
                screenWidth >= 1440
                  ? "1163px"
                  : screenWidth < 1440
                    ? "393px"
                    : undefined,
            }}
          >
            {screenWidth >= 1440 && (
              <>
                <p className="news-awards-team">
                  <a
                    href="https://abacus-semi.com/news.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">
                      News
                      <br />
                    </span>
                  </a>

                  <a
                    href="https://abacus-semi.com/awards.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">
                      Awards
                      <br />
                    </span>
                  </a>

                  <a
                    href="https://abacus-semi.com/team.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">
                      Team
                      <br />
                    </span>
                  </a>

                  <a
                    href="https://abacus-semi.com/affiliations.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">
                      Affiliations
                      <br />
                    </span>
                  </a>

                  <a
                    href="https://abacus-semi.com/mission_values.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">
                      Mission and Values
                      <br />
                    </span>
                  </a>

                  <a
                    href="https://abacus-semi.com/careers.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">
                      Careers
                      <br />
                    </span>
                  </a>

                  <a
                    href="https://abacus-semi.com/human_resources.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">
                      Human Resources
                      <br />
                    </span>
                  </a>

                  <a
                    href="https://abacus-semi.com/legal.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-35">Legal</span>
                  </a>
                </p>

                <img className="line-2" alt="Line" src="/img/line-9-2.svg" />

                <p className="european-office">
                  <span className="text-wrapper-24">
                    European Office
                    <br />
                  </span>

                  <span className="text-wrapper-36">
                    <br />
                    Abacus Semiconductor GmbH
                    <br />
                    Schauenburgerstraße 116
                    <br />
                    24118 Kiel
                    <br />
                    Deutschland/Germany
                  </span>
                </p>

                <p className="global-headquarters">
                  <span className="text-wrapper-24">
                    Global Headquarters
                    <br />
                    <br />
                  </span>

                  <span className="text-wrapper-36">
                    Abacus Semiconductor Corporation
                    <br />
                    Abacus Semiconductor Corporation544 Monterey RdPacifica, CA
                    94044
                    <br />
                    United States of America
                  </span>
                </p>

                <div className="text-wrapper-37">Mailing Addresses:-</div>

                <div className="text-wrapper-38">Connect with Us</div>

                <img
                  className="icon-gmail"
                  alt="Icon gmail"
                  src="/img/icon-gmail-2.png"
                />

                <img
                  className="cecf-c"
                  alt="Cecf c"
                  src="/img/c9e44cf2-c903-4386-9ef4-c68f26b71b85-cover-1-2.png"
                />

                <img className="line-3" alt="Line" src="/img/line-8-1.svg" />

                <div className="text-wrapper-39">Company Overview</div>

                <img
                  className="icon-social-linkedin"
                  alt="Icon social linkedin"
                  src="/img/icon-social-linkedin-1.png"
                />
              </>
            )}

            {screenWidth < 1440 && (
              <>
                <div className="group-10">
                  <img className="line-4" alt="Line" src="/img/line-11-1.svg" />

                  <img className="line-5" alt="Line" src="/img/line-11-1.svg" />

                  <img className="line-6" alt="Line" src="/img/line-11-1.svg" />
                </div>

                <div className="group-11">
                  <div className="group-12">
                    <div className="overlap-group-7">
                      <div className="ellipse-5" />

                      <img
                        className="line-7"
                        alt="Line"
                        src="/img/line-1-3.svg"
                      />
                    </div>
                  </div>

                  <img
                    className="vector"
                    alt="Vector"
                    src="/img/vector-5.svg"
                  />

                  <img
                    className="vector-2"
                    alt="Vector"
                    src="/img/vector-6.svg"
                  />

                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-7.svg"
                  />

                  <img
                    className="icon-headset"
                    alt="Icon headset"
                    src="/img/icon-headset-5.png"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {screenWidth >= 1440 && (
          <>
            <div className="group-13">
              <div className="group-14">
                <img
                  className="group-15"
                  alt="Group"
                  src="/img/group-6-3.png"
                />
              </div>

              <img
                className="abacus-semiconductor-2"
                alt="Abacus semiconductor"
                src="/img/abacus-semiconductor-corporation-logos-black-1-2.png"
              />
            </div>

            <div className="group-16">
              <div className="group-17">
                <div className="overlap-8">
                  <div className="group-18">
                    <div className="overlap-group-8">
                      <div className="ellipse-6" />

                      <img
                        className="line-8"
                        alt="Line"
                        src="/img/line-1-2.svg"
                      />
                    </div>
                  </div>

                  <div className="text-wrapper-40">Search</div>
                </div>
              </div>
            </div>

            <div className="overlap-9">
              <div className="navbar">
                <div className="text-wrapper-41">Home</div>

                <div className="text-wrapper-42">About</div>

                <div className="text-wrapper-43">Products</div>

                <div className="text-wrapper-44">Posts</div>

                <div className="text-wrapper-45">Contact Us</div>

                <div className="text-wrapper-46">Call Us</div>

                <img
                  className="icon-headset-2"
                  alt="Icon headset"
                  src="/img/icon-headset-3.png"
                />
              </div>

              <div className="navbar">
                <div className="text-wrapper-41">Home</div>

                <div className="text-wrapper-42">About</div>

                <div className="text-wrapper-43">Products</div>

                <div className="text-wrapper-44">Posts</div>

                <div className="text-wrapper-45">FAQ’s</div>

                <div className="text-wrapper-47">Contact Us</div>

                <img
                  className="icon-headset-2"
                  alt="Icon headset"
                  src="/img/icon-headset-3.png"
                />
              </div>
            </div>
          </>
        )}

        {screenWidth < 1440 && (
          <>
            <div className="mobile-view-slider">
              <div className="overlap-group-9">
                <p className="unleashing-the-power-2">
                  &#34;Unleashing the
                  Power&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beyond von
                  Neumann&#34;
                </p>

                <div className="revolutionizing-high-2">
                  &#34;Revolutionizing High Performance Computing&#34;
                </div>
              </div>

              <img
                className="firefly-electronic-2"
                alt="Firefly electronic"
                src="/img/firefly-electronic-components-artificial-intelligence-and-mach-5.png"
              />

              <img
                className="firefly-electronic-3"
                alt="Firefly electronic"
                src="/img/firefly-supercomputer-artificial-intelligence-semiconductors-a.png"
              />

              <img
                className="firefly-electronic-4"
                alt="Firefly electronic"
                src="/img/firefly-electronic-components-artificial-intelligence-and-mach-6.png"
              />
            </div>

            <div className="overlap-10">
              <img
                className="founder"
                alt="Founder"
                src="/img/founder-1-1.png"
              />

              <div className="rectangle-5" />

              <p className="as-a-physicist-i-ve-2">
                &#34;As a physicist, I&#39;ve long understood the critical
                importance of scalable computing. In my work with Parimics,
                SSRLabs, Axiado, and now Abacus Semi, I&#39;ve consistently
                championed innovative solutions in computer architecture.&#34;
              </p>

              <div className="text-wrapper-48">Load More...</div>

              <div className="rectangle-6" />

              <div className="rectangle-7" />

              <div className="text-wrapper-49">Products</div>

              <p className="abacus-semiconductor-3">
                Abacus Semiconductor provides advanced processors and memory
                solutions, simplifying server manufacturing with their
                Server-on-a-Chip technology. Their RISC-V processors excel in
                AI, high-performance computing, and &#34;Big Data&#34; analysis,
                offering robust I/O, memory capabilities, and security features.
              </p>

              <div className="slider">
                <div className="group-19">
                  <img className="img-3" alt="Servr" src="/img/servr-2.png" />

                  <div className="text-wrapper-50">For More information...</div>

                  <div className="text-wrapper-51">Server-on-a-Chip</div>

                  <p className="text-wrapper-52">
                    Integrated server chip with RISC-V.
                  </p>
                </div>

                <div className="group-20">
                  <img className="img-3" alt="Hram" src="/img/hram-3.png" />

                  <div className="text-wrapper-53">For More information...</div>

                  <p className="text-wrapper-54">
                    Scalable, high-bandwidth HRAM for processors.
                  </p>

                  <div className="text-wrapper-55">
                    Heterogeneous Random Access Memory
                  </div>
                </div>

                <div className="group-21">
                  <img
                    className="img-3"
                    alt="Application"
                    src="/img/application-processor-3.png"
                  />

                  <div className="text-wrapper-56">For More information...</div>

                  <p className="text-wrapper-57">
                    Multi-core RISC-V processor with virtualization.
                  </p>

                  <div className="text-wrapper-58">Application Processor</div>
                </div>

                <div className="group-22">
                  <img
                    className="img-3"
                    alt="Data processor"
                    src="/img/data-processor-1-1.png"
                  />

                  <div className="text-wrapper-56">For More information...</div>

                  <div className="text-wrapper-52">
                    64-core RISC-V database processor.
                  </div>

                  <div className="text-wrapper-59">Database Processor</div>
                </div>

                <div className="group-23">
                  <img
                    className="img-3"
                    alt="Mathprocessor"
                    src="/img/mathprocessor-3.png"
                  />

                  <div className="text-wrapper-50">For More information...</div>

                  <div className="text-wrapper-52">
                    Massively parallel math accelerator.
                  </div>

                  <div className="text-wrapper-60">Math Processor</div>
                </div>

                <div className="group-24">
                  <img
                    className="img-3"
                    alt="Support"
                    src="/img/support-3.png"
                  />

                  <div className="text-wrapper-61">For More information...</div>

                  <p className="text-wrapper-62">
                    Automated support and download platform.
                  </p>

                  <div className="text-wrapper-63">Support/Downloads</div>
                </div>
              </div>
            </div>

            <div className="CEO-founder-wrapper">
              <div className="CEO-founder">CEO &amp; Founder</div>
            </div>

            <img
              className="slider-icon-arrows"
              alt="Slider icon arrows"
              src="/img/icon-arrows-left-circle-2-1.png"
            />

            <div className="overlap-11">
              <div className="rectangle-8" />

              <img
                className="firefly-electronic-5"
                alt="Firefly electronic"
                src="/img/firefly-electronic-components-artificial-intelligence-and-mach-4.png"
              />

              <div className="group-25">
                <div className="overlap-12">
                  <div className="text-wrapper-64">Recent Posts</div>
                </div>
              </div>

              <div className="rectangle-9" />

              <p className="text-wrapper-65">
                Our post-Harvard CPU architecture overcomes the von-Neumann
                bottleneck by introducing a scale-out port for direct
                connectivity, optimizing data flow, and eliminating Inter
                Processor Communication (IPC). This breakthrough enhances data
                processing efficiency and scalability, with implications for
                faster and more efficient computing across industries.
              </p>

              <p className="text-wrapper-66">
                How does your post-Harvard CPU architecture address the
                von-Neumann bottleneck and what are its practical implications
                for the computing industry?
              </p>

              <p className="text-wrapper-67">
                Posted on 2023-09-12 | Company Blog
              </p>

              <div className="recent-mobile-view">
                <div className="group-26">
                  <div className="overlap-group-10">
                    <p className="posted-on-2">
                      <span className="text-wrapper-68">
                        Posted on 2023-09-12 |{" "}
                      </span>

                      <span className="text-wrapper-24">Securing a Server</span>
                    </p>

                    <div className="text-wrapper-69">Read More..</div>

                    <p className="text-wrapper-70">
                      Protect CPUs, DPUs, BMCs, and more with individualized,
                      encrypted firmware for comprehensive server security.
                    </p>
                  </div>
                </div>

                <div className="group-27">
                  <div className="overlap-group-10">
                    <p className="posted-on-2">
                      <span className="text-wrapper-68">
                        Posted on 2023-09-12 |{" "}
                      </span>

                      <span className="text-wrapper-24">Securing a Server</span>
                    </p>

                    <div className="text-wrapper-69">Read More..</div>

                    <p className="text-wrapper-70">
                      Protect CPUs, DPUs, BMCs, and more with individualized,
                      encrypted firmware for comprehensive server security.
                    </p>
                  </div>
                </div>

                <div className="group-28">
                  <div className="overlap-group-10">
                    <p className="posted-on-2">
                      <span className="text-wrapper-68">
                        Posted on 2023-09-12 |{" "}
                      </span>

                      <span className="text-wrapper-24">Securing a Server</span>
                    </p>

                    <div className="text-wrapper-69">Read More..</div>

                    <p className="text-wrapper-70">
                      Protect CPUs, DPUs, BMCs, and more with individualized,
                      encrypted firmware for comprehensive server security.
                    </p>
                  </div>
                </div>

                <div className="group-29">
                  <div className="overlap-group-10">
                    <p className="posted-on-2">
                      <span className="text-wrapper-68">
                        Posted on 2023-09-12 |{" "}
                      </span>

                      <span className="text-wrapper-24">Securing a Server</span>
                    </p>

                    <div className="text-wrapper-69">Read More..</div>

                    <p className="text-wrapper-70">
                      Protect CPUs, DPUs, BMCs, and more with individualized,
                      encrypted firmware for comprehensive server security.
                    </p>
                  </div>
                </div>

                <div className="group-30">
                  <div className="overlap-group-10">
                    <p className="posted-on-2">
                      <span className="text-wrapper-68">
                        Posted on 2023-09-12 |{" "}
                      </span>

                      <span className="text-wrapper-24">Securing a Server</span>
                    </p>

                    <div className="text-wrapper-69">Read More..</div>

                    <p className="text-wrapper-70">
                      Protect CPUs, DPUs, BMCs, and more with individualized,
                      encrypted firmware for comprehensive server security.
                    </p>
                  </div>
                </div>

                <div className="group-31">
                  <div className="overlap-group-10">
                    <p className="posted-on-2">
                      <span className="text-wrapper-68">
                        Posted on 2023-09-12 |{" "}
                      </span>

                      <span className="text-wrapper-24">Securing a Server</span>
                    </p>

                    <div className="text-wrapper-69">Read More..</div>

                    <p className="text-wrapper-70">
                      Protect CPUs, DPUs, BMCs, and more with individualized,
                      encrypted firmware for comprehensive server security.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group-32">
                <div className="overlap-12">
                  <div className="text-wrapper-64">Appreciation</div>
                </div>
              </div>
            </div>

            <div className="overlap-13">
              <img
                className="element-4"
                alt="Element"
                src="/img/1695037554-1.png"
              />

              <img
                className="element-5"
                alt="Element"
                src="/img/1680188339383-1.png"
              />

              <img
                className="element-6"
                alt="Element"
                src="/img/1691995586573.png"
              />

              <img
                className="axel-kloth-a-2"
                alt="Axel kloth a"
                src="/img/axel-kloth-a-mastermind-disrupting-the-field-of-computer-archite-1.png"
              />
            </div>

            <div className="overlap-14">
              <div className="rectangle-10" />

              <p className="global-headquarters-2">
                <span className="text-wrapper-24">
                  Global Headquarters
                  <br />
                  <br />
                </span>

                <span className="text-wrapper-71">
                  Abacus Semiconductor Corporation
                  <br />
                  Abacus Semiconductor Corporation544 Monterey RdPacifica, CA
                  94044
                  <br />
                  United States of America
                </span>
              </p>

              <div className="group-25">
                <div className="overlap-12">
                  <div className="text-wrapper-64">Company Overview</div>
                </div>
              </div>

              <p className="news-awards-team-2">
                <a
                  href="https://abacus-semi.com/news.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">
                    News
                    <br />
                  </span>
                </a>

                <a
                  href="https://abacus-semi.com/awards.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">
                    Awards
                    <br />
                  </span>
                </a>

                <a
                  href="https://abacus-semi.com/team.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">
                    Team
                    <br />
                  </span>
                </a>

                <a
                  href="https://abacus-semi.com/affiliations.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">
                    Affiliations
                    <br />
                  </span>
                </a>

                <a
                  href="https://abacus-semi.com/mission_values.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">
                    Mission and Values
                    <br />
                  </span>
                </a>

                <a
                  href="https://abacus-semi.com/careers.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">
                    Careers
                    <br />
                  </span>
                </a>

                <a
                  href="https://abacus-semi.com/human_resources.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">
                    Human Resources
                    <br />
                  </span>
                </a>

                <a
                  href="https://abacus-semi.com/legal.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-72">Legal</span>
                </a>
              </p>

              <div className="text-wrapper-73">Connect with Us</div>

              <img className="line-9" alt="Line" src="/img/line-9-3.svg" />

              <div className="group-33">
                <img
                  className="vector-4"
                  alt="Vector"
                  src="/img/vector-4.svg"
                />

                <img
                  className="icon-gmail-2"
                  alt="Icon gmail"
                  src="/img/icon-gmail-3.png"
                />

                <img
                  className="cecf-c-2"
                  alt="Cecf c"
                  src="/img/c9e44cf2-c903-4386-9ef4-c68f26b71b85-cover-1-3.png"
                />
              </div>

              <p className="european-office-2">
                <span className="text-wrapper-24">
                  European Office
                  <br />
                </span>

                <span className="text-wrapper-71">
                  <br />
                  Abacus Semiconductor GmbH
                  <br />
                  Schauenburgerstraße 116
                  <br />
                  24118 Kiel
                  <br />
                  Deutschland/Germany
                </span>
              </p>

              <div className="rectangle-11" />

              <p className="span-wrapper">
                <span className="text-wrapper-71">
                  © Copyright 2023 Abacus Semiconductor Corporates. All rights
                  reserved.
                </span>
              </p>
            </div>

            <div className="group-34">
              <div className="overlap-15">
                <div className="text-wrapper-74">07:22 PM</div>

                <img
                  className="icon-battery"
                  alt="Icon battery"
                  src="/img/icon-battery-90-1.png"
                />

                <img
                  className="icon-signal-cellular"
                  alt="Icon signal cellular"
                  src="/img/icon-signal-cellular-alt-1.png"
                />

                <img
                  className="icon-wifi"
                  alt="Icon wifi"
                  src="/img/icon-wifi-1.png"
                />
              </div>
            </div>

            <div className="group-35">
              <div className="group-36">
                <img
                  className="group-37"
                  alt="Group"
                  src="/img/group-6-4.png"
                />
              </div>

              <img
                className="abacus-semiconductor-4"
                alt="Abacus semiconductor"
                src="/img/abacus-semiconductor-corporation-logos-black-1-2.png"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
