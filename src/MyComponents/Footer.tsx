import { Button } from "./Navbar";

function Footer() {
  return (
    <div className="w-full">
      <div id="SignUp" className="flex justify-between items-center px-[1vw]">
        <h3 className="text-[2vw] font-[400] text-zinc-700">
          Sign up and get exclusive <br /> special deals
        </h3>
        <div className="relative flex items-center">
          <input
            type="email"
            name="email"
            id="email"
            className="px-[0.4vw] text-[2.4vw] py-[0.5vw] border-r-[1px] border-b-[1px] border-zinc-200"
          />
          <label htmlFor="email" className="rounded-r-xl inline-block bg-sky-500 px-[0.4vw] py-[1.5vw]">
            Signin Up
          </label>
        </div>
      </div>
      <div className="flex py-[5vw] justify-start gap-[15vw] bg-[#2a2932] px-[10vw] text-white">
        <div className="flex flex-col items-start gap-1">
            <h3 className="uppercase text-xl font-[600]">Categories</h3>
            <Button>Web Builder</Button>
            <Button>Hosting</Button>
            <Button>Data Center</Button>
            <Button>Robotic-Automation</Button>
        </div>
        <div className="flex flex-col items-start gap-1 justify-start">
            <h3 className="uppercase text-xl font-[600]">Contect</h3>
            <Button>Contact</Button>
            <Button>Privacy Policy</Button>
            <Button>Terms Of Service</Button>
            <Button>Categories</Button>
            <Button>About</Button>
        </div>
        <div>United State</div>
      </div>
    </div>
  );
}

export default Footer;
