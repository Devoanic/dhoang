import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = ["React", "Typescript", "TailwindCSS", "HTML"];
  const backendSkills = ["Java", "Lua", "C++", "C", "Javascript"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-28"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-0 ">
              Hello, I'm Daniel Hoang, currently a sophomore with a CS major at
              UT Austin. I am a long-time lover of gaming and computers and hope
              to continue this journey through coding whether it be game
              developing or building raw ideas, I'm all in for it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - University of
                  Texas at Austin (Expected Graduation 2028)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Discrete Math, Computer
                  Architecture
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Code2Career | Google x Basta (Mar 2026 - Current)
                  </h4>
                  <p>
                    Selected among 100 students from 1,000+ applicants for a
                    10-week mentorship with a Google Software Engineer focused
                    on algorithms and data structures. Strengthened
                    problem-solving and debugging through intensive coding
                    practice, technical discussions, and code review sessions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    AI Trainer, Handshake (May 2026 - Jul 2026)
                  </h4>
                  <p>
                    Reviewed 50+ short-form video clips weekly to evaluate
                    AI-generated captions, ran quality assurance on peer
                    annotations, and rewrote flagged text for phrasing, context,
                    and audio alignment, contributing to a 30% improvement in
                    dataset quality and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
