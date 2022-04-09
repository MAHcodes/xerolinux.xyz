import styled from "styled-components";
import Title from "./Title";

const Disclaimer = () => {
  return (
    <div>
      <Title text="⚠️ XeroLinux Disclaimer ⚠️" />
      <P>
        Please read this carefully to understand more about what this project is
        and what it entails.
        <br /> <br />
        This Distro is a private project that I have created for myself first
        and foremost, as a hobby, in my spare time, to learn the inner workings
        of Linux, which means it's mainly compatible with the hardware I
        currently own...
      </P>

      <Title alignLeft text="What does it mean for you ?" />
      <P>
        When it comes to issues related to your specific hardware config, you
        better be ready to do your own research using the awesome knowledge
        found on ArchWiki and/or the Web. You can help others by sharing
        solutions, power of the community <br />
        <br />
        Otherwise, we will do best we can to assist you. If not myself, other
        users might be able to chime in if and when they can. All I ask for is a
        lot of patience as I am one man doing this, not a team.
      </P>

      <Title alignLeft text="No DE Requests Accepted" />
      <P>
        I won't be adding other DEs, KDE is and forever will be only one moving
        forward. I won't be accepting requests for any. I cannot stretch myself
        too thin. I am doing it for the fun of learning.
      </P>

      <Title alignLeft text="AUR Packages on Xero Repos" />
      <P>
        While you can request packages from AUR to be built and added to our
        repos, but if they depend on any other DE than KDE they will be
        rejected.
      </P>

      <Title alignLeft text="What will NOT be supported" />
      <P>
        We will NOT provide support for the following scenarios, please take
        that however you want, just as long as you are good with it.
      </P>
      <Ul>
        <li>Hack Installs.</li>
        <li>Cloud Server Installs. </li>
        <li>Installs on Apple devices.</li>
        <li>Other Installed DEs or WMs.</li>
        <li>Custom/Other Kernels **!!!Danger Zone!!!**</li>
        <li>Installs on Tablets and other Touch devices</li>
      </Ul>
      <P>I hope this clarifies the matter once and for all..</P>
      <P>XeroLinux Admin/Creator.</P>
    </div>
  );
};

const P = styled.p`
  margin-bottom: 2em;
`;

const Ul = styled.ul`
  list-style-type: disc;
  margin-inline-start: 1rem;
  margin-bottom: 2em;
`;

export default Disclaimer;
