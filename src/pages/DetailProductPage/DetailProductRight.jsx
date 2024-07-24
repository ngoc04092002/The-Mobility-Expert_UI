import React from "react";

const imgs = [
  "https://s3-alpha-sig.figma.com/img/5b9b/ab2b/747bee155f0768a3cb6634f1ec7f1b61?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=klqNGQgt2prba14QmaTMu0G9-UUskzfevTTJ6BKaP7F65GRg6nts17U1vn5Fb5FGks0mWLCs74EAzjI6T0UTTpcQOvRnm-e~FbLVH9SDCCHGWfY~d-~VB0LvkBP-cRSJW25baYfmDaFhTsQ6lGhtLdZiyy8tthjLlTponm2Jew7TJpbzP59zTik0ua3aguiWqAgAWrUZR4bzVNM2slcBEbywWE4apGBiU1bTvws7vZmAPwKKpRpKAuh9gMUkw0WedR-pIFm3KjPYBnqIjFGEtWLhN4faZwSVfz6J-J7ZAlSUBYf~OTURLaqKor6xVXFj4wKlgIWSFDvUx-3f437m6Q__",
  "https://s3-alpha-sig.figma.com/img/3b93/436f/a68f50b50c2d32170641b79cdc8da2d5?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfaVzJUwEzIilHckuv5jefPAB1CULmtTa0ACwoNsUdnCanaqLQ7QXGWeQaLGQE-Ph5zDhjBPNIkehEJBEV0oTgbtgDqtUgpoI3z07JawvNBnWN2jClSSHj9IAKi-oX51BpiRuYEiBoODzKSpWF5qDB1doytPEpIl0HhQ5IpYIHfAeqPSI2EJp~N~XYCEc9AqJq21f1IzRh~UBHVGwzWu4MQbakZne9h79ImHb5NAoKQPRcW5MRtXdgn974ccsu7NAuy2tHIyQXAnEMiEnoukHbQqaegdCb~NJbgBa30ckPSVEwhKp4TsoVbZAO8e5XUaMTNGBhbx41-kQAqFvkUQdQ__",
  "https://s3-alpha-sig.figma.com/img/f95d/779e/508fd34882b5e6221783ed8f19aa5cd9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKj~7nRO0yQugyU4xXkUxF0VDujFh0zhca5Tx~DOsvh~mS8liiXeO3zvDUouujIjydnoENQbiUIOcqzM65a373K3XthXIE~O6BlwgbQc-CbTl1k3lr1zbRCumDYYHeIJYOXY7RL6f9U4rzEi4hNztdNxBRsyD4QbFe0~sGCSWAiD3IgsR5XsTClZTwtVTo9smov1St2AZYbr2YzmERfhpv0Jq7Bew1fWthSkfuceh6Jsd-kg2L94DJFF8opD-byELxY28BvhTkjsr7TYBMQcqPI~ycrvLLn9Dgp0oCV~h~pFeD3mNcC650cMdzcgctBZ96Jv2tDDwCdp~M3RYSlxqg__",
  "https://s3-alpha-sig.figma.com/img/a51d/8481/072bb0bcf723bb5336647e24c01159ad?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QU60rn8Ss~XM6-8HvnTvRMlS1AJ1Y~Jdxfp-jAZLS4H1vj2CnhuJFG-w9Rl1VbgAKZj18AbEAG6-2srMIqla4pdIofS5~QF3ID-2xFJAVsOhBiWxj6JRqr1a0Q2q3QBYv65fbpfg-HiVzTfZBnSf6lM-mGsd1qWlYX9j-kR2WKvOIbL8fg26BwyETwByZnfneGrbKVBPgnoIGeT0PxMVN85Lt~sjTB33d1qS0-PvrwFfvLvWJ5m6MysPfZHdCWrMnwq4AeBF1BaIW1iAtJgdgYwMyMAsmikALTS~~CYL3sSdKG928G~z7rqw2kZvGV2Novgn5ZlKVIRCFcdXxdETYw__",
];

const DetailProductRight = () => {
  return (
    <div className="hidden lg:w-[30%] lg:block ml-20 mt-48">
      <h6 className="text-[#EF2F2F] text-[14px] text-center font-normal">
        25,345 people have viewed this product this month
      </h6>
      <div className="rounded-[5px] bg-[#F2F4F6] flex flex-col items-center pt-6 px-8 pb-8">
        <h2 className="text-[24px] mb-8">The Expert’s Prices</h2>
        {imgs.map((img, index) => (
          <div key={index} className="w-full">
            <img src={img} alt="" />
            <button className="text-[20px] w-full px-10 py-2 mt-4 rounded-[5px] bg-[#0DB14B] text-white">
              $979.00
            </button>
            {index < imgs.length - 1 && (
              <p className="border border-solid border-[#D9D9E2] w-full opacity-40 my-8"></p>
            )}
          </div>
        ))}
      </div>
      <button className="text-[17px] w-full px-10 py-2 mt-8 rounded-[5px] bg-[#F2F4F6] ">
        Listed Price: $1223.45
      </button>
    </div>
  );
};

export default DetailProductRight;
