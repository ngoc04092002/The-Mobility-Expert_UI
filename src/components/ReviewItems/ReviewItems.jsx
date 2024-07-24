import React from "react";
import ReviewItem from "./ReviewItem";

const dataReviews = [
  {
    name: "Darlene Robertson",
    avatar:
      "https://s3-alpha-sig.figma.com/img/c832/668e/a2483d22124deffdce1f99bb68cbad49?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U7GPC59aGXyZAI9Q6nr-YjJ~eIk9oXhCmGiXPNooT0CL8mzXeo5eLYMFgpe0dQe3SsZxu~WfEarTRsUmSCwIZ~9mKvXyUsuZ-d96r76AYg4mBIg1cXJRHvyfT4MhOnYsHNgr1Jmx1kr6MpWSzslTfYJ0PemJ~95vjLTU7CL0BpJdZRDMgrMP5qJGj1wll2oa7lpeDKAszr1CQp9nFw9HIpbXavt23EgQ-lUI62rt7r5QDec16Df-kixft-VKy8pdS9LumkyEFsibPE3ToBWIdxfRSLDI-RWSuyfArGFAdp83XUhCznQofF-dMB6c8TfitNcpSjakDkyaD10HmP6Lnw__",
    logo: "https://s3-alpha-sig.figma.com/img/5b9b/ab2b/747bee155f0768a3cb6634f1ec7f1b61?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klqNGQgt2prba14QmaTMu0G9-UUskzfevTTJ6BKaP7F65GRg6nts17U1vn5Fb5FGks0mWLCs74EAzjI6T0UTTpcQOvRnm-e~FbLVH9SDCCHGWfY~d-~VB0LvkBP-cRSJW25baYfmDaFhTsQ6lGhtLdZiyy8tthjLlTponm2Jew7TJpbzP59zTik0ua3aguiWqAgAWrUZR4bzVNM2slcBEbywWE4apGBiU1bTvws7vZmAPwKKpRpKAuh9gMUkw0WedR-pIFm3KjPYBnqIjFGEtWLhN4faZwSVfz6J-J7ZAlSUBYf~OTURLaqKor6xVXFj4wKlgIWSFDvUx-3f437m6Q__",
    levels: [
      { title: "Quality", levels: [100, 100, 100, 100, 100] },
      { title: "Ease of Use", levels: [100, 100, 100, 100, 100] },
      { title: "Value", levels: [100, 100, 100, 100, 0] },
      { title: "Ease Setup", levels: [100, 100, 100, 100, 0] },
    ],
  },
  {
    name: "Ronald Richards",
    avatar:
      "https://s3-alpha-sig.figma.com/img/9846/73b3/30142bfde5bdcdb7549cf75f7a51d100?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UoMz4LDZQfU5jn4CPKa1XPObd4RhfsFpgXWMdC~Ay7QGHBE3FhMQNK8y9SDODZz0NaK9Gn1yA4VpdMYjHsd7AKoJJ5~UKGKIRZ8Et0Cuho8YtOWCpSKmQjAMlQzG3OSouWUyA1UP2XSnydEQdhOwu3cMKdqdopPtSVWVfk3rQ2ZR3o--PwEj~HQ~KATSmyydAe7lFqhGScdGgTV2prNakmd-Zr~B320FNJiUSrCJnKlzQeHOFFUHtIt9F4M5G6ut0~Nq8hj3xHi5PSpT171kwjs-WKhWU~03awpTVdXanwibBY5XvHRP7JDu2sAcWwezt8rXm-xLMO-clBtbqhAHGg__",
    logo: "https://s3-alpha-sig.figma.com/img/f95d/779e/508fd34882b5e6221783ed8f19aa5cd9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKj~7nRO0yQugyU4xXkUxF0VDujFh0zhca5Tx~DOsvh~mS8liiXeO3zvDUouujIjydnoENQbiUIOcqzM65a373K3XthXIE~O6BlwgbQc-CbTl1k3lr1zbRCumDYYHeIJYOXY7RL6f9U4rzEi4hNztdNxBRsyD4QbFe0~sGCSWAiD3IgsR5XsTClZTwtVTo9smov1St2AZYbr2YzmERfhpv0Jq7Bew1fWthSkfuceh6Jsd-kg2L94DJFF8opD-byELxY28BvhTkjsr7TYBMQcqPI~ycrvLLn9Dgp0oCV~h~pFeD3mNcC650cMdzcgctBZ96Jv2tDDwCdp~M3RYSlxqg__",
    levels: [
      { title: "Quality", levels: [100, 100, 100, 100, 0] },
      { title: "Ease of Use", levels: [100, 100, 100, 0, 0] },
      { title: "Value", levels: [100, 100, 100, 100, 100] },
      { title: "Ease Setup", levels: [100, 100, 100, 100, 100] },
    ],
  },
  {
    name: "Savannah Nguyen",
    avatar:
      "https://s3-alpha-sig.figma.com/img/e404/d5cc/54ba25713632952c4d93224c4cc7fbbf?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=crbs2DJxWv-1YFH1SEIEcUjiRR2nngqmpbjdbMRTy78B4kagvZrlrITIvkM2SIKgGST25Ao3GhhItICIS~guN7Kdr44lvcrd6IgLnrHUG1UD7dTqBEFy6jQiGQEpzXJJ0CEptJQuBP2HgtqFoqJX~HCp~mwCZ-hnHWKExdBi570gnfR5A-3lVxKpYEKT2UaZi4tde1O0tv4G~dqAbRnJBGHrn65KtWyvfxn5zAfTFAkuk~6gYHM8Z6M9mgzu1tbuTuEOt4rFL~PcW3wQ4UPg91H14yS7Ne6wmdFs3aGb8UY4dzqM1mNo~ROJkxmXjcWPI-FJRg3Pd-LQ9A9woC-q1g__",
    logo: "https://s3-alpha-sig.figma.com/img/a51d/8481/072bb0bcf723bb5336647e24c01159ad?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QU60rn8Ss~XM6-8HvnTvRMlS1AJ1Y~Jdxfp-jAZLS4H1vj2CnhuJFG-w9Rl1VbgAKZj18AbEAG6-2srMIqla4pdIofS5~QF3ID-2xFJAVsOhBiWxj6JRqr1a0Q2q3QBYv65fbpfg-HiVzTfZBnSf6lM-mGsd1qWlYX9j-kR2WKvOIbL8fg26BwyETwByZnfneGrbKVBPgnoIGeT0PxMVN85Lt~sjTB33d1qS0-PvrwFfvLvWJ5m6MysPfZHdCWrMnwq4AeBF1BaIW1iAtJgdgYwMyMAsmikALTS~~CYL3sSdKG928G~z7rqw2kZvGV2Novgn5ZlKVIRCFcdXxdETYw__",
    levels: [
      { title: "Quality", levels: [100, 100, 100, 100, 0] },
      { title: "Ease of Use", levels: [100, 100, 100, 100, 100] },
      { title: "Value", levels: [100, 100, 100, 100, 100] },
      { title: "Ease Setup", levels: [100, 100, 100, 0, 0] },
    ],
  },
];

const ReviewItems = () => {
  return (
    <div className="mt-7">
      {dataReviews.map((review, index) => (
        <ReviewItem
          key={index}
          data={review}
          isLineBreak={index < dataReviews.length - 1}
        />
      ))}
    </div>
  );
};

export default ReviewItems;
