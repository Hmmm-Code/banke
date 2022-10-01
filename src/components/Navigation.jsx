import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { CgProfile } from "react-icons/cg";

const Navigation = () => {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "For Sale", href: "#", current: false },
    { name: "For Rent", href: "#", current: false },
    { name: "Other Properties", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "Login", href: "#" },
    { name: "Sign up", href: "#" },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section className="min-h-full uppercase shadow-md">
      <Disclosure as="nav" className="bg-gray-200">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 uppercase">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button href="#">
                      <img
                        className="h-8 w-15"
                        src="https://www.banke.ae/wp-content/uploads/2021/08/Banke-black-logo.png"
                        alt="Workflow"
                      />
                    </button>
                  </div>
                  <div className="hidden md:block ml-10">
                    <div className="ml-18 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-black hover:bg-gray-100 hover:text-[#FCB41C]"
                              : "text-black hover:bg-gray-100 hover:text-[#FCB41C]",
                            "px-3 py-2 rounded-md text-md font-semibold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-grey-500 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FCB41C] hover:bg-gray-100">
                          <span className="sr-only">Open user menu</span>

                          <CgProfile className="h-8 w-8 rounded-full text-black" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 hover:text-[#FCB41C]"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-[#FCB41C] inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#FCB41C] focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-black hover:bg-gray-100 hover:text-[#FCB41C]"
                        : "text-black hover:bg-gray-100 hover:text-[#FCB41C]",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <CgProfile className="h-8 w-8 rounded-full text-black" />
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FCB41C] hover:bg-gray-100"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </section>
  );
};

export default Navigation;
