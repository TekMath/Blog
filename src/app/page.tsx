import Socials from "@/components/Socials";
import PinnedPost from "@/components/PinnedPost";
import { getPinnedPosts } from "@/utils/getBlog";
import { EMOJIS_SOURCES } from "@/utils/constants/emojis";

export default function Home() {
  const posts = getPinnedPosts();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="lg:w-5/12 md:w-1/2 flex flex-col gap-2">
        <h1 className="font-semibold text-3xl">Hey, I&apos;m Math</h1>
        <p className="text-lg">
          As a full-stack developer, I&apos;m passionate about the tech,
          independent games and cool designs.
        </p>
        <Socials />
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-44 md:gap-y-16 gap-6 mt-48">
        {posts.map((post, i) => (
          <PinnedPost
            enable
            title={post.infos.title}
            emoji={`${EMOJIS_SOURCES.github}/${post.infos.icon}`}
            teaser={post.content.slice(0, 450)}
            id={i}
          />
        ))}

        {Array.from(Array(4 - posts.length), (_, i) => (
          <PinnedPost enable={false} id={i} />
        ))}
      </div>
    </main>
  );
}
