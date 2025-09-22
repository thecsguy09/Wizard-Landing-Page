import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Btn from "../Btn";
import { Link } from "react-scroll";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="xl:px-24 lg:px-8 px-4">
      {/* Desktop Screen Menu */}
      <nav className="mx-auto flex items-center justify-between py-3 lg:py-6">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="flex items-center gap-2 text-[22px] font-extrabold font-[NeueMachina]">
              <i className="ri-shining-2-fill inline-block rotate-[45deg] text-[33px]"></i>
              WizardZ
            </h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex items-center lg:gap-x-9 xl:gap-x-11 text-[16.5px] font-medium font-mono">
          {["About Us", "Services", "Use Cases", "Pricing", "Blog"].map(
            (link) => (
              <Link
                to={link === "Use Cases" ? "case-study" : link}
                key={link}
                smooth={true}
                duration={500}
                className="leading-6 text-gray-900 cursor-pointer"
              >
                {link}
              </Link>
            )
          )}
          <Btn
            title={"Request a quote"}
            className={"hover:bg-black hover:text-white py-2"}
          />
        </PopoverGroup>
      </nav>
      {/* Tablet & Mobile Screen Menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-3 lg:py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <h1 className="flex items-center gap-2 text-[22px] font-extrabold font-[NeueMachina]">
                <i className="ri-shining-2-fill inline-block rotate-[45deg] text-[33px]"></i>
                WizardZ
              </h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-4 py-5 px-1 flex flex-col font-medium font-mono">
                {["About Us", "Services", "Use Cases", "Pricing", "Blog"].map(
                  (link) => (
                    <Link
                      to={link}
                      key={link}
                      smooth={true}
                      duration={500}
                      className="leading-6 text-gray-900 cursor-pointer"
                    >
                      {link}
                    </Link>
                  )
                )}
                <Btn title={"Request a quote"} className={"py-2 w-max"} />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navigation;
