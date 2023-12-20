import Image from "next/image";
import Socials from "@/components/Socials";
import { EMOJIS } from "@/utils/constants/emojis";
import PinnedPost from "@/components/PinnedPost";

export default function Home() {
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
        <PinnedPost
          enable
          title="Automatise my store reviews"
          emoji={EMOJIS.SHOOTING_STAR}
          teaser="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <PinnedPost
        enable
          title="Beautiful Discord automations"
          emoji={EMOJIS.MONTAINS}
          teaser="Bibendum est ultricies integer quis auctor elit sed. Massa tincidunt dui ut ornare lectus sit. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Placerat orci nulla pellentesque dignissim enim. Neque convallis a cras semper auctor neque vitae. Pharetra et ultrices neque ornare aenean. Mollis aliquam ut porttitor leo a. Ac orci phasellus egestas tellus rutrum. Morbi tincidunt augue interdum"
        />
        <PinnedPost
          enable={false}
        />
        <PinnedPost
          enable={false}
        />
      </div>
    </main>
  );
}
