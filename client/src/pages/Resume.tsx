import { useState, useEffect } from "react";
import { useTheme } from "../components/ThemeProvider";

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
      <div className="max-w-4xl mx-auto p-8 print:p-0 print:max-w-none">
        {/* Header */}
        <header className="text-center mb-12 print:mb-8">
          <img 
            src="/attached_assets/profile-pic_1750628627934.png" 
            alt="Edwin Mauricio Olivera" 
            className="w-32 h-32 rounded-full mx-auto mb-6 print:w-24 print:h-24 print:mb-4"
          />
          <h1 className="text-4xl font-bold mb-2 print:text-3xl" style={{ color: 'var(--text-primary)' }}>
            Edwin Mauricio Olivera
          </h1>
          <div className="text-xl text-blue-600 font-semibold mb-4 print:text-lg">
            Design Strategist | UX/UI Designer | Social Innovation
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed print:text-sm">
            Strategic design leader with 15+ years of global experience bridging UX/UI, social innovation, and ethical tech. 
            Recent MFA in Design for Social Innovation at SVA, specializing in turning complex systems into participatory, 
            inclusive, and human-centered experiences. From corporate UX for telecom giants to grassroots tools for NGOs, 
            my practice is rooted in creative education, positive disruption, and futures thinking.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm print:gap-4 print:mt-4">
            <div className="flex items-center gap-2">
              <i className="fas fa-globe text-blue-600"></i>
              <a href="http://emauric.io" className="text-gray-600 hover:text-blue-600">emauric.io</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-phone text-blue-600"></i>
              <a href="tel:+13323614198" className="text-gray-600 hover:text-blue-600">332-361-4198</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-600"></i>
              <a href="mailto:eolivera@sva.edu" className="text-gray-600 hover:text-blue-600">eolivera@sva.edu</a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fab fa-linkedin text-blue-600"></i>
              <a href="http://www.linkedin.com/in/emolivera" className="text-gray-600 hover:text-blue-600">linkedin.com/in/emolivera</a>
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
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Senior UX/UI Designer</h3>
                  <div className="text-blue-600 font-medium">Digital Academy</div>
                  <div className="text-gray-500 text-sm">Cleveland, Ohio</div>
                </div>
                <div className="text-gray-600 font-medium text-sm">2021 — Current</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 print:text-sm print:space-y-1">
                <li>Led comprehensive redesign of K-12 LMS platform, resulting in 45% increase in user satisfaction and expansion to 2 new dioceses, serving 600+ students</li>
                <li>Early integration of an AI-driven learning content creation tool for K-12 with ethical and accessibility considerations</li>
                <li>Role-based analytics dashboards with cross-device compatibility, improving administrative efficiency, and data-driven decision-making</li>
                <li>Developed and implemented school-wide communications system for 50+ institutions, streamlining general announcements, critical messaging, and emergency alerts</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Adjunct Faculty</h3>
                  <div className="text-blue-600 font-medium">Universidad Católica Boliviana</div>
                  <div className="text-gray-500 text-sm">La Paz, Bolivia</div>
                </div>
                <div className="text-gray-600 font-medium text-sm">2020 — 2024</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 print:text-sm print:space-y-1">
                <li>Professor of Digital Design and UX/UI, and Program Coordinator of Continuing Education. Led the country's first accredited bachelor's degree program in Digital Design</li>
                <li>Developed adaptive curricula for over 200 undergraduate students, incorporating AI-driven UX principles and human-centered design (HCD)</li>
                <li>Facilitated hands-on workshops with educators to create intuitive dashboards, resulting in 30% reduced workflow friction in pilot programs</li>
                <li>Trained faculty in accessibility-first design practices to ensure inclusive learning environments for diverse student needs in private universities</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Senior UX Designer</h3>
                  <div className="text-blue-600 font-medium">Vulcan Software</div>
                  <div className="text-gray-500 text-sm">La Paz, Bolivia</div>
                </div>
                <div className="text-gray-600 font-medium text-sm">2018 — 2021</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 print:text-sm print:space-y-1">
                <li>Redesigned financial management SaaS tools for education clients, incorporating role-based dashboards and accessibility-first workflows for Milicomm Tigo (Sweden, LATAM)</li>
                <li>Led development team in building scalable, modular systems for administrative reporting, adopted by 10+ institutions</li>
                <li>Mentored cross-functional teams in component-driven prototyping (Figma), ensuring seamless handoff to development teams for Sparkassen-Finanzgruppe (Germany Global), PLAN International (Bolivia, Global)</li>
              </ul>
            </div>

            <div className="print:break-inside-avoid">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Sr. Digital Art Director</h3>
                  <div className="text-blue-600 font-medium">Stealth Creative</div>
                  <div className="text-gray-500 text-sm">Remote</div>
                </div>
                <div className="text-gray-600 font-medium text-sm">2013 — 2016</div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 print:text-sm print:space-y-1">
                <li>Led UX/UI design for 20+ B2B SaaS platforms, including administrative dashboards for business enterprise clients: Spectrum Enterprise, Comcast Enterprise, RCN Business, improving task completion rates by 35% through intuitive interface redesigns</li>
                <li>Collaborated with PMO teams to align digital strategy (infographics, whitepapers) with client compliance standards, reducing revision cycles by 40%</li>
                <li>Designed interactive collateral and data visualizations (R Studio) to simplify complex administrative workflows for stakeholders</li>
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
                <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>Masters of Design for Social Innovation</h3>
                <div className="text-blue-600 font-medium">School of Visual Arts</div>
                <div className="text-gray-500 text-sm">New York City, NY</div>
              </div>
              <div className="text-gray-600 font-medium text-sm">2023 — 2025</div>
            </div>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold print:text-base" style={{ color: 'var(--text-primary)' }}>BFA Graphic Design, BS Sociology</h3>
                <div className="text-blue-600 font-medium">The University of Memphis</div>
                <div className="text-gray-500 text-sm">Memphis, TN</div>
              </div>
              <div className="text-gray-600 font-medium text-sm">2003 — 2009</div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Design & Creative</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm">
                <li>UX/UI Design (web & mobile)</li>
                <li>Visual Identity & Branding</li>
                <li>Digital Product Design</li>
                <li>Interactive & Experiential Design</li>
                <li>Prototyping (Figma, Adobe XD, Sketch, InVision)</li>
                <li>Graphic Design (Adobe Creative Suite)</li>
                <li>Motion & Animation (After Effects, SVG/GSAP)</li>
                <li>Creative Coding (TouchDesigner, Processing, p5.js)</li>
              </ul>
            </div>
            
            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Tech & Emerging Fields</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm">
                <li>Front-End Development (HTML/CSS, JavaScript)</li>
                <li>Web3 & Blockchain Literacy</li>
                <li>AI Literacy in Education</li>
                <li>Data Visualization (R, Tidyverse, matplotlib, D3.js)</li>
                <li>Microlearning & Asynchronous Module Design</li>
                <li>Prototyping for EdTech</li>
              </ul>
            </div>
            
            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Education & Facilitation</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm">
                <li>STEAM Curriculum Development</li>
                <li>Workshop Facilitation</li>
                <li>Mentorship & Peer-to-Peer Learning Design</li>
                <li>Bilingual Instruction (English/Spanish)</li>
                <li>User Testing & UX Research</li>
              </ul>
            </div>
            
            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Strategy & Innovation</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm">
                <li>Design Thinking & Human-Centered Design</li>
                <li>Social Innovation & Systemic Design</li>
                <li>Grant Writing & Educational Program Development</li>
                <li>Community Engagement & Stakeholder Partnerships</li>
                <li>Multidisciplinary Collaboration</li>
                <li>Cross-Cultural Communication</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages & Certifications */}
        <section className="mb-12 print:mb-8">
          <div className="grid md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Languages</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm">
                <li>English (Native)</li>
                <li>Spanish (Native)</li>
              </ul>
            </div>
            
            <div className="print:break-inside-avoid">
              <h3 className="text-lg font-semibold mb-4 print:text-base print:mb-2" style={{ color: 'var(--text-primary)' }}>Certifications</h3>
              <ul className="list-disc list-outside ml-5 space-y-1 text-gray-600 text-sm">
                <li>Social-Behavioral-Educational (SBE) Comprehensive</li>
                <li>OHRP: Participant-Centered Informed Consent Training</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Awards & Honors */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Awards & Honors
          </h2>
          
          <div className="space-y-4 print:space-y-2">
            <div className="p-4 rounded-lg border-l-4 border-blue-600 print:bg-transparent print:p-2 bg-[#101013]">
              <h4 className="font-semibold print:text-sm" style={{ color: 'var(--text-primary)' }}>Gold Award, AIGA TEN Show</h4>
              <p className="text-gray-600 text-sm mt-[-8px] mb-[-8px]">WarrantError project recognition</p>
            </div>
            <div className="p-4 rounded-lg border-l-4 border-blue-600 print:bg-transparent print:p-2 bg-[#101013]">
              <h4 className="font-semibold print:text-sm" style={{ color: 'var(--text-primary)' }}>AIGA Worldstudio D×D Scholarship</h4>
              <p className="text-gray-600 text-sm mt-[-6px] mb-[-6px]">Recipient of prestigious design scholarship</p>
            </div>
            <div className="p-4 rounded-lg border-l-4 border-blue-600 print:bg-transparent print:p-2 bg-[#101013]">
              <h4 className="font-semibold print:text-sm" style={{ color: 'var(--text-primary)' }}>SVA Alumni Scholarship Award</h4>
              <p className="text-gray-600 text-sm mt-[-8px] mb-[-8px]">Recognition for academic excellence and design innovation</p>
            </div>
          </div>
        </section>

        {/* Agency & Brand Collaborations */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Agency & Brand Collaborations
          </h2>
          
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 print:text-sm print:space-y-1">
            <li>Executed creative projects for PG&E (San Francisco), Red Bull (Panama/LA), and Miller Lite through agency placements at Momentum Worldwide, Brown Shoe, and Schupp Company</li>
            <li>Developed design solutions for C-level executives at Comcast Enterprise and Spectrum Business Enterprise during tenure at Stealth, leading to award-winning outcomes</li>
          </ul>
        </section>

        {/* Social Impact */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Social Impact & Academic Initiatives
          </h2>
          
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 print:text-sm print:space-y-1">
            <li>Engaged with over 30 NGOs in the U.S. and Latin America, focusing on LGBTQ rights and civil advocacy</li>
            <li>Collaborated with NYU Law's Technology & Racial Justice Collaborative on equity-driven digital projects</li>
          </ul>
        </section>

        {/* Interests */}
        <section className="mb-12 print:mb-8 print:break-inside-avoid">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 print:text-xl print:mb-4" style={{ color: 'var(--text-primary)' }}>
            Interests
          </h2>
          
          <div className="flex flex-wrap gap-3 print:gap-2">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium print:px-2 print:text-xs">💻 Post-digital</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium print:px-2 print:text-xs">💼 New Economies</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium print:px-2 print:text-xs">🌎 Blockchain / Web3</span>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium print:px-2 print:text-xs">🌀 Living Branding</span>
          </div>
        </section>
      </div>
      <style jsx>{`
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