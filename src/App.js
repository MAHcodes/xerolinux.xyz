import Announcements from "./components/Announcements";
import Header from "./components/Header";
import styled from "styled-components";
import Hero from "./components/Hero";
import { useRef } from "react";
import SocialLinks from "./components/SocialLinks";
import Features from "./components/Features";
import Download from "./components/Download";
import Credit from "./components/Credit";
import Customization from "./components/Customization";
import Videos from "./components/Videos";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  const wrapperRef = useRef();
  return (
    <div className="App">
      <Wrapper ref={wrapperRef}>
        <Announcements />
        <Header />
      </Wrapper>
      <Hero hdr={wrapperRef} />
      <SocialLinks />
      <Features />
      <Download />
      <Credit />
      <Customization />
      <Videos
        title="XeroLinux Videos"
        urls={[
          "https://www.youtube.com/embed/eSo0V0ns4HQ",
          "https://www.youtube.com/embed/9Mtuo0DDgCI",
          "https://www.youtube.com/embed/bU2-UdmrJWg",
        ]}
      />
      <Videos
        title="XeroLinux Reviews"
        urls={[
          "https://www.youtube.com/embed/rjWu7MFHpOA",
          "https://www.youtube.com/embed/rqCTzdLNeXY",
          "https://www.youtube.com/embed/lGw7lspuTPo",
        ]}
      />
      <FAQ
        faqs={[
          {
            q: "Installing for 1st time ?",
            a: "One thing is clear, not everyone is familiar with Linux, at least not enough to feel comfortable to install a Custom Distro like XeroLinux without knowing how it works, that's why I have written, and created a step by step guide. Kindly pay close attention to every part, that is all I ask...",
            more: "https://forum.xerolinux.xyz/thread-38.html",
          },
          {
            q: "Having Hardware specific issues ?",
            a: "Since not everyone has the same hardware config, some issues related to them might arise, as with every OS. And knowing I cannot test every single one myself, I have curated a list with potential solutions below. Hope it helps you out...",
            more: "https://forum.xerolinux.xyz/thread-28.html",
          },
          {
            q: "Want to auto mount drives on startup ?",
            a: "This has been asked many times on social, so I wrote a guide describing, how, in case you have multiple drives, you can auto-mount them on startup without needing to enter root password every time, this guide uses Gnome-Disks, the simplest method imo...",
            more: "https://forum.xerolinux.xyz/thread-95.html",
          },
          {
            q: "Want to DualBoot with Windows ?",
            a: "Not everyone can completely switch to Linux, ditching Windows. I do understand that it can still be needed for some stuff related for, say, school or work. That is why, I posted video guides below by Erik Dubois that shouw you how to Dual-Boot Linux+Windows in both same drive or separate ones...",
            more: "https://forum.xerolinux.xyz/thread-5.html",
          },
          {
            q: 'Own "Legacy" nVidia GPU ?',
            a: 'This one is very important that you follow super closely. In case you own a what is called "Legacy" nVidia GPU, some special steps have to be followed since they kinda dropped support for those in their latest Driver Stack.. Below is everything I did to remedy the situation. Just know come May this will change, will update as necessary...',
            more: "https://forum.xerolinux.xyz/thread-7.html",
          },
          {
            q: "Wanna learn more about Snapper ?",
            a: "Snapper, in case you didn't know, is a great method to take quick snapshots of a working system when using the BTRFS FileSystem, should something go wrong easy to restore back to a working one.. Below are guides of it working with a tool called BTRFS-Assistant...",
            more: "https://forum.xerolinux.xyz/thread-80.html",
          },
          {
            q: "Learn my terminal Aliases here",
            a: 'You don\'t like to remember complex Terminal commands ? Well I have created a list of "Aliases" that are easy to remember that you will find below. List will constantly be updated with new ones making Terminal use a breeze ;)',
            more: "https://forum.xerolinux.xyz/thread-19.html",
          },
          {
            q: "Stuck with vmlinuz-linux not found ? Fix below.",
            a: "Sometimes a Kernel update can go wrong, other times you are testing a Custom one and all Hell goes wrong. I have posted videos below, again by Erik that should help you recover from that...",
            more: "https://forum.xerolinux.xyz/thread-90.html",
          },
          {
            q: "Issues updating due to failed mirrors (404)?",
            a: "Ok, sometimes I have to move my Repo(s) around, yeah it happens, which might cause updates to fail, heck even fresh installs of the Distro due to them moving around.. Below are the steps to remedy that sitation, and soon in my tool come May 25th release...",
            more: "https://forum.xerolinux.xyz/thread-87.html",
          },
          {
            q: "Want To Downgrade A Package ?",
            a: "Not all updates on Arch go smoothly, in rare occasions an update breaks the app or system, nice thing about Arch is its flexibility, and ability to downgrade broken package to a previous version. Below is a guide on how to do just that...",
            more: "https://forum.xerolinux.xyz/thread-37.html",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0 0 auto;
  z-index: 999;
`;

export default App;
