import React from "react";

import AboutUs1 from "../../assets/about_us1.png";
import AboutUs2 from "../../assets/about_us2.png";
import AboutUs3 from "../../assets/about_us3.png";
import { AddressIcon, EmailIcon } from "../../assets/icons";

const infos = [
  {
    title: "Unregistered users",
    content: `We encourage you to register with us in order to take advantage of The Mobility Expert's many personalization features. However, you may choose not to register and take advantage of any feature of our site where registration is not required. <br><br>
If you do not register, then the information we collect from you is limited. We log your IP address in order to help diagnose problems with our server, administer our Web site and track usage statistics. Your IP address may vary each time you visit, or it may be the same, depending on whether you access our site through an always-on type of Internet connection.  Either way, it would be extremely difficult for us to identify you through your IP address, and we make no attempt to do so. If you reached our site by clicking on a link or advertisement on another site, then we also log that information. This helps us to maximize our Internet exposure, and to understand the interests of our users. All of this information is collected and used only in the aggregate; that is, it is entered into our database, where we can use it to generate overall reports on our visitors, but not reports about individual visitors. <br><br>
We also place a small file known as a "cookie" on your computer's hard drive. A cookie may contain information that allows us to track your path through our Web site and to determine whether you have visited us before. However, unless you register with us, it contains no personally identifiable information that would allow us to identify you. Cookies cannot be used to read data off of your hard drive, and cannot retrieve information from any other cookies created by other Web sites. We use cookies in this manner to help us understand how visitors use our site, and to help us to improve our site. You may refuse to accept a cookie from us by following the procedures specific to your Web browser. Although you may do so, you may find that your browser reacts strangely when visiting not only our Web site, but other Web sites as well. Since cookies don't provide us with any information from which we can identify you, we suggest you allow us to place one on your computer.
`,
  },
  {
    title: "Registered users",
    content: `
    If you choose to register with us, you'll be able to add content to our site. For example, you may post your own mobility product reviews. You will also be able to email content to yourself. The benefits of registering will increase over time as we get to know you better and introduce new features. We encourage you to register so that you can experience everything that The Mobility Expert has to offer!<br><br>
If you register with us, we will collect personal information from you in addition to the non-personal information described above. That personal information may include your name, email address, mailing address, telephone number, product preferences, user name and password. The information we collect may vary, but we only collect the information that you manually enter into our forms. We may store all or some of that information in a cookie file on your hard drive, so that our system will recognize you each time you visit our site. In that way, we can save your preferences from visit to visit and present you with a customized Web site, without requiring you to log into our site every time you visit. 
How we use the personal information we collect.<br><br>
We use the personal information we collect to help both of us! As we mentioned above, registering with us allows you to personalize our Web site so that it is most useful to you. It also allows you to log into our site automatically each time you visit, rather than manually typing your user name and password every time. We may also use this information to periodically contact you with news or important information from The Mobility Expert or to request your feedback on our site. In addition to these periodic updates, we may email you additional materials, but only if you specifically request them. These might include opt-in newsletters and other materials that you proactively request from The Mobility Expert.<br><br>
In addition to these communications, if you have provided an email address, we may use your personal information to send you notifications about special offers or to tell you about opportunities available from our partners. You may opt-out of any or all marketing communications from The Mobility Expert in any commercial e-mail we send or at any time, as well as access and update your personal information, by visiting  <span style="color:#0DB14B">http://www.themobilityexpert.com/MemberProfile.</span>
We may also use certain information that you provide in order to present you with advertising that you may find interesting. This benefits both of us. It benefits us because advertising helps pay the bills, and we can charge our advertisers more if they know that their ads will be seen by somebody more likely to find it useful. It benefits you because you see advertising that may actually be interesting to you, rather than annoying.<br><br>
You can cancel your registration with us by e-mailing cancel@themobilityexpert.com, and placing your email address in the subject of the e-mail. We will send you an e-mail to confirm your request. After we receive confirmation, we will remove your information from our active database, but some information may remain in our archives. <br><br>
Disclosure of your personal information.<br><br>
The Mobility Expert does not sell or rent any personal information to any third party. We may aggregate personal information from all of our users and provide that information in the aggregate to other parties, including advertisers, for marketing and promotional purposes. However, if we do so, that information will not be in a form that will allow any third party to identify you personally.
How you can review and update your personal information.<br><br>
You can review and update the personal information you have provided through the registration process by visiting  <span style="color:#0DB14B">http://www.themobilityexpert.com/MemberProfile.</span>

    `,
  },
  {
    title: "Children's Privacy",
    content:
      "This website is a general audience site, and we do not knowingly collect information about children. Should a child whom we know to be under 13 send personal information to us, we will use that information only to respond directly to that child to inform him or her that we must have parental consent before receiving his or her personal information.",
  },
  {
    title: "Changes to this Privacy Policy.",
    content:
      "We reserve the right to change this policy should we deem it advisable to do so. If we make material changes that will affect personal information we have already collected from you, we will make reasonable efforts to notify you of the changes and to give you the opportunity to amend or cancel your registration.",
  },
];

