import logo from "../Navbar/logo-text.png";
export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 container mx-auto mt-5">
        <nav>
          <img className="w-30" src={logo} alt="" />
          <p>
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <div className="flex gap-4">
            <a className="font-medium">GitHub</a>
            <a className="font-medium">Twitter</a>
            <a className="font-medium">Linkedin</a>
          </div>
        </nav>
        <nav>
          <h6 className="font-bold">PRODUCT</h6>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="font-bold">COMPANY</h6>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="font-bold">LEGAL</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
      </footer>
      <footer className="bg-base-200 border-t container mx-auto">
        <div className=" px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </footer>
    </>
  );
}
