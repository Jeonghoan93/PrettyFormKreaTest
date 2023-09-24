import ClientOnly from "src/components/ClientOnly";
import Container from "src/components/Container";
import TextContainer from "src/components/TextContainer";

const mockedData = [
  {
    title: "Enklare - A Swedish FinTech",
    desc: "Skills: TypeORM · Backend Engineering · UI/UX · REST APIs · Front-End Development · MySQL · Jest · Integration Testing · Vue.js · NestJS · Gitlab · TypeScript",
    user: {
      img: "https://media.licdn.com/dms/image/D4D03AQGIxd-BionXWQ/profile-displayphoto-shrink_400_400/0/1683486219744?e=1700697600&v=beta&t=ZkXCMsHL1kI9Da4YfrCJH6IFL3zcq7n8PgByRYq_oQA",
      name: "Jimmy",
      role: "2023 Mar - July",
    },
  },
  {
    title: "PartyX - European Adventure",
    desc: "Skills: Microservices · UI/UX · REST APIs · MongoDB · Front-End Development · Jest · Git · TypeScript · React.js · JavaScript · Node.js",
    user: {
      img: "https://media.licdn.com/dms/image/D4D03AQGIxd-BionXWQ/profile-displayphoto-shrink_400_400/0/1683486219744?e=1700697600&v=beta&t=ZkXCMsHL1kI9Da4YfrCJH6IFL3zcq7n8PgByRYq_oQA",
      name: "Jimmy",
      role: "2020 Feb - 2022 June",
    },
  },
];

const Cv: React.FC = () => {
  return (
    <Container>
      <div className="mt-7">
        <ClientOnly>
          <section className="">
            <div className="mb-2">
              <h2 className="text-[13pt] font-bold">Great UX/UI</h2>
              <span className="text-[11pt] text-gray-600 font-semibold">
                100% responsive and mobile-friendly
              </span>
            </div>
            {mockedData.map((data, index) => (
              <TextContainer key={index} {...data} />
            ))}
          </section>
        </ClientOnly>
      </div>
    </Container>
  );
};

export default Cv;
