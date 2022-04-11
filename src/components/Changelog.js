import Title from "./Title";

const Changelog = () => {
  return (
    <div>
      <Title text=".:: XeroLinux Changelog ::." />
      <p>
        Below is a list of changes since the last release. This one will require
        a <span>Fresh Install</span> to benefit from all the latest & greatest
        updates. However, if you are not interested in any of them, and you are
        currently happy with your current <span>XeroLinux</span> setup, you can
        keep using it with no interruptions.
        <br /> <br />
        This will be the last time this will be required, as from this release
        onwards, it will only be package update ISOs with Distro specific ones
        delivered via my tool. So to know when you will need to use that new
        feature, keep coming back here or join our <span>Discord/Telegram</span>
        …
      </p>
      <p>Now, without further ado, here are the latest changes :</p>
      <ul>
        <li>
          New revamped tool now called <span>XeroTool</span>.
        </li>
        <li>
          New <span>XeroLinux XL</span> Repo for larger packages.
        </li>
        <li>
          No more <span>ArcoLinux</span> Repos. Just ours.
        </li>
        <li>
          <span>PipeWire</span> is now the default Audio Server.
        </li>
        <li>
          Default FileSystem is now <span>XFS</span> vs <span>BTRFS</span>.*
        </li>
        <li>
          No more Package Selection In <span>Calamares</span>.
        </li>
        <li>
          New <span>BTRFS/Snapper</span> tools in case you use that FS.**
        </li>
        <li>New Post Install Package Installer (WiP).</li>
        <li>
          Tweaked <span>SDDM</span> Config for Optimus users.
        </li>
        <li>
          New Button in <span>Calamares</span> to follow along during install.
        </li>
        <li>
          All <span>GPU</span> Drivers moved to Calamares no longer on ISO.
        </li>
        <li>
          Less boot options on <span>USB Boot</span>, no more confusion.
        </li>
        <li>
          New <span>Rice Switcher</span> via the new <span>XeroTool</span>.
        </li>
        <li>Tons of under-the-hood tweaks & optimizations.</li>
        <li>Tweaked the default Rice making it better.</li>
        <li>New Aliases added to both .bashrc & .zshrc.</li>
        <li>
          <span>YaY</span> added alongside <span>Paru</span>. Use the preferred
          one.
        </li>
        <li>
          <span>X11</span> Session is the default post install.**
        </li>
      </ul>
      <br />
      <details>
        <summary>notes:</summary>
        <p>
          * : Make sure to watch the new{" "}
          <span>“Complete XeroLinux Install Guide”</span>
          video attached in the “Download” section for more detail on that &
          more….
        </p>
        <p>
          ** : Make sure to go over the new <span>BTRFS-Assistant</span> &
          <span> Snapper tool</span>
          thread for more information on that over on the ={">"}{" "}
          <a
            href="https://forum.xerolinux.xyz/thread-80.html"
            target="_blank"
            rel="noreferrer"
          >
            <span>XeroLinux Forums…</span>
          </a>
        </p>
        <p>
          *** : After a few reboots <span>Wayland</span> resets as the default
          session. Be careful with that. It’s out of our hands. It’s how it
          behaves unfortunately. If it works for you, keep it, otherwise, on the
          login screen, <span>SDDM</span>, top left corner, switch back to{" "}
          <span>X11</span>…
        </p>
      </details>
      <p>
        That’s it for now.. Hope you enjoy our latest release of{" "}
        <span>XeroLinux</span> ;)
      </p>
    </div>
  );
};

export default Changelog;
