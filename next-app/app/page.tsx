import events from "@/lib/constants";
import ExploreBtn from "../components/ExploreBtn";
import EventCard from "@/components/EventCard";

const Page = () => {
  return (
    <section>
      <p className="text-center text-2xl font-bold">
        The Hub for Every Dev <br /> Events You Can't Miss{" "}
      </p>
      <p className="text-center mt-5">
        {" "}
        Hackathons, Meetups, and Conferences, All in one place{" "}
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              {" "}
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
