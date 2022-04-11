import styled from "styled-components";
import Title from "./Title";

const AnnouncementsPopUP = () => {
  return (
    <Div>
      <Title fz2 alignLeft text="Dear XeroLinux users," />
      <p>
        Kindly find the latest news & announcements below… Read carefully. Keep
        coming back as the list will be constantly updated…
      </p>

      <Title fz2 alignLeft text="XFCE & GNOME Discontinued :" />
      <p>
        It's with a heavy heart that I say this. But after considerable back and
        forth, I have decided that, starting May 25th, moving forward, there
        will only be <span>KDE</span> version. <span>XFCE</span> &{" "}
        <span>GNOME</span> have been archived, and they are{" "}
        <span>no longer available for the public.</span> Nor will there be any
        other <span>DE</span> in the future.
      </p>

      <Title fz2 text="Repos Have been moved  :" alignLeft />
      <p>
        Since switching away from <span>"ArcoLinux"</span> repositories, and
        moving our own from one server to another, that, caused issues for some
        with older versions of <span>XeroLinux..</span>
        <br /> <br />
        If you have been affected by this, find the solution on this thread.
        Also posted in the FAQ section…{" "}
        <span>
          <a
            href="https://forum.xerolinux.xyz/thread-87.html"
            target="_blank"
            rel="noreferrer"
          >
            404 Syncing Repos…
          </a>
        </span>
        .
      </p>

      <Title fz2 text="The future of XeroLinux  :" alignLeft />
      <p>
        I want to concentrate on one DE, <span>KDE</span> in my case, making it
        the best it could be and more. Many Distros only have a single DE and
        they are doing great.... So that's the path I chose.
        <br />
        <br />
        I am so sorry for this. Please do understand, I am but one old man doing
        this... Not a team...
        <br />
        <br />
        Also <span>XeroLinux</span> is a young Distro, barely a year old. They
        do say that the first year is the rockiest...
        <br />
        <br />
        Thank you all for your continued support
      </p>
    </Div>
  );
};

const Div = styled.div`
  width= 100%;
  text-align: left;
`;

export default AnnouncementsPopUP;
