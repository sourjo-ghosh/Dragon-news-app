import Link from "next/link";

const AboutUsPage = () => {
  const values = [
    {
      title: "Accuracy First",
      description:
        "Every report goes through verification and editorial review before publication.",
    },
    {
      title: "Reader Focused",
      description:
        "We prioritize clear, actionable information that helps people make better decisions.",
    },
    {
      title: "Always Evolving",
      description:
        "Our newsroom continuously adapts to new tools, platforms, and reader needs.",
    },
  ];

  return (
    <main className="bg-zinc-50 py-12 dark:bg-black">
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            About Dragon News
          </p>
          <h1 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100 md:text-4xl">
            Trusted stories for a fast-moving world
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
            Dragon News is a digital-first news platform dedicated to publishing
            verified, relevant, and timely journalism. From breaking headlines
            to deep analysis, we help readers understand what is happening and
            why it matters.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {value.title}
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-6xl px-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            What we cover
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Our editorial team covers national affairs, technology, business,
            lifestyle, and global trends with a commitment to clarity and
            context. We combine real-time updates with meaningful storytelling
            to keep our readers informed every day.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
            >
              Explore News
            </Link>
            <Link
              href="/career"
              className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;