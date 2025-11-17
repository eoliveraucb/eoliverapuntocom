import { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeProvider";

import profile2 from "@assets/profile2.png";

export default function Resume() {
  const { theme } = useTheme();
  const [isPrintMode, setIsPrintMode] = useState(false);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrintMode(true);
    const handleAfterPrint = () => setIsPrintMode(false);

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  const printResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Print Button */}
      {!isPrintMode && (
        <div className="fixed top-4 right-4 z-50 print:hidden">
          <button
            onClick={printResume}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <i className="fas fa-print"></i>
            Print Resume
          </button>
        </div>
      )}
      <div className="max-w-4xl mx-auto pt-20 md:pt-8 p-8 print:p-0 print:max-w-none print:pt-0">
        {/* Header */}
        <header className="text-center mb-12 print:mb-8">
          <img
            src={profile2}
            alt="Edwin Mauricio Olivera"
            className="w-24 md:w-32 h-24 md:h-32 rounded-full mx-auto print:w-24 print:h-24 print:mb-4 mt-4 md:mt-3 mb-4 md:mb-3"
          />
          <h1 id="page-title" className="text-3xl md:text-4xl font-bold mb-2 print:text-3xl scroll-mt-20" style={{ color: 'var(--text-primary)' }}>
            Edwin Mauricio Olivera
          </h1>
          <div className="text-xl text-blue-600 font-semibold mb-4 print:text-lg">
            Service Designer | UX/UI Designer | Creative Technologist
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed print:text-sm">
            Interdisciplinary UX and service designer integrating human-centered research, systems thinking, and emerging technologies to build scalable, equitable experiences. Brings a hybrid background in digital product design, creative technology, and education to deliver innovative solutions across products, programs, and learning ecosystems.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-6 print:hidden">
            <a href="https://www.linkedin.com/in/emolivera/" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://www.instagram.com/unkerned" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://wa.link/p5civg" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="https://discord.com/channels/1282866549925085206" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a href="https://soundcloud.com/e-mauricio-olivera" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <i className="fab fa-soundcloud text-xl"></i>
            </a>
            <a href="https://www.behance.net/emolivera" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <i className="fab fa-behance text-xl"></i>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm print:gap-4 print:mt-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-globe text-blue-600"></i>
              <a href="http://www.eolivera.com/design" className="text-gray-400 hover:text-blue-600">eolivera.com/design</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone text-blue-600"></i>
              <a href="tel:+13323614198" className="text-gray-400 hover:text-blue-600">332-361-4198</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-600"></i>
              <a href="mailto:eolivera@sva.edu" className="text-gray-400 hover:text-blue-600">eolivera@sva.edu</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fab fa-linkedin text-blue-600"></i>
              <a href="https://www.linkedin.com/in/emolivera/" className="text-gray-400 hover:text-blue-600">linkedin.com/in/emolivera</a>
            </div>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Work Experience
          </h2>

          <div className="space-y-8 print:space-y-5">
            <div className="print:break-inside-avoid">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Lead Service Designer</h3>
                  <div className="text-blue-600 font-medium">Cambio Labs NYC</div>
                  <div className="text-gray-400 text-sm">New York City, NY · Hybrid</div>
                </div>
                <div className="text-gray-500 font-medium text-sm">Jul 2025 — Present</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400 print:text-sm print:space-y-1">
                <li>Awarded NYC Mayor's Office of Civic Engagement Design Champion for co-creating Manhattan's Youth Entrepreneurship Fellowship Program, a participatory budgeting initiative</li>
                <li>Led the service design process, tooling, and implementation by bridging user experience, entrepreneurship, and social impact projects. Applied a technology-forward, social-first approach</li>
                <li>Co-creating avenues for policy standards in AI and education, focusing on capacity building, somatic learning, and peer mentorship</li>
                <li>Drove co-learning through emerging creative technologies like AR, VR, projection mapping, and smart textiles</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Senior UX/UI Designer</h3>
                  <div className="text-blue-600 font-medium">Digital Academy, EDSI</div>
                  <div className="text-gray-400 text-sm">Cleveland, Ohio · Hybrid</div>
                </div>
                <div className="text-gray-500 font-medium text-sm">Jun 2020 — 2025</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400 print:text-sm print:space-y-1">
                <li>Redesigned a proprietary Learning Management System for 700+ K-12 schools among students, administrators, and educators, increasing administrative user effectiveness by 45% and driving adoption by 2 additional dioceses</li>
                <li>Integrated generative AI tools (LLMs) for automated class material creation, reducing content development time by 25% for educators and administrators</li>
                <li>Information Architecture & Content Strategy: Planned and executed IA tests and content strategy recommendations to improve user experience and information flow</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Senior UX Designer</h3>
                  <div className="text-blue-600 font-medium">Vulcan Software</div>
                  <div className="text-gray-400 text-sm">La Paz, Bolivia · On-site</div>
                </div>
                <div className="text-gray-500 font-medium text-sm">Nov 2018 — Jul 2021</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400 print:text-sm print:space-y-1">
                <li>Project Management: Managed multiple innovation projects simultaneously, ensuring on-time delivery and alignment with strategic goals</li>
                <li>Client Engagement & Co-Design: Led co-design sessions with government officials and international stakeholders to deliver human-centered digital solutions aligned with policy objectives</li>
                <li>Notable Partnerships & Brands: Sparkassen-Finanzgruppe (Germany Global), PLAN International (Bolivia, Global), Milicomm Tigo (Sweden, LATAM)</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Sr. Digital Art Director</h3>
                  <div className="text-blue-600 font-medium">Stealth Creative</div>
                  <div className="text-gray-400 text-sm">Saint Louis, MO · On-Site</div>
                </div>
                <div className="text-gray-500 font-medium text-sm">May 2013 — May 2016</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400 print:text-sm print:space-y-1">
                <li>Led UX/UI design for 20+ B2B SaaS platforms, including administrative dashboards for business enterprise clients: Spectrum Enterprise, Comcast Enterprise, RCN Business, improving task completion rates by 35% through intuitive interface redesigns</li>
                <li>Collaboration: Collaborated with multidisciplinary teams including designers, developers, behavioral scientists, and economists to deliver end-to-end digital products</li>
                <li>Designed interactive collateral and data visualizations (R Studio, Python) to simplify complex administrative workflows for stakeholders</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Education
          </h2>

          <div className="space-y-6 print:space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold print:text-base mt-[0px] mb-[0px]" style={{ color: 'var(--text-primary)' }}>Master of Design for Social Innovation</h3>
                <div className="text-blue-600 font-medium">School of Visual Arts</div>
                <div className="text-gray-400 text-sm">New York City, NY</div>
              </div>
              <div className="text-gray-500 font-medium text-sm">2023 — 2025</div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold print:text-base mt-[0px] mb-[0px]" style={{ color: 'var(--text-primary)' }}>BFA Graphic Design, Minor in Sociology</h3>
                <div className="text-blue-600 font-medium">The University of Memphis</div>
                <div className="text-gray-400 text-sm">Memphis, TN</div>
              </div>
              <div className="text-gray-500 font-medium text-sm">2003 — 2009</div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Certifications
          </h2>

          <div className="space-y-4 print:space-y-2">
            <div className="p-4 rounded-lg border-l-4 border-blue-600 print:bg-transparent print:p-2 bg-[#101013]">
              <h4 className="font-semibold print:text-sm" style={{ color: 'var(--text-primary)' }}>Social-Behavioral-Educational (SBE) Comprehensive</h4>
              <p className="text-gray-400 text-sm mt-[-4px]">CITI Program · Issued May 2025 · Expires May 2028</p>
              <p className="text-gray-500 text-xs">Credential ID: 66613123</p>
            </div>
            <div className="p-4 rounded-lg border-l-4 border-blue-600 print:bg-transparent print:p-2 bg-[#101013]">
              <h4 className="font-semibold print:text-sm" style={{ color: 'var(--text-primary)' }}>OHRP: Participant-Centered Informed Consent Training</h4>
              <p className="text-gray-400 text-sm mt-[-4px]">CITI Program · Issued Apr 2025 · Expires Apr 2028</p>
              <p className="text-gray-500 text-xs">Credential ID: 66613121</p>
            </div>
            <div className="p-4 rounded-lg border-l-4 border-blue-600 print:bg-transparent print:p-2 bg-[#101013]">
              <h4 className="font-semibold print:text-sm" style={{ color: 'var(--text-primary)' }}>Google Generative AI Training</h4>
              <p className="text-gray-400 text-sm mt-[-4px]">Google · Issued Jun 2025</p>
              <p className="text-gray-500 text-xs">Credential ID: Y86JRQNYH8GG</p>
            </div>
            <div className="p-4 rounded-lg border-l-4 border-blue-600 print:bg-transparent print:p-2 bg-[#101013]">
              <h4 className="font-semibold print:text-sm" style={{ color: 'var(--text-primary)' }}>Future of AI Course</h4>
              <p className="text-gray-400 text-sm mt-[-4px]">BlueDot Impact · Issued Jun 2025</p>
              <p className="text-gray-500 text-xs">Credential ID: recWyVJ9fiKV4ui20</p>
            </div>
          </div>
        </section>

        {/* Skills & Capabilities */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Skills & Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Software & Tech Stack</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-400 text-sm">
                <li>Visual Design: Figma, Adobe Illustrator, InDesign, Photoshop</li>
                <li>3D and Animation: After Effects, Premiere, Animate, Blender, CSS/SVG Animation</li>
                <li>Interactive Media: TouchDesigner, Snapchat Lens Studio, TikTok Effect House, Rive, GSAP, Three.js</li>
                <li>Web Design: Visual Studio Code, Domain/Hosting setup</li>
                <li>Analytics: Google Analytics, HotJar, Quant UX, R Studio, MAT Plot</li>
                <li>Front-End Development: HTML, CSS/SASS, JS, React, Next.js, Vue.js, PHP, VS Code, Git</li>
                <li>Information Architecture, Content Strategy</li>
                <li>Generative AI Tools: Claude, ChatGPT, Hugging Face, DALL·E 3, Stable Diffusion, Midjourney, Runway ML, Image FX</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Design Research</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-400 text-sm">
                <li>Human-Centered Design, Service Design, UX/UI</li>
                <li>Design Thinking Facilitation, Co-Design Workshops</li>
                <li>Storyboarding, Campaign Concepting</li>
                <li>User/Behavioral Research (Ethnographic methods, analytics, participatory workshops)</li>
                <li>Information Architecture, Content Strategy</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Creative Industry Capabilities</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-400 text-sm">
                <li>Creative Direction & Digital Art: Multi-channel campaigns and visual ecosystems for brands and events</li>
                <li>Experiential & Hybrid Design: Immersive brand activations blending tactile and digital interaction</li>
                <li>Microlearning Design: Modules merging embodied practice, digital design, and speculative technologies</li>
                <li>Web3 & Future Systems: Prototyping within decentralized and AI-augmented ecosystems</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>AI-Driven Creative Systems</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-400 text-sm">
                <li>Design and implement AI-assisted workflows (MCPs, procedural integrations, strategic automations)</li>
                <li>Augment creative processes while maintaining human-led direction and ethical alignment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Languages
          </h2>

          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-400 text-sm">
            <li>English (Native)</li>
            <li>Spanish (Native)</li>
          </ul>
        </section>
      </div>
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: letter;
          }

          body {
            font-size: 12px;
            line-height: 1.4;
            color: #000;
            background: white;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:text-xs {
            font-size: 0.75rem;
          }

          .print\\:text-sm {
            font-size: 0.875rem;
          }

          .print\\:text-base {
            font-size: 1rem;
          }

          .print\\:text-lg {
            font-size: 1.125rem;
          }

          .print\\:text-xl {
            font-size: 1.25rem;
          }

          .print\\:text-3xl {
            font-size: 1.875rem;
          }

          .print\\:p-0 {
            padding: 0;
          }

          .print\\:p-2 {
            padding: 0.5rem;
          }

          .print\\:mb-2 {
            margin-bottom: 0.5rem;
          }

          .print\\:mb-4 {
            margin-bottom: 1rem;
          }

          .print\\:mb-8 {
            margin-bottom: 2rem;
          }

          .print\\:mt-4 {
            margin-top: 1rem;
          }

          .print\\:w-24 {
            width: 6rem;
          }

          .print\\:h-24 {
            height: 6rem;
          }

          .print\\:max-w-none {
            max-width: none;
          }

          .print\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .print\\:gap-2 {
            gap: 0.5rem;
          }

          .print\\:gap-4 {
            gap: 1rem;
          }

          .print\\:space-y-1 > * + * {
            margin-top: 0.25rem;
          }

          .print\\:px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          .print\\:bg-transparent {
            background-color: transparent;
          }

          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}