import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import events from "@/lib/constants";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
  "use cache";
  cacheLife("hours"); // fake
  let events;
  try {
    const request = await fetch("https://next-js-16-mu.vercel.app/api/events", {
      // next: { revalidate: 60 },
      method: "GET",
      // cache: "no-store",
    });

    if (!request.ok) {
      if (request.status === 404) {
        return notFound();
      }
      throw new Error(`Failed to fetch events: ${request.statusText}`);
    }

    const response = await request.json();
    events = response.events;

    if (!events) {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    return notFound();
  }

  return (
    <main>
      <section>
        <p className="text-center text-2xl font-bold">
          The Hub for Every Dev <br /> Event You Can't Miss
        </p>
        <p className="text-center mt-5">
          Hackathons, Meetups, and Conferences, All in One Place
        </p>

        <ExploreBtn />

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>
          <Suspense fallback={<div>Loading events...</div>}>
            <ul className="events">
              {events &&
                events.length > 0 &&
                events.map((event: IEvent) => (
                  <li key={event.title} className="list-none">
                    <EventCard {...event} />
                  </li>
                ))}
            </ul>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Page;
