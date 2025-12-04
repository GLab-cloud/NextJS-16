import Hello from "@/app/components/hello";
const Home = () => {
  console.log("What type of component am I?");
  return (
    <main>
      <div className="text-5xl underline"> Welcome to NextJS 16</div>
      <Hello />
    </main>
  );
};
export default Home;
