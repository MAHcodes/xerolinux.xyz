import Title from "./Title";

const Disclaimer = () => {
  return (
    <div>
      <Title fz2 text="⚠️ XeroLinux Disclaimer ⚠️" />
      <p>
        Please read this carefully to understand more about what this project is
        and what it entails.
        <br /> <br />
        This Distro is a private project that I have created for myself first
        and foremost, as a hobby, in my spare time, to learn the inner workings
        of Linux, which means it's mainly compatible with the hardware I
        currently own...
      </p>

      <Title fz2 alignLeft text="What does it mean for you ?" />
      <p>
        When it comes to issues related to your specific hardware config, you
        better be ready to do your own research using the awesome knowledge
        found on ArchWiki and/or the Web. You can help others by sharing
        solutions, power of the community <br />
        <br />
        Otherwise, we will do best we can to assist you. If not myself, other
        users might be able to chime in if and when they can. All I ask for is a
        lot of patience as I am one man doing this, not a team.
      </p>

      <Title fz2 alignLeft text="No DE Requests Accepted" />
      <p>
        I won't be adding other DEs, KDE is and forever will be only one moving
        forward. I won't be accepting requests for any. I cannot stretch myself
        too thin. I am doing it for the fun of learning.
      </p>

      <Title fz2 alignLeft text="AUR Packages on Xero Repos" />
      <p>
        While you can request packages from AUR to be built and added to our
        repos, but if they depend on any other DE than KDE they will be
        rejected.
      </p>

      <Title fz2 alignLeft text="What will NOT be supported" />
      <p>
        We will NOT provide support for the following scenarios, please take
        that however you want, just as long as you are good with it.
      </p>
      <ul>
        <li>Hack Installs.</li>
        <li>Cloud Server Installs. </li>
        <li>Installs on Apple devices.</li>
        <li>Other Installed DEs or WMs.</li>
        <li>Custom/Other Kernels **!!!Danger Zone!!!**</li>
        <li>Installs on Tablets and other Touch devices</li>
      </ul>
      <p>I hope this clarifies the matter once and for all..</p>
      <p>XeroLinux Admin/Creator.</p>
    </div>
  );
};

export default Disclaimer;
