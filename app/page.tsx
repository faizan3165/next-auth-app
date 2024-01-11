import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="font-semibold text-emerald-400 text-9xl">Home</div>

      <Button size={"lg"} variant={"destructive"} className="ml-10 rounded-xl">
        Click Me!
      </Button>
    </>
  );
};

export default Home;
