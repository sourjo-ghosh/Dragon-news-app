import Link from "next/link";

const openings = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "Build high-performance news experiences with modern React and Next.js.",
  },
  {
    title: "Content Editor",
    type: "Full-time",
    location: "Dhaka",
    description:
      "Shape daily coverage, edit reports, and uphold editorial quality standards.",
  },
  {
    title: "Social Media Strategist",
    type: "Contract",
    location: "Hybrid",
    description:
      "Grow audience engagement through platform-specific storytelling and analytics.",
  },
];

export const metadata = {
  title: "Dragon News | Career",
};

const CareerPage = () => {
  return (
    <main className="bg-zinc-50 py-12 dark:bg-black">
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Careers
          </p>
          <h1 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100 md:text-4xl">
            Build the future of digital journalism
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
            At Dragon News, we are building a newsroom that values integrity,
            innovation, and impact. If you are passionate about storytelling and
            technology, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Open positions
        </h2>
        <div className="mt-5 grid gap-5">
          {openings.map((job) => (
            <article
              key={job.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {job.title}
                </h3>
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600 dark:bg-red-950/50 dark:text-red-300">
                  {job.type}
                </span>
              </div>

              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {job.location}
              </p>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {job.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-6xl px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            How to apply
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Send your resume, portfolio, and a short cover letter to
            careers@dragonnews.com. Please mention the role title in your email
            subject line.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:careers@dragonnews.com"
              className="rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
            >
              Email Your Application
            </a>
            <Link
              href="/about-us"
              className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareerPage;
