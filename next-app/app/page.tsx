import ExploreBtn from "./components/ExploreBtn";

const Page = () => {
  return (
    <section>
      <p className="text-center text-2xl font-bold">
        The Hub for Every Dev <br /> Event You Can't Miss{" "}
      </p>
      <p className="text-center mt-5">
        {" "}
        Hackathon, Meetups, and Conferences, All in one place{" "}
      </p>
      <ExploreBtn/>
    </section>
  );
};

export default Page;
