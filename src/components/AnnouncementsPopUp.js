import styled from "styled-components";
import Title from "./Title";

const AnnouncementsPopUP = () => {
  return (
    <Div>
      <Title fz2 alignLeft text="Dear XeroLinux users," />
      <P>
        Kindly find the latest news & announcements below… Read carefully. Keep
        coming back as the list will be constantly updated…
      </P>

      <Title fz2 alignLeft text="XFCE & GNOME Discontinued :" />
      <P>
        It's with a heavy heart that I say this. But after considerable back and
        forth, I have decided that, starting May 25th, moving forward, there
        will only be <Span>KDE</Span> version. <Span>XFCE</Span> &{" "}
        <Span>GNOME</Span> have been archived, and they are{" "}
        <Span>no longer available for the public.</Span> Nor will there be any
        other <Span>DE</Span> in the future.
      </P>

      <Title fz2 text="Repos Have been moved  :" alignLeft />
      <P>
        Since switching away from <Span>"ArcoLinux"</Span> repositories, and
        moving our own from one server to another, that, caused issues for some
        with older versions of <Span>XeroLinux..</Span>
        <br /> <br />
        If you have been affected by this, find the solution on this thread.
        Also posted in the FAQ section…{" "}
        <Span>
          <A
            href="https://forum.xerolinux.xyz/thread-87.html"
            target="_blank"
            rel="noreferrer"
          >
            404 Syncing Repos…
          </A>
        </Span>
        .
      </P>

      <Title fz2 text="The future of XeroLinux  :" alignLeft />
      <p>
        I want to concentrate on one DE, <Span>KDE</Span> in my case, making it
        the best it could be and more. Many Distros only have a single DE and
        they are doing great.... So that's the path I chose.
        <br />
        <br />
        I am so sorry for this. Please do understand, I am but one old man doing
        this... Not a team...
        <br />
        <br />
        Also <Span>XeroLinux</Span> is a young Distro, barely a year old. They
        do say that the first year is the rockiest...
        <br />
        <br />
        Thank you all for your continued support
      </p>
    </Div>
  );
};

const Span = styled.span`
  font-weight: bold;
  color: rgba(var(--fg2), 85%);
`;

const A = styled.a`
  text-decoration: underline;
`;

const P = styled.p`
  margin-bottom: 2em;
`;

const Div = styled.div`
  width= 100%;
  text-align: left;
`;

export default AnnouncementsPopUP;