const AboutUsPage = () => {
  return (
    <section className="mx-[184px] mb-24">
      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center">About Us</h1>
        <img
          src={AboutUs1}
          alt=""
          className="mt-9 w-full h-[360px] object-cover rounded-[10px]"
        />
        <p className="font-normal mt-7 text-[#414045] max-w-[672px] mx-auto">
          Buying a wheelchair, mobility scooter, or lift is difficult and
          expensive. The Mobility Expert was designed to get you the best
          information to help you guide you through the purchasing process to
          get you the right product at the best price.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl font-semibold text-center">How It Works</h1>
        <div className="mt-9 flex items-center justify-between">
          <p className="font-normal mt-7 text-[#414045] max-w-[672px] mr-8">
            Buying a wheelchair, mobility scooter, or lift is difficult and
            expensive. The Mobility Expert was designed to get you the best
            information to help you guide you through the purchasing process to
            get you the right product at the best price.
          </p>
          <img
            src={AboutUs2}
            alt=""
            className="w-1/2 h-[360px] object-cover rounded-[10px]"
          />
        </div>
        <div className="flex items-center justify-between">
          <img
            src={AboutUs3}
            alt=""
            className="w-1/2 h-[360px] object-cover rounded-[10px]"
          />
          <p className="font-normal mt-7 text-[#414045] max-w-[672px] ml-8">
            Check out the reviews on each product to make sure you are confident
            in your purchase. If you are ready to buy, click whichever
            price/brand looks best to you to complete your purchase.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
        <img
          src={AboutUs1}
          alt=""
          className="mt-9 w-full h-[360px] object-cover rounded-[10px]"
        />
        <div className="flex items-center mt-9 justify-evenly">
          <div className="w-[30%]">
            <h3 className="text-[#0DB14B] text-[20px] font-semibold">
              The Mobility Expert, LLC
            </h3>
            <ul>
              <li className="flex items-start mt-3">
                <div className="mr-3">
                  <AddressIcon />
                </div>
                <p className="font-normal text-[14px]">
                  The Mobility Expert, LLC 3705 W Pico Blvd #696 Los Angeles, CA
                  90019-3451
                </p>
              </li>
              <li className="flex items-start mt-3">
                <div className="mr-3">
                  <EmailIcon />
                </div>
                <p className="font-normal text-[14px]">
                  info@themobilityexpert.com
                </p>
              </li>
            </ul>
          </div>
          <div className="w-[30%]">
            <h3 className="text-[#0DB14B] text-[20px] font-semibold">
              Partnerships:
            </h3>
            <ul>
              <li className="flex items-start mt-3 text-[14px]">
                Interested in partnering with us? Send us an email
              </li>
              <li className="flex items-start mt-3">
                <div className="mr-3">
                  <EmailIcon />
                </div>
                <p className="font-normal text-[14px]">
                  partnerships@themobiltyexpert.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-3xl font-semibold text-center">Privacy Policy</h1>
        <img
          src={AboutUs1}
          alt=""
          className="mt-9 w-full h-[360px] object-cover rounded-[10px]"
        />
        <div className="max-w-[672px] mx-auto">
          <p className="font-normal mt-7 text-[#414045] ">
            The Mobility Expert has provided this privacy policy because we
            value your right to privacy. This policy is effective as of January
            1, 2021 and governs the collection of personal information through
            this website on or after this date. This policy describes the types
            of information The Mobility Expert collects from its users and how
            that information is used. Please read this policy carefully before
            providing us with any personal information. If you have questions
            about this policy, e-mail us at{" "}
            <span className="text-[#0DB14B]">
              privacy@themobilityexpert.com.
            </span>
          </p>
          <h1 className="text-[24px] font-semibold mt-9">
            Information we collect.
          </h1>
          {infos.map((info, index) => (
            <div className="mt-8">
              <h1 className="font-semibold text-[18px]">
                {index + 1}.{info.title}
              </h1>
              <div
                className="mt-4 font-normal"
                dangerouslySetInnerHTML={{ __html: info.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
